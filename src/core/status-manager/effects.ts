import { EffectsModule } from '@ngrx/effects'
import { HomeEffects } from './home/home.effects'

export const EFFECTS = EffectsModule.forRoot([
    HomeEffects
])
