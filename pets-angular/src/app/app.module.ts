
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListarPetsComponent } from './components/listar-pets/listar-pets.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizeModule } from 'ngpq-table-resize';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFilterPipe } from './pipes/ListFilterPipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule, OrderPipe } from 'ngx-order-pipe';
import { CadastrarPetsComponent } from './components/cadastrar-pets/cadastrar-pets.component';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtualizarPetsComponent } from './components/atualizar-pets/atualizar-pets.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ListFilterPipe,
    ListarPetsComponent,
    CadastrarPetsComponent,
    HomeComponent,
    AtualizarPetsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ResizeModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
