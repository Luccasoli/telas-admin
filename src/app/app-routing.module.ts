import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './salas/salas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoComponent } from './info/info.component';
import { CadastrarAdministradorComponent } from './cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarItensDeConsumoComponent } from './cadastrar-itens-de-consumo/cadastrar-itens-de-consumo.component';
import { CadastrarItensDeServicoComponent } from './cadastrar-itens-de-servico/cadastrar-itens-de-servico.component';
import { CadastrarPlanoComponent } from './cadastrar-plano/cadastrar-plano.component';
import { CadastrarSalaDeReuniaoComponent } from './cadastrar-sala-de-reuniao/cadastrar-sala-de-reuniao.component';
import { CadastrarSalaDeTreinamentoComponent } from './cadastrar-sala-de-treinamento/cadastrar-sala-de-treinamento.component';
import { CadastrarSalaExclusivaComponent } from './cadastrar-sala-exclusiva/cadastrar-sala-exclusiva.component';
import { ListarItensDeConsumoComponent } from './listar-itens-de-consumo/listar-itens-de-consumo.component';
import { ListarItensDeServicoComponent } from './listar-itens-de-servico/listar-itens-de-servico.component';

const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'salas', component: SalasComponent},
  {path: 'home', component: CadastroComponent},
  {path: 'info', component: InfoComponent},
  {path: 'home/cadastrar-administrador', component: CadastrarAdministradorComponent},
  {path: 'home/cadastrar-itens-de-consumo', component: CadastrarItensDeConsumoComponent},
  {path: 'home/cadastrar-itens-de-servico', component: CadastrarItensDeServicoComponent},
  {path: 'home/cadastrar-plano', component: CadastrarPlanoComponent},
  {path: 'home/cadastrar-sala-de-reuniao', component: CadastrarSalaDeReuniaoComponent},
  {path: 'home/cadastrar-sala-de-treinamento', component: CadastrarSalaDeTreinamentoComponent},
  {path: 'home/cadastrar-sala-exclusiva', component: CadastrarSalaExclusivaComponent},
  {path: 'home/cadastrar-itens-de-consumo/listar-itens-de-consumo', component: ListarItensDeConsumoComponent},
  {path: 'home/cadastrar-itens-de-servico/listar-itens-de-servico', component: ListarItensDeServicoComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  SalasComponent,
  CadastroComponent,
  InfoComponent,
  CadastrarAdministradorComponent,
  ListarItensDeConsumoComponent,
];
