import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'

@Component({
    selector: 'page-recent-topic-list',
    templateUrl: 'recent-topic-list.component.html'
})
export class RecentTopicListComponent implements OnInit {
    title: string

    constructor(private _navParams: NavParams) {
    }

    ngOnInit() {
        console.log(this._navParams)
        this.title = this._navParams.data.title
    }
}
