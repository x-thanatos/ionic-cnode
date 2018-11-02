import { UserInfoModel } from './user.model'
import { UserActionEnums, UserActionTypes } from './user.actions'

export interface UserState {
    info: UserInfoModel | null
}

const initialState: UserState = {
    info: null
}

export function userReducer(state: UserState = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case UserActionEnums.LoadUserInfoSuccess:
            return {
                ...state,
                info: action.payload
            }

        default:
            return state
    }
}
