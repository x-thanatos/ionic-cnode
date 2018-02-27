import { TopicModel } from './home.model'
import { HomeActionEnums, HomeActionTypes } from './home.actions'

export interface HomeState {
    topics: TopicModel[] | null
}

const initialState: HomeState = {
    topics: []
}

export function homeReducer(state: HomeState = initialState, action: HomeActionTypes): HomeState {
    switch (action.type) {
        case HomeActionEnums.LoadTopicsSuccess:
            return {
                ...state,
                topics: state.topics.concat(action.payload)
            }

        default:
            return state
    }
}
