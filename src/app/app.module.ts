import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main.module';

registerLocaleData(zh);
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    LoginModule,
    MainModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          /** 与 angular.json i18n/locales 配置一致 **/
          case 'zh':
            return zh_CN;
          default:
            return en_US;
        }
      },
      deps: [LOCALE_ID],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
