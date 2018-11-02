import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TopicDetailQueryModel, TopicBaseModel, TopicQueryModel, TopicDetailModel } from './home.model'
import { API_ADDRESS } from '../../core-api'
import { toHttpParams } from '../../../util/helper'
import { BasResponseModel } from '../../http-interceptor'

@Injectable()
export class HomeService {
    constructor(private _http: HttpClient) {
    }

    loadTopics(param: TopicQueryModel = {}) {
        return this._http.get<BasResponseModel<TopicBaseModel[]>>(API_ADDRESS.TOPIC_LIST, {
            params: toHttpParams(param)
        })
    }

    loadTopicDetail(id: string, param: TopicDetailQueryModel = {}) {
        return this._http.get<BasResponseModel<TopicDetailModel>>(API_ADDRESS.TOPIC_DETAIL.replace(':id', id), {
            params: toHttpParams(param)
        })
    }
}
