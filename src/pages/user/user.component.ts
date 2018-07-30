import { Component, OnInit, ViewChild } from '@angular/core'
import { AlertController, List } from '@ionic/angular'
import { Store } from '@ngrx/store'
import { Storage } from '@ionic/storage'
import { filter, switchMap, take } from 'rxjs/operators'
import { from } from 'rxjs/internal/observable/from'
import { AppState } from '../../core/status-manager/reducers'
import { UserActions } from '../../core/status-manager/user/user.actions'
import { userInfoSelector } from '../../core/status-manager/user/user.selector'
import { SimpleReply, SimpleTopic, UserInfoModel } from '../../core/status-manager/user/user.model'
import { DATABASE_KEYS } from '../../core/util'

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

    constructor(private _storage: Storage,
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
    }

    goMessageList() {
    }

    goSettings() {
    }

    goMarket() {
    }

    goRecentTopic(topics: SimpleTopic[]) {
    }

    goRecentReply(replies: SimpleReply[]) {
    }

    goAbout() {
    }


    logout() {
        this._alert.create({
            subHeader: '退出登录？',
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
            .then((alert) => {
                alert.present()
            })
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
