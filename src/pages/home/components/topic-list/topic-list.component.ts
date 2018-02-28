import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { InfiniteScroll, LoadingController, NavController } from 'ionic-angular'
import { Subscription } from 'rxjs/Subscription'
import { TopicBaseModel, TopicQueryModel } from '../../../../core/status-manager/home/home.model'
import { AppState } from '../../../../core/status-manager/reducers'
import { HomeActions } from '../../../../core/status-manager/home/home.actions'
import { homeTopicsSelector } from '../../../../core/status-manager/home/home.selector'
import { getSyncObservableData } from '../../../../core/util'
import { TopicDetailComponent } from '../topic-detail/topic-detail.component'

@Component({
    selector: 'topic-list',
    templateUrl: 'topic-list.component.html'
})
export class TopicListComponent implements OnInit {
    topics: TopicBaseModel[] = []
    queryParam: TopicQueryModel = { page: 1, limit: 40 }
    private _loadTopicsSub = Subscription.EMPTY

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
        this.loadTopics()
            .take(1)
            .subscribe(topics => {
                loader.dismiss()
                this.queryParam.page++
                this.topics = topics
            })
    }

    filter(keywords) {
        const topics = getSyncObservableData<TopicBaseModel[]>(this._store.select(homeTopicsSelector))
        this.topics = topics.filter(topic => topic.title.includes(keywords))
    }

    goToDetail(id: string) {
        this._nav.push('topic-detail', { id })
    }

    private loadTopics() {
        this._store.dispatch(new HomeActions.LoadTopics(this.queryParam))

        return this._store.select(homeTopicsSelector)
            .filter(topics => !!topics)
    }

    private _infiniteScroll(scroll: InfiniteScroll) {
        this._loadTopicsSub.unsubscribe()
        this._loadTopicsSub = this.loadTopics()
            .debounceTime(500)
            .subscribe(topics => {
                this.queryParam.page++
                this.topics = topics
                scroll.complete()
            })
    }

    private _trackById(index: number, topic: TopicBaseModel) {
        return topic.id
    }
}