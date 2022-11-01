import { CommonModule,isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Request } from 'express';
import { TranslateCacheModule, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';


import { BrowserModule} from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { translateBrowserLoaderFactory } from '../shared/loaders/translate-browser.loader';

@NgModule({
  imports: [
    BrowserTransferStateModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    @Optional() @Inject(REQUEST) private req: Request,
    @Inject(PLATFORM_ID) private platform: any
  ) {
    translateCacheService.init();
    translate.addLangs(['en', 'ru']);

    const browserLang = isPlatformBrowser(this.platform)
      ? translateCacheService.getCachedLanguage() || translate.getBrowserLang() || 'en'
      : this.getLangFromServerSideCookie() || 'en';

    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  getLangFromServerSideCookie() {
    if (this.req) {
      return this.req.cookies.lang;
    }
  }
}

export function translateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
