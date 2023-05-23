import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListaVehiculosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    FiltroComponent,
    ListaVehiculosComponent,
    
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

