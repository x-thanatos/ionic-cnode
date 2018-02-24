import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API_ADDRESS } from '../../core/api-address'

@Injectable()
export class HomeService {
    constructor(private _http: HttpClient) {
    }

    loadTopics() {
        return this._http.get(API_ADDRESS.TOPIC_LIST)
    }
}
