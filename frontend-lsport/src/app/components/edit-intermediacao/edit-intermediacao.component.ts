import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Jogador} from "../../entity/Jogador";
import {IntermediacaoService} from "../../services/intermediacao/intermediacao.service";
import {JogadorService} from "../../services/jogador/jogador.service";
import {Intermediacao} from "../../entity/Intermediacao";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-intermediacao',
  templateUrl: './edit-intermediacao.component.html',
  styleUrl: './edit-intermediacao.component.css'
})
export class EditIntermediacaoComponent implements OnInit{
  intermediacaoImage!:File;
  intermediacaoForm!:FormGroup;
  jogadores:Jogador[]=[];
  intermediacao!:Intermediacao;

  constructor(private intermediacaoService:IntermediacaoService,
              private jogadorService:JogadorService,
              private formBuilder:FormBuilder,
              private route: ActivatedRoute) {
    this.intermediacaoForm = this.formBuilder.group({
      jogadorTransferido: ['', Validators.required],
      equipaAntiga: ['', Validators.required],
      equipaNova: ['', Validators.required],
      anoIntermediacao:[0, Validators.required, Validators.min(0)],
      photoPath: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(response=>{
      const id:any=response.get('intermediacaoId');
      this.intermediacaoService.getIntermediacao(id).subscribe(intermediacaoResponse=>{
        this.intermediacao = intermediacaoResponse;
      });
    });

    this.jogadorService.getAllJogadores().subscribe(response=>{
      this.jogadores = response;
      this.intermediacaoForm.patchValue({
        jogadorTransferido: this.intermediacao.jogadorTransferido,
        equipaAntiga: this.intermediacao.equipaAntiga,
        equipaNova: this.intermediacao.equipaNova,
        anoIntermediacao: this.intermediacao.anoIntermediacao,
        photoPath: this.intermediacao.photoPath
      });
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
    let intermediacao:Intermediacao=new Intermediacao(this.intermediacao.id,
      this.intermediacaoForm.get('jogadorTransferido')?.value,
      this.intermediacaoForm.get('equipaAntiga')?.value,
      this.intermediacaoForm.get('equipaNova')?.value,
      this.intermediacaoForm.get('anoIntermediacao')?.value,
      '');

    this.intermediacaoService.updateIntermediacao(intermediacao, this.intermediacao.id , this.intermediacaoImage).subscribe(response=>{
      alert('INTERMEDIAÇÃO FOI ATUALIZADA COM SUCESSO');
      window.location.reload();
    });
  }
}
