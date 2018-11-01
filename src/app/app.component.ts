import { Component, OnInit } from '@angular/core'
import { MenuController, Platform } from '@ionic/angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

const TABS = [
    {
        path: 'home',
        label: '首页',
        icon: 'home'
    },
    {
        path: 'user',
        label: '用户',
        icon: 'person'
    }
]

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    tabs = TABS

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
