import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TreinadorService} from "../../services/treinador/treinador.service";
import {Treinador} from "../../entity/Treinador";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-treinador',
  templateUrl: './edit-treinador.component.html',
  styleUrl: './edit-treinador.component.css'
})
export class EditTreinadorComponent implements OnInit{
  treinadorForm!: FormGroup;
  treinadorImage!:File;
  treinador!:Treinador;

  constructor(private formBuilder: FormBuilder,
              private treinadorService:TreinadorService,
              private route:ActivatedRoute,
              ) {
    this.treinadorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      equipa: ['', Validators.required],
      descricao: ['', Validators.required],
      photoPath: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(response=>{
      const id:any=response.get('treinadorId');
      this.treinadorService.getTreinador(id).subscribe(treinadorReponse=>{
        this.treinador = treinadorReponse;
        this.treinadorForm.patchValue({
          nome: this.treinador.nome,
          equipa: this.treinador.equipa,
          descricao: this.treinador.descricao,
          photoPath: this.treinador.photoPath
        });
      });
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
      let treinador:Treinador= new Treinador(this.treinador.id,
        this.treinadorForm.get('nome')?.value,
        this.treinadorForm.get('equipa')?.value,
        this.treinadorForm.get('descricao')?.value,
        this.treinadorForm.get('photoPath')?.value);

      this.treinadorService.updateTreinador(treinador, this.treinador.id, this.treinadorImage).subscribe(response=>{
        alert('TREINADOR EDITADO COM SUCESSO!');
        window.location.reload();
      }, error=>{
        alert('NÃO FOI POSSÍVEL EDITAR O TREINADOR');
      });
    }
  }
}
