import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { HomeService } from './home.service'
import { HomeActionEnums, HomeActions } from './home.actions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

@Injectable()
export class HomeEffects {
    @Effect()
    loadTopics$ = this._action$
        .pipe(
            ofType(HomeActionEnums.LoadTopics),
            map((action: HomeActions.LoadTopics) => action.payload),
            switchMap((payload) => {
                return this._service.loadTopics(payload)
                    .pipe(
                        map(res => new HomeActions.LoadTopicsSuccess(res.data)),
                        catchError(err => of(new HomeActions.LoadTopicsFailed(err)))
                    )
            })
        )

    constructor(private _service: HomeService, private _action$: Actions) {
    }
}
