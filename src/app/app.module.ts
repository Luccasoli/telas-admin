import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CadastrarAdministradorComponent } from './cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarItensDeConsumoComponent } from './cadastrar-itens-de-consumo/cadastrar-itens-de-consumo.component';
import { CadastrarItensDeServicoComponent } from './cadastrar-itens-de-servico/cadastrar-itens-de-servico.component';
import { CadastrarSalaExclusivaComponent } from './cadastrar-sala-exclusiva/cadastrar-sala-exclusiva.component';
import { CadastrarSalaDeReuniaoComponent } from './cadastrar-sala-de-reuniao/cadastrar-sala-de-reuniao.component';
import { CadastrarSalaDeTreinamentoComponent } from './cadastrar-sala-de-treinamento/cadastrar-sala-de-treinamento.component';
import { CadastrarPlanoComponent } from './cadastrar-plano/cadastrar-plano.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CadastrarItensDeConsumoComponent,
    CadastrarItensDeServicoComponent,
    CadastrarSalaExclusivaComponent,
    CadastrarSalaDeReuniaoComponent,
    CadastrarSalaDeTreinamentoComponent,
    CadastrarPlanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
