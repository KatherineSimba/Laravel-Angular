import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';


const appRoutes: Routes =[
  {path:'', component:ProductosComponent},
  {path: 'edit/:id', component:ProductoEditComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
