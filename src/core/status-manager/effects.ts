import { EffectsModule } from '@ngrx/effects'
import { HomeEffects } from './home/home.effects'
import { UserEffects } from './user/user.effects'

export const EFFECTS = EffectsModule.forRoot([
    HomeEffects,
    UserEffects
])
