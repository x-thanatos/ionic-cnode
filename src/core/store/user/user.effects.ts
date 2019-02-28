import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Storage } from '@ionic/storage'
import { UserActionEnums, UserActions } from './user.actions'
import { UserService } from './user.service'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'
import { DATABASE_KEYS } from '../../core-constant'

@Injectable()
export class UserEffects {
    @Effect()
    loadUserInfo$ = this._action$
        .pipe(
            ofType(UserActionEnums.LoadUserInfo),
            map((action: UserActions.LoadUserInfo) => action.payload),
            switchMap((payload) => {
                return this._service.loadUserInfo(payload)
                    .pipe(
                        map(res => {
                            this._storage.set(DATABASE_KEYS.userInfo, res.data)
                            this._storage.set(DATABASE_KEYS.accessToken, '0f6499dd-4e66-4e06-8a77-683638b3c92f')

                            return new UserActions.LoadUserInfoSuccess(res.data)
                        }),
                        catchError(err => of(new UserActions.LoadUserInfoFailed(err)))
                    )
            })
        )

    constructor(private _storage: Storage,
                private _service: UserService,
                private _action$: Actions) {
    }
}
