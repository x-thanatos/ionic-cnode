import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { AppComponent } from './app.component'

import { AboutComponent } from '../pages/about/about'
import { ContactComponent } from '../pages/contact/contact'
import { HomeComponent } from '../pages/home/home'
import { TabsComponent } from '../pages/tabs/tabs'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        TabsComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        TabsComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
