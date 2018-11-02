import { ModuleWithProviders, NgModule } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'
import { EFFECTS } from './effects'
import { REDUCERS } from './reducers'
import { HomeService } from './home/home.service'
import { UserService } from './user/user.service'
import { environment } from '../../environments/environment'

const SERVICES = [
    HomeService,
    UserService
]
const STORE_DEV_TOOLS_IMPORTS: ModuleWithProviders[] = []

if (environment.production === false) {
    STORE_DEV_TOOLS_IMPORTS.push(StoreDevtoolsModule.instrument({ maxAge: 500 }))
}

@NgModule({
    imports: [
        HttpClientModule,
        ...STORE_DEV_TOOLS_IMPORTS,
        REDUCERS,
        EFFECTS
    ],
    providers: [
        ...SERVICES
    ]
})
export class StatusManagerModule {
}
