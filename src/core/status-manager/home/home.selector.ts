import { createSelector } from '@ngrx/store'
import { featureSelector } from '../reducers'
import { HomeState } from './home.reducer'

export const homeTopicsSelector = createSelector(featureSelector.home, (state: HomeState) => state.topics)
