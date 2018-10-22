import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IndexComponent } from './pages/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatFormFieldModule, MatInputModule, DateAdapter , MAT_DATE_FORMATS} from '@angular/material';
import { NgxCurrencyModule } from 'ngx-currency';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// DateFormat
import { DateFormat, APP_DATE_FORMATS } from './date-format';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    NgxCurrencyModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [{provide: DateAdapter, useClass: DateFormat}, { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<any>) {
    dateAdapter.setLocale('es-do');
    }
}
