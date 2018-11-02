import { Component, OnInit, ViewChild } from '@angular/core'
import { AlertController, List } from '@ionic/angular'
import { Store } from '@ngrx/store'
import { Storage } from '@ionic/storage'
import { filter, switchMap, take } from 'rxjs/operators'
import { from } from 'rxjs/internal/observable/from'
import { AppState } from '../../core/store/reducers'
import { UserActions } from '../../core/store/user/user.actions'
import { userInfoSelector } from '../../core/store/user/user.selector'
import { SimpleReply, SimpleTopic, UserInfoModel } from '../../core/store/user/user.model'
import { DATABASE_KEYS } from '../../core/core-constant'

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
            .subscribe((userInfo: UserInfoModel) => {
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
        const options = {
            subHeader: '退出登录？',
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '确定',
                    handler: () => {
                        console.log('已经退出')
                    }
                }
            ]
        }
        this._alert.create(options)
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
