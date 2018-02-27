import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

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
    observable.take(1).subscribe(data => sync = data)

    return sync
}
