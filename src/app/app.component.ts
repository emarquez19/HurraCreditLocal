import { Component } from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  // constructor(public translate: TranslateService) {
  //     // this language will be used as a fallback when a translation isn't found in the current language
  //     // translate.setDefaultLang('es');
  //     // // the lang to use, if the lang isn't available, it will use the current loader to get them
  //     // translate.use('es');
  //     translate.addLangs(['es', 'en']);
  //     translate.setDefaultLang('es');
  //     const browserLang = translate.getBrowserLang();
  //     translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
  // }

}
