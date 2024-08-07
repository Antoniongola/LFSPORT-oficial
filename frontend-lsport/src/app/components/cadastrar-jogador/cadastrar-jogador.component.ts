import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JogadorService} from "../../services/jogador/jogador.service";
import {Jogador} from "../../entity/Jogador";

@Component({
  selector: 'app-cadastrar-jogador',
  templateUrl: './cadastrar-jogador.component.html',
  styleUrl: './cadastrar-jogador.component.css'
})
export class CadastrarJogadorComponent implements OnInit{
  jogadorForm!: FormGroup;
  jogadorImage!:File;

  constructor(private formBuilder: FormBuilder,
              private jogadorService:JogadorService) {

  }

  ngOnInit() {
    this.jogadorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      equipa: ['', Validators.required],
      descricao: [''],
      photoPath: [''],
      posicao: ['', Validators.required],
      equipaNacional: [''],
      pePreferido: [''],
      dataNascimento: [''],
      altura: [null, [Validators.required, Validators.min(0)]],
      nacionalidade: [''],
      trofeus: ['']
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.jogadorImage = file;
    }
  }

  onSubmit() {
    if (this.jogadorForm.valid) {
      let jogador:Jogador=new Jogador(0,
        this.jogadorForm.get('nome')?.value, this.jogadorForm.get('equipa')?.value,
        this.jogadorForm.get('descricao')?.value, '', this.jogadorForm.get('posicao')?.value,
        this.jogadorForm.get('equipaNacional')?.value, this.jogadorForm.get('pePreferido')?.value,
        this.jogadorForm.get('dataNascimento')?.value, this.jogadorForm.get('altura')?.value,
        this.jogadorForm.get('nacionalidade')?.value, this.jogadorForm.get('trofeus')?.value
      );

      this.jogadorService.newJogador(jogador, this.jogadorImage).subscribe(response=>{
        alert('Jogador adicionado com sucesso ao site!');
        window.location.reload();
      });
    }
  }
}
