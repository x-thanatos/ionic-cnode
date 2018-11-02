import { NgModule } from '@angular/core'
import { InterceptorProviders } from './http-interceptor'
import { StatusManagerModule } from './store/status-manager.module'

@NgModule({
    imports: [
        StatusManagerModule,
    ],
    providers: [
        ...InterceptorProviders
    ]
})
export class CoreModule {
}
