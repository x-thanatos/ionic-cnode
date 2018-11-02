import { NgModule } from '@angular/core'
import { LoginComponent } from './login.component'
import { LoginRouterModule } from './login.router.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        LoginRouterModule
    ]
})
export class LoginModule {
}
