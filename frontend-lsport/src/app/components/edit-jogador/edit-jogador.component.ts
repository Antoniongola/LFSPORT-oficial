import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JogadorService} from "../../services/jogador/jogador.service";
import {Jogador} from "../../entity/Jogador";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-jogador',
  templateUrl: './edit-jogador.component.html',
  styleUrl: './edit-jogador.component.css'
})
export class EditJogadorComponent implements OnInit{
  jogadorForm: FormGroup=new FormGroup({});
  jogadorImage!:File;
  jogador!:Jogador;

  constructor(private formBuilder: FormBuilder,
              private jogadorService:JogadorService,
              private route:ActivatedRoute) {
    this.jogadorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      equipa: ['', Validators.required],
      descricao: [''],
      photoPath: [''],
      posicao: ['', Validators.required],
      equipaNacional: [''],
      pePreferido: [''],
      dataNascimento: [''],
      altura: ['', [Validators.required, Validators.min(0), Validators.max(300)]],
      nacionalidade: [''],
      trofeus: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(response=>{
      const id :any = response.get('jogadorId');
      this.jogadorService.getJogador(id).subscribe(playerResponse => {
        this.jogador = playerResponse;
        // Atualizando os valores dos controles com os dados recebidos
        this.jogadorForm.patchValue({
          nome: this.jogador.nome,
          equipa: this.jogador.equipa,
          descricao: this.jogador.descricao,
          photoPath: this.jogador.photoPath,
          posicao: this.jogador.posicao,
          equipaNacional: this.jogador.equipaNacional,
          pePreferido: this.jogador.pePreferido,
          dataNascimento: this.jogador.dataNascimento,
          altura: this.jogador.altura,
          nacionalidade: this.jogador.nacionalidade,
          trofeus: this.jogador.trofeus
        });
      });
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

      let jogador:Jogador=new Jogador(this.jogador.id,
        this.jogadorForm.get('nome')?.value, this.jogadorForm.get('equipa')?.value,
        this.jogadorForm.get('descricao')?.value, '', this.jogadorForm.get('posicao')?.value,
        this.jogadorForm.get('equipaNacional')?.value, this.jogadorForm.get('pePreferido')?.value,
        this.jogadorForm.get('dataNascimento')?.value, this.jogadorForm.get('altura')?.value,
        this.jogadorForm.get('nacionalidade')?.value, this.jogadorForm.get('trofeus')?.value
      );

      this.jogadorService.updateJogador(jogador, this.jogador.id, this.jogadorImage).subscribe(response=>{
        alert('Jogador editado com sucesso!');
        window.location.reload();
      });
    }
  }
}
