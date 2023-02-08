import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//modulo para la comunicación Http - Comunicacion con servicios-apis
import { HttpClientModule } from '@angular/common/http';
//importar modulo para routing
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { ListPlaceholdersComponent } from './components/place-holder/list-placeholders/list-placeholders.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    ListPlaceholdersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    //se importa el modulo de comunicacion Http
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
