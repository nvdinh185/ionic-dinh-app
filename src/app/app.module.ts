import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YoutubePage } from '../pages/youtube/youtube';
import { ShopPage } from '../pages/shop/shop'
import { BuyoutPage } from '../pages/buyout/buyout'
import { HeaderPage } from '../pages/header/header'
import { FooterPage } from '../pages/footer/footer'
import { HocvienPage } from '../pages/hocvien/hocvien'
import { DetailHvPage } from '../pages/detail-hv/detail-hv'

import { GetHocVienProvider } from '../providers/get-hoc-vien/get-hoc-vien';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    YoutubePage,
    ShopPage,
    BuyoutPage,
    HeaderPage,
    FooterPage,
    HocvienPage,
    DetailHvPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    YoutubePage,
    ShopPage,
    BuyoutPage,
    HeaderPage,
    FooterPage,
    HocvienPage,
    DetailHvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetHocVienProvider
  ]
})
export class AppModule {}
