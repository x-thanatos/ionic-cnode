import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { AppComponent } from './app.component'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { ShareModule } from '../share/share.module'
import { CoreModule } from '../core/core.module'
import { HomeComponent } from '../pages/home/home.component'
import { UserComponent } from '../pages/user/user.component'
import { TopicListComponent } from '../pages/home/components/topic-list/topic-list.component'
import { TopicDetailComponent } from '../pages/home/components/topic-detail/topic-detail.component'
import { TopicCommentComponent } from '../pages/home/components/topic-comment/topic-comment.component'
import { AboutComponent } from '../pages/user/components/about/about.component'
import { RecentTopicListComponent } from '../pages/user/components/recent-topic-list/recent-topic-list.component'
import { SettingsComponent } from '../pages/user/components/settings/settings.component'
import { EditUserComponent } from '../pages/user/components/edit-user/edit-user.component'
import { MarketComponent } from '../pages/user/components/market/market.component'
import { MessageListComponent } from '../pages/user/components/message-list/message-list.component'
import { MessageDetailComponent } from '../pages/user/components/message-detial/message-detail.component'

const HOME_COMPONENTS = [
    TopicListComponent,
    TopicDetailComponent,
    TopicCommentComponent,
    HomeComponent
]

const USER_COMPONENTS = [
    UserComponent,
    AboutComponent,
    SettingsComponent,
    EditUserComponent,
    MarketComponent,
    MessageDetailComponent,
    MessageListComponent,
    RecentTopicListComponent
]

const COMPONENTS = [
    AppComponent,
    ...HOME_COMPONENTS,
    ...USER_COMPONENTS
]

const IONIC_MODULE_CONFIG = {
    preloadModules: true,
    backButtonText: '返回',
    iconMode: 'ios',
    pageTransition: 'ios-transition',
    activator: 'ripple',
    swipeBackEnabled: true
}

const DEEP_LINK_CONFIG: DeepLinkConfig = {
    links: [
        {
            component: HomeComponent,
            name: 'home',
            segment: 'home/list',
            defaultHistory: [],
            priority: 'high'
        },
        {
            component: UserComponent,
            name: 'user',
            segment: 'user',
            defaultHistory: [],
            priority: 'high'
        },
        {
            component: TopicDetailComponent,
            name: 'topic-detail',
            segment: 'home/detail/:id',
            defaultHistory: ['home']
        },
        {
            component: AboutComponent,
            name: 'about',
            segment: 'about',
            defaultHistory: ['user']
        }
    ]
}

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        BrowserModule,
        CoreModule,
        ShareModule,
        IonicModule.forRoot(AppComponent, IONIC_MODULE_CONFIG, DEEP_LINK_CONFIG),
        IonicStorageModule.forRoot({ name: 'database' })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...COMPONENTS
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
