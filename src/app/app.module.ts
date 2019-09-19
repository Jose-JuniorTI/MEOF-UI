import { NodeService } from './../service/nodeservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule } from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastyModule } from 'ng2-toasty';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CadempresaComponent } from './cadempresa/cadempresa.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ErrorHandlerService } from './core/error-handler.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';


import { CadempresaService } from './cadempresa/cadempresa.service';

import {CardModule} from 'primeng/card';


const routes: Routes = [

  { path: 'inicio', component:InicioComponent},
  { path: 'cadempresa', component:CadempresaComponent},
  { path: 'cadempresa/:codigo', component:CadempresaComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    CadempresaComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    RouterModule.forRoot(routes),
    MenubarModule,
    ToastyModule.forRoot(),
    CardModule,
    FormsModule,
    InputTextModule,
    HttpModule,
    ConfirmDialogModule,
    AppRoutingModule,
    InputMaskModule
  ],
  providers: [
    NodeService,
    CadempresaService,
    ConfirmationService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
