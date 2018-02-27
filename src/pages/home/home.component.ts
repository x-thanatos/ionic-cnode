import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { LoadingController, NavController } from 'ionic-angular'
import { Subscription } from 'rxjs/Subscription'
import { TopicModel } from '../../core/status-manager/home/home.model'
import { AppState } from '../../core/status-manager/reducers'
import { HomeActions } from '../../core/status-manager/home/home.actions'
import { homeTopicsSelector } from '../../core/status-manager/home/home.selector'
import { getSyncObservableData } from '../../core/util'

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    topics: TopicModel[] = []
    keywords: string
    private _subs: Subscription[] = []

    constructor(private _nav: NavController,
                private _loading: LoadingController,
                private _store: Store<AppState>) {

    }

    ngOnInit() {
        const loader = this._loading.create({
            content: '加载中...',
            duration: 0
        })
        loader.present()
        this._store.dispatch(new HomeActions.LoadTopics())
        const topicsSub = this._store.select(homeTopicsSelector)
            .filter(topics => !!topics.length)
            .subscribe(topics => {
                loader.dismiss()
                this.topics = topics
            })
        this._subs.push(topicsSub)
    }

    ngOnDestroy() {
        this._subs.forEach(sub => sub.unsubscribe())
    }

    filter() {
        // console.log(this.keywords)
        const topics = getSyncObservableData<TopicModel[]>(this._store.select(homeTopicsSelector))
        this.topics = topics.filter(topic => topic.title.includes(this.keywords))
    }
}
