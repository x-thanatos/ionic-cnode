import { Component, OnInit } from '@angular/core'

const TABS = [
    {
        path: 'home',
        label: '首页',
        icon: 'home'
    },
    {
        path: 'user',
        label: '用户',
        icon: 'person'
    }
]

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    public tabs = TABS

    constructor() {
    }

    ngOnInit() {
    }
}
