import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { take } from 'rxjs/operators'

export function toHttpParams(obj: object): HttpParams {
    let params = new HttpParams()
    Object.keys(obj).forEach((key: string) => {
        if (obj[key] !== undefined) {
            params = params.set(key, obj[key].toString())
        }
    })

    return params
}

export function getSyncObservableData<T>(observable: Observable<T>) {
    let sync: T
    observable.pipe(take(1)).subscribe(data => sync = data)

    return sync
}

export const DATABASE_KEYS = {
    userInfo: 'user_info',
    accessToken: 'access_token'
}
