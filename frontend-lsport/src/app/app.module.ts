import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';
import { TreinadoresComponent } from './components/treinadores/treinadores.component';
import { JogadorDetalhadoComponent } from './components/jogador-detalhado/jogador-detalhado.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { IntermediacoesComponent } from './components/intermediacoes/intermediacoes.component';
import { JogadorComponent } from './components/jogador/jogador.component';
import {NgOptimizedImage} from "@angular/common";
import { CadastrarJogadorComponent } from './components/cadastrar-jogador/cadastrar-jogador.component';
import { CadastrarTreinadorComponent } from './components/cadastrar-treinador/cadastrar-treinador.component';
import { CadastrarIntermediacaoComponent } from './components/cadastrar-intermediacao/cadastrar-intermediacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JogadoresComponent,
    TreinadoresComponent,
    JogadorDetalhadoComponent,
    ServicosComponent,
    SobreNosComponent,
    IntermediacoesComponent,
    JogadorComponent,
    CadastrarJogadorComponent,
    CadastrarTreinadorComponent,
    CadastrarIntermediacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
