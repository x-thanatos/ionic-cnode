import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { HomeComponent } from '../pages/home/home.component'
import { UserComponent } from '../pages/user/user.component'

@Component({
    templateUrl: 'app.component.html'
})
export class AppComponent {
    tabs = [
        {
            component: HomeComponent,
            title: '首页',
            icon: 'home'
        },
        {
            component: UserComponent,
            title: '用户',
            icon: 'information-circle'
        }
    ]


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault()
            splashScreen.hide()
        })
    }
}
