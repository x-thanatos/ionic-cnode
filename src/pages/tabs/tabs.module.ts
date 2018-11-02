import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { TabsComponent } from './tabs.component'
import { TabsRouterModule } from './tabs.router.module'

@NgModule({
    imports: [
        IonicModule,
        TabsRouterModule
    ],
    declarations: [TabsComponent]
})
export class TabsModule {
}
