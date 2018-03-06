import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    MetaReducer,
    StoreModule
} from '@ngrx/store'
import { storeLogger } from 'ngrx-store-logger'
import { homeReducer, HomeState } from './home/home.reducer'
import { userReducer, UserState } from './user/user.reducer'

export interface AppState {
    home: HomeState,
    user: UserState
}


const reducers: ActionReducerMap<AppState> = {
    home: homeReducer,
    user: userReducer
}

export const featureSelector = {
    home: createFeatureSelector<HomeState>('home'),
    user: createFeatureSelector<UserState>('user')
}

const metaReducers: MetaReducer<AppState>[] = []

// logger
function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return storeLogger({ collapsed: true })(reducer)
}

if (process.env.IONIC_ENV !== 'prod') {
    metaReducers.push(logger)
}

export const REDUCERS = StoreModule.forRoot(reducers, { metaReducers })
