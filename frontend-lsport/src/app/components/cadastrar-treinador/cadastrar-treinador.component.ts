import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TreinadorService} from "../../services/treinador/treinador.service";
import {Treinador} from "../../entities/Treinador";

@Component({
  selector: 'app-cadastrar-treinador',
  templateUrl: './cadastrar-treinador.component.html',
  styleUrl: './cadastrar-treinador.component.css'
})
export class CadastrarTreinadorComponent implements OnInit{
  treinadorForm!: FormGroup;
  treinadorImage!:File;

  constructor(private formBuilder: FormBuilder,
              private treinadorService:TreinadorService) {

  }

  ngOnInit() {
    this.treinadorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      equipa: ['', Validators.required],
      descricao: [''],
      photoPath: ['']
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.treinadorImage = file;
    }
  }

  onSubmit() {
    if (this.treinadorForm.valid) {
      let treinador:Treinador= new Treinador(0,
        this.treinadorForm.get('nome')?.value,
        this.treinadorForm.get('equipa')?.value,
        this.treinadorForm.get('descricao')?.value,
        this.treinadorForm.get('photoPath')?.value);

      this.treinadorService.newTreinador(treinador, this.treinadorImage).subscribe(response=>{
        alert('TREINADOR CADASTRADO COM SUCESSO!');
        window.location.reload();
      }, error=>{
        alert('NÃO FOI POSSÍVEL CADASTRAR O TREINADOR');
      });
    }
  }
}
