import { Component, OnInit, ViewChild } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { TopicListComponent } from './components/topic-list/topic-list.component'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    keywords: string
    @ViewChild('list') topicList: TopicListComponent

    constructor(private _menu: MenuController) {
    }

    ngOnInit() {
    }
}
