import { createSelector } from '@ngrx/store'
import { featureSelector } from '../reducers'
import { UserState } from './user.reducer'

export const userInfoSelector = createSelector(featureSelector.user, (state: UserState) => state.info)
