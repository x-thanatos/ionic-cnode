import { Component, OnInit, ViewChild } from '@angular/core'
import { Store } from '@ngrx/store'
import { InfiniteScroll, LoadingController } from '@ionic/angular'
import { Subscription } from 'rxjs/internal/Subscription'
import { debounceTime, filter, take } from 'rxjs/operators'
import { TopicBaseModel, TopicQueryModel } from '../../../../core/status-manager/home/home.model'
import { AppState } from '../../../../core/status-manager/reducers'
import { HomeActions } from '../../../../core/status-manager/home/home.actions'
import { homeTopicsSelector } from '../../../../core/status-manager/home/home.selector'
import { getSyncObservableData } from '../../../../core/util'

@Component({
    selector: 'topic-list',
    templateUrl: 'topic-list.component.html'
})
export class TopicListComponent implements OnInit {
    topics: TopicBaseModel[] = []
    queryParam: TopicQueryModel = { page: 1, limit: 40 }
    @ViewChild('infiniteScroll') infiniteScroll: InfiniteScroll
    private _loadTopicsSub = Subscription.EMPTY

    constructor(private _loading: LoadingController,
                private _store: Store<AppState>) {
    }

    ngOnInit() {
        this._loadTopics()
            .pipe(take(1))
            .subscribe(topics => {
                this.queryParam.page++
                this.topics = topics
            })
    }

    filter(keywords) {
        const topics = getSyncObservableData<TopicBaseModel[]>(this._store.select(homeTopicsSelector))
        this.topics = topics.filter(topic => topic.title.includes(keywords))
    }

    goToDetail(id: string) {
        console.log(id)
    }

    backTop() {
        // todo: 这里虚拟滚动组件没有对应的返回顶部API，不知道怎么返回顶部
    }

    _infiniteScroll(scroll: InfiniteScroll) {
        this._loadTopicsSub.unsubscribe()
        this._loadTopicsSub = this._loadTopics()
            .pipe(debounceTime(500))
            .subscribe(topics => {
                this.queryParam.page++
                this.topics = topics
                scroll.complete()
            })
    }

    _trackById(index: number, topic: TopicBaseModel) {
        return topic.id
    }

    private _loadTopics() {
        this._store.dispatch(new HomeActions.LoadTopics(this.queryParam))

        return this._store.select(homeTopicsSelector)
            .pipe(filter(topics => !!topics))
    }
}
