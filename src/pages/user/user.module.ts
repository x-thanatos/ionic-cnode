import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { UserRouterModule } from './user.router.module'
import { UserComponent } from './user.component'
import { SettingsComponent } from './components/settings/settings.component'
import { RecentTopicListComponent } from './components/recent-topic-list/recent-topic-list.component'
import { MessageDetailComponent } from './components/message-detial/message-detail.component'
import { MarketComponent } from './components/market/market.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { AboutComponent } from './components/about/about.component'
import { MessageListComponent } from './components/message-list/message-list.component'
import { UtilModule } from '../../util/util.module'


@NgModule({
    declarations: [
        UserComponent,
        SettingsComponent,
        RecentTopicListComponent,
        MessageListComponent,
        MessageDetailComponent,
        MarketComponent,
        EditUserComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        UtilModule,
        UserRouterModule
    ]
})
export class UserModule {
}
