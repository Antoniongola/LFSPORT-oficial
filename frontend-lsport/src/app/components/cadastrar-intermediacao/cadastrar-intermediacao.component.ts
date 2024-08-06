import {Component, OnInit} from '@angular/core';
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JogadorService} from "../../services/jogador/jogador.service";
import {Jogador} from "../../entities/Jogador";
import {Intermediacao} from "../../entities/Intermediacao";

@Component({
  selector: 'app-cadastrar-intermediacao',
  templateUrl: './cadastrar-intermediacao.component.html',
  styleUrl: './cadastrar-intermediacao.component.css'
})
export class CadastrarIntermediacaoComponent implements OnInit{
  intermediacaoImage!:File;
  intermediacaoForm!:FormGroup;
  jogadores:Jogador[]=[];

  constructor(private intermediacaoService:IntermediacaoService,
              private jogadorService:JogadorService,
              private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.jogadorService.getAllJogadores().subscribe(response=>{
      this.jogadores = response;
    })

    this.intermediacaoForm = this.formBuilder.group({
      jogadorTransferido: ['', Validators.required],
      equipaAntiga: ['', Validators.required],
      equipaNova: ['', Validators.required],
      anoIntermediacao:['', Validators.required, Validators.min(0)],
      photoPath: ['']
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.intermediacaoImage = file;
    }
  }

  onSubmit(){
    let intermediacao:Intermediacao=new Intermediacao(0,
      this.intermediacaoForm.get('jogadorTransferido')?.value,
      this.intermediacaoForm.get('equipaAntiga')?.value,
      this.intermediacaoForm.get('equipaNova')?.value,
      this.intermediacaoForm.get('anoIntermediacao')?.value,
      '');

    this.intermediacaoService.newIntermediacao(intermediacao, this.intermediacaoImage).subscribe(response=>{
      alert('INTERMEDIAÇÃO FOI FEITA COM SUCESSO');
      window.location.reload();
    });
  }
}
