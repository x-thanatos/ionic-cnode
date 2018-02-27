import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { AppComponent } from './app.component'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { TabsComponent } from '../pages/tabs/tabs.component'
import { HomeComponent } from '../pages/home/home.component'
import { ContactComponent } from '../pages/contact/contact.component'
import { AboutComponent } from '../pages/about/about.component'
import { ShareModule } from '../share/share.module'
import { CoreModule } from '../core/core.module'

const components = [
    AppComponent,
    TabsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        BrowserModule,
        CoreModule,
        ShareModule,
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...components
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
