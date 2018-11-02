import { Action } from '@ngrx/store'
import { UserInfoModel } from './user.model'

export enum UserActionEnums {
    LoadUserInfo = '[User] load user info',
    LoadUserInfoFailed = '[User] load user info failed',
    LoadUserInfoSuccess = '[User] load user info success',
}

export namespace UserActions {
    export class LoadUserInfo implements Action {
        readonly type = UserActionEnums.LoadUserInfo

        constructor(public payload: string) {
        }
    }

    export class LoadUserInfoFailed implements Action {
        readonly type = UserActionEnums.LoadUserInfoFailed

        constructor(public payload?) {
        }
    }

    export class LoadUserInfoSuccess implements Action {
        readonly type = UserActionEnums.LoadUserInfoSuccess

        constructor(public payload: UserInfoModel) {
        }
    }
}

export type UserActionTypes = UserActions.LoadUserInfo
    | UserActions.LoadUserInfoFailed
    | UserActions.LoadUserInfoSuccess
