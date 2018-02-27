import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import { HomeService } from './home.service'
import { HomeActionEnums, HomeActions } from './home.actions'

@Injectable()
export class HomeEffects {
    @Effect()
    loadTopics$ = this._action$.ofType(HomeActionEnums.LoadTopics)
        .map((action: HomeActions.LoadTopics) => action.payload)
        .switchMap((payload) => {
            return this._service.loadTopics(payload)
                .map(res => new HomeActions.LoadTopicsSuccess(res.data))
                .catch(err => Observable.of(new HomeActions.LoadTopicsFailed(err)))
        })

    constructor(private _service: HomeService, private _action$: Actions) {
    }
}
