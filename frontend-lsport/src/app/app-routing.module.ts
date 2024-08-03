import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JogadoresComponent} from "./components/jogadores/jogadores.component";
import {TreinadoresComponent} from "./components/treinadores/treinadores.component";
import {ServicosComponent} from "./components/servicos/servicos.component";
import {IntermediacoesComponent} from "./components/intermediacoes/intermediacoes.component";
import {SobreNosComponent} from "./components/sobre-nos/sobre-nos.component";
import {JogadorDetalhadoComponent} from "./components/jogador-detalhado/jogador-detalhado.component";
import {JogadorComponent} from "./components/jogador/jogador.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CadastrarJogadorComponent} from "./components/cadastrar-jogador/cadastrar-jogador.component";
import {CadastrarIntermediacaoComponent} from "./components/cadastrar-intermediacao/cadastrar-intermediacao.component";
import {CadastrarTreinadorComponent} from "./components/cadastrar-treinador/cadastrar-treinador.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent, children:[
      {path:'jogador', component:CadastrarJogadorComponent},
      {path:':intermediacao', component:CadastrarIntermediacaoComponent},
      {path:'treinador', component:CadastrarTreinadorComponent}
    ]
  },
  {path:'jogadores', component:JogadoresComponent, children:[
      {path:'', component:JogadorComponent},
      {path:':jogadorId', component:JogadorDetalhadoComponent}
    ]
  },
  {path:'intermediacoes', component:IntermediacoesComponent},
  {path:'lf', component:LoginComponent},
  {path:'servicos', component:ServicosComponent},
  {path:'sobre', component:SobreNosComponent},
  {path:'treinadores', component:TreinadoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
