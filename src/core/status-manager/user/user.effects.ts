import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import { Storage } from '@ionic/storage'
import { UserActionEnums, UserActions } from './user.actions'
import { UserService } from './user.service'
import { DATABASE_KEYS } from '../../util'

@Injectable()
export class UserEffects {
    @Effect()
    loadUserInfo$ = this._action$.ofType(UserActionEnums.LoadUserInfo)
        .map((action: UserActions.LoadUserInfo) => action.payload)
        .switchMap((payload) => {
            return this._service.loadUserInfo(payload)
                .map(res => {
                    this._storage.set(DATABASE_KEYS.userInfo, res.data)
                    this._storage.set(DATABASE_KEYS.accessToken, '0f6499dd-4e66-4e06-8a77-683638b3c92f')

                    return new UserActions.LoadUserInfoSuccess(res.data)
                })
                .catch(err => Observable.of(new UserActions.LoadUserInfoFailed(err)))
        })

    constructor(private _storage: Storage,
                private _service: UserService,
                private _action$: Actions) {
    }
}
