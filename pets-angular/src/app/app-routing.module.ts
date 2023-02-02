
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarPetsComponent } from './components/atualizar-pets/atualizar-pets.component';
import { CadastrarPetsComponent } from './components/cadastrar-pets/cadastrar-pets.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPetsComponent } from './components/listar-pets/listar-pets.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ListarPets', component: ListarPetsComponent},
  {path: 'CadastrarPets', component: CadastrarPetsComponent},
  {path: 'AtualizarPets', component: AtualizarPetsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
