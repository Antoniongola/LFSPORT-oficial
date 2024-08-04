import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-jogador',
  templateUrl: './cadastrar-jogador.component.html',
  styleUrl: './cadastrar-jogador.component.css'
})
export class CadastrarJogadorComponent implements OnInit{
  jogadorForm!: FormGroup;
  jogadorImage!:File;

  constructor(private formBuilder: FormBuilder) {

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
      console.log('Form Submitted!', this.jogadorForm.value);
    }
  }
}
