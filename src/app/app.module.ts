import { NgModule } from '@angular/core'
import { RouteReuseStrategy } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { IonicStorageModule } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { CoreModule } from '../core/core.module'
import { AppRouterModule } from './app.router.module'
import { AppComponent } from './app.component'
import { UtilModule } from '../util/util.module'


const IONIC_MODULE_CONFIG = {
    preloadModules: true,
    backButtonText: '返回',
    iconMode: 'ios',
    pageTransition: 'ios-transition',
    activator: 'ripple',
    swipeBackEnabled: true
}


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        UtilModule,
        IonicModule.forRoot(),
        AppRouterModule,
        IonicStorageModule.forRoot({ name: 'database' })
    ],
    bootstrap: [AppComponent],
    entryComponents: [],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
export class AppModule {
}
