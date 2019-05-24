import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar el modulo de form
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { ValidationComponent } from './validation/validation.component';
import { HijosComponent } from './hijos/hijos.component';
import { BrothersComponent } from './brothers/brothers.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const rutas: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'formulario', component:FormularioComponent },
  {path: 'inicio', component:InicioComponent },
  {path: 'MenuVertical', component:MenuVerticalComponent },
  {path:'clientes', component: ClientesComponent},
  {path:'hijos', component: HijosComponent},
  {path:'brothers', component: BrothersComponent},
  {path:'validation', component: ValidationComponent},
  {path: 'clientes/page/:page', component: ClientesComponent},
  {path: 'usuarios/page/:page', component: UsuariosComponent},
  {path: 'usuarios', component: UsuariosComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    FormularioComponent,
    ClientesComponent,
    MenuVerticalComponent,
    ValidationComponent,
    HijosComponent,
    BrothersComponent,
    PaginadorComponent,
    UsuariosComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MatButtonModule, MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
