import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './http-interceptors';

const PROVIDERS = [httpInterceptorProviders];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: PROVIDERS,
  exports: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...PROVIDERS],
    };
  }
}
