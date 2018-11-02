import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API_ADDRESS } from '../../core-api'
import { BasResponseModel } from '../../http-interceptor'
import { UserInfoModel } from './user.model'

@Injectable()
export class UserService {
    constructor(private _http: HttpClient) {
    }

    loadUserInfo(param: string) {
        return this._http.get<BasResponseModel<UserInfoModel>>(API_ADDRESS.USER_INFO.replace(':name', param))
    }
}
