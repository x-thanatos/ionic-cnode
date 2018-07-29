import { Component, OnInit, ViewChild } from '@angular/core'
import { AlertController, List, NavController } from '@ionic/angular'
import { Store } from '@ngrx/store'
import { Storage } from '@ionic/storage'
import { filter, switchMap, take } from 'rxjs/operators'
import { from } from 'rxjs/internal/observable/from'
import { AppState } from '../../core/status-manager/reducers'
import { UserActions } from '../../core/status-manager/user/user.actions'
import { userInfoSelector } from '../../core/status-manager/user/user.selector'
import { SimpleReply, SimpleTopic, UserInfoModel } from '../../core/status-manager/user/user.model'
import { DATABASE_KEYS } from '../../core/util'
import { RecentTopicListComponent } from './components/recent-topic-list/recent-topic-list.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { MessageListComponent } from './components/message-list/message-list.component'
import { SettingsComponent } from './components/settings/settings.component'
import { MarketComponent } from './components/market/market.component'

const MODE = {
    unauthenticated: 'unauthenticated',
    authenticated: 'authenticated'
}

@Component({
    selector: 'page-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    info: UserInfoModel
    @ViewChild(List) list: List
    private _mode = MODE.unauthenticated

    constructor(private _nav: NavController,
                private _storage: Storage,
                private _alert: AlertController,
                private _store: Store<AppState>) {

    }

    set mode(mode: string) {
        this._mode = mode
    }

    get mode() {
        return this._mode
    }

    ngOnInit() {
        this.list.containsSlidingItem(true)
        from(this._storage.get(DATABASE_KEYS.userInfo))
            .pipe(
                take(1),
                switchMap((userInfo) => this._updateInfo())
            )
            .subscribe(userInfo => {
                this.info = userInfo
                this.mode = MODE.authenticated
            })
    }

    goEdit() {
        this._nav.push(EditUserComponent)
    }

    goMessageList() {
        this._nav.push(MessageListComponent)
    }

    goSettings() {
        this._nav.push(SettingsComponent)
    }

    goMarket() {
        this._nav.push(MarketComponent)
    }

    goRecentTopic(topics: SimpleTopic[]) {
        this._nav.push(RecentTopicListComponent, { title: '我的主题', topics })
    }

    goRecentReply(replies: SimpleReply[]) {
        this._nav.push(RecentTopicListComponent, { title: '回复的主题', replies })
    }

    goAbout() {
        this._nav.push('about')
    }


    logout() {
        const alert = this._alert.create({
            title: '退出登录？',
            enableBackdropDismiss: true,
            buttons: [{
                text: '取消'
            }, {
                text: '确定',
                handler: () => {
                    console.log('已经退出')
                }
            }]
        })
        alert.present()
    }

    private _updateInfo() {
        this._store.dispatch(new UserActions.LoadUserInfo('x-thanatos'))

        return this._store.select(userInfoSelector)
            .pipe(
                filter(userInfo => !!userInfo),
                take(1)
            )
    }
}
