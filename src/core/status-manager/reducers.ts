import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    MetaReducer,
    StoreModule
} from '@ngrx/store'
import { storeLogger } from 'ngrx-store-logger'
import { homeReducer, HomeState } from './home/home.reducer'

export interface AppState {
    home: HomeState
}


const reducers: ActionReducerMap<AppState> = {
    home: homeReducer
}

export const featureSelector = {
    home: createFeatureSelector<HomeState>('home')
}

const metaReducers: MetaReducer<AppState>[] = []

// logger
function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return storeLogger()(reducer)
}

if (process.env.IONIC_ENV !== 'prod') {
    metaReducers.push(logger)
}

export const REDUCERS = StoreModule.forRoot(reducers, { metaReducers })
