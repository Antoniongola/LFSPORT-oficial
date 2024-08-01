import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JogadoresComponent} from "./components/jogadores/jogadores.component";
import {TreinadoresComponent} from "./components/treinadores/treinadores.component";
import {ServicosComponent} from "./components/servicos/servicos.component";
import {IntermediacoesComponent} from "./components/intermediacoes/intermediacoes.component";
import {SobreNosComponent} from "./components/sobre-nos/sobre-nos.component";
import {JogadorDetalhadoComponent} from "./components/jogador-detalhado/jogador-detalhado.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'jogadores', component:JogadoresComponent, children:[
      {path:':jogadorId', component:JogadorDetalhadoComponent}
    ]
  },
  {path:'intermediacoes', component:IntermediacoesComponent},
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
