import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IndexComponent } from './pages/index/index.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    LoginComponent,
    NotFoundComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    WorkflowComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    SweetAlert2Module.forRoot({
        customClass: 'swal-msj',
        confirmButtonColor: '#ffa500',
        cancelButtonClass: 'btn btn-danger'
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
