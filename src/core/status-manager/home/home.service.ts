import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TopicModel, TopicQueryModel } from './home.model'
import { API_ADDRESS } from '../../api-address'
import { toHttpParams } from '../../util'
import { BasResponseModel } from '../../http-interceptor'

@Injectable()
export class HomeService {
    constructor(private _http: HttpClient) {
    }

    loadTopics(param: TopicQueryModel = {}) {
        return this._http.get<BasResponseModel<TopicModel[]>>(API_ADDRESS.TOPIC_LIST, {
            params: toHttpParams(param)
        })
    }
}
