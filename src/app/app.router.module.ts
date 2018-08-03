import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', loadChildren: '../pages/authenticate/authenticate.module#AuthenticateModule' },
    { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
    { path: 'user', loadChildren: '../pages/user/user.module#UserModule' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}
