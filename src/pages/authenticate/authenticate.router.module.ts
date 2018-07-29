import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'

const routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AuthenticateRouterModule {

}
