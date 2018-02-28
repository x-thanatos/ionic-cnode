import { Component, ViewChild } from '@angular/core'
import { TopicListComponent } from './components/topic-list/topic-list.component'

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    keywords: string
    @ViewChild('list') topicList: TopicListComponent
}
