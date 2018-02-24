import { Component } from '@angular/core'

import { AboutComponent } from '../about/about'
import { ContactComponent } from '../contact/contact'
import { HomeComponent } from '../home/home'

@Component({
    templateUrl: 'tabs.html'
})
export class TabsComponent {

    tab1Root = HomeComponent
    tab2Root = AboutComponent
    tab3Root = ContactComponent

    constructor() {
    }
}
