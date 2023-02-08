import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar modulos componente tarjeta
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
export const routes: Routes = [
  {path: 'cards', component:TarjetaCreditoComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
