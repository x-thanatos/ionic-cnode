import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserComponent } from './user.component'

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'list'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UserRouterModule {
}
