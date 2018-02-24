import { Component } from '@angular/core'

import { AboutComponent } from '../about/about.component'
import { ContactComponent } from '../contact/contact.component'
import { HomeComponent } from '../home/home.component'

@Component({
    templateUrl: 'tabs.component.html'
})
export class TabsComponent {
    tabs = [
        {
            component: HomeComponent,
            title: '首页',
            icon: 'home'
        },
        {
            component: AboutComponent,
            title: 'About',
            icon: 'information-circle'
        },
        {
            component: ContactComponent,
            title: 'Contact',
            icon: 'contacts'
        }
    ]

    constructor() {
    }
}
