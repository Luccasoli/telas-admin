import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './salas/salas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoComponent } from './info/info.component';

const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'salas', component: SalasComponent},
  {path: 'home', component: CadastroComponent},
  {path: 'info', component: InfoComponent},
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
export const routingComponents = [SalasComponent, CadastroComponent, InfoComponent];
