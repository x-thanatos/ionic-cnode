import { Component, OnInit, ViewChild } from '@angular/core'
import { AlertController, List, NavController } from 'ionic-angular'
import { Store } from '@ngrx/store'
import { Storage } from '@ionic/storage'
import { AppState } from '../../core/status-manager/reducers'
import { UserActions } from '../../core/status-manager/user/user.actions'
import { userInfoSelector } from '../../core/status-manager/user/user.selector'
import { UserInfoModel } from '../../core/status-manager/user/user.model'
import { DATABASE_KEYS } from '../../core/util'
import { Observable } from 'rxjs/Observable'

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
        Observable.fromPromise(this._storage.get(DATABASE_KEYS.userInfo))
            .take(1)
            .switchMap((userInfo) => {
                if (!userInfo) {
                    return this._updateInfo()
                }

                return Observable.of(userInfo).take(1)
            })
            .subscribe(userInfo => {
                console.log(userInfo)
                this.info = userInfo
                this.mode = MODE.authenticated
            })
    }

    goEdit() {
        console.log('go to edit page')
    }

    goMessage() {
        console.log('go to message page')
    }

    goSettings() {
        console.log('go to settings page')
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
            .filter(userInfo => !!userInfo)
            .take(1)
    }
}
