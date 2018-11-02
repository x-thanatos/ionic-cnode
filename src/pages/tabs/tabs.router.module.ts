import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsComponent } from './tabs.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: '../home/home.module#HomeModule' },
            { path: 'user', loadChildren: '../user/user.module#UserModule' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRouterModule {
}
