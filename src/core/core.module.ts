import { NgModule } from '@angular/core'
import { StatusManagerModule } from './status-manager/status-manager.module'
import { InterceptorProviders } from './http-interceptor'

@NgModule({
    imports: [
        StatusManagerModule
    ],
    providers: [
        ...InterceptorProviders
    ]
})
export class CoreModule {
}
