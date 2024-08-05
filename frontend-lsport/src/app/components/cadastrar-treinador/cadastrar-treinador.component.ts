import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-treinador',
  templateUrl: './cadastrar-treinador.component.html',
  styleUrl: './cadastrar-treinador.component.css'
})
export class CadastrarTreinadorComponent implements OnInit{
  treinadorForm!: FormGroup;
  treinadorImage!:File;

  constructor(private formBuilder: FormBuilder) {

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
      console.log('Form Submitted!', this.treinadorForm.value);
    }
  }
}
