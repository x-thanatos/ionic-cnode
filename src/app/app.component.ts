import { Component, OnInit } from '@angular/core'
import { MenuController, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { HomeComponent } from '../pages/home/home.component'
import { UserComponent } from '../pages/user/user.component'

const TABS = [
    {
        component: HomeComponent,
        // 如果开启了deepLink，这个title会作为tab的路由segment
        title: '首页',
        icon: 'home'
    },
    {
        component: UserComponent,
        title: '用户',
        icon: 'person'
    }
]

@Component({
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    tabs = TABS
    homePage: HomeComponent

    constructor(private _platform: Platform,
                private _statusBar: StatusBar,
                private _splashScreen: SplashScreen,
                private _menuController: MenuController) {
        this._platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this._statusBar.styleBlackTranslucent()
            this._statusBar.overlaysWebView(true)
            this._statusBar.hide()
            this._splashScreen.show()
        })
    }

    ngOnInit() {
        this._menuController.enable(true, 'homePageMenu')
    }
}
