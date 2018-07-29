import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component'
import { AuthenticateRouterModule } from './authenticate.router.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        AuthenticateRouterModule
    ]
})
export class AuthenticateModule {
}
