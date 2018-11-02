import { TopicBaseModel } from './home.model'
import { HomeActionEnums, HomeActionTypes } from './home.actions'

export interface HomeState {
    topics: TopicBaseModel[] | null
}

const initialState: HomeState = {
    topics: null
}

export function homeReducer(state: HomeState = initialState, action: HomeActionTypes): HomeState {
    switch (action.type) {
        case HomeActionEnums.LoadTopicsSuccess:
            return {
                ...state,
                topics: state.topics ? state.topics.concat(action.payload) : action.payload
            }

        default:
            return state
    }
}
