import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core'
import { LoadingController, NavParams } from '@ionic/angular'
import { HomeService } from '../../../../core/status-manager/home/home.service'
import { Subscription } from 'rxjs/Subscription'
import { TopicDetailModel } from '../../../../core/status-manager/home/home.model'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'topic-detail',
    templateUrl: 'topic-detail.component.html'
})
export class TopicDetailComponent implements OnInit, OnDestroy {
    topic: TopicDetailModel
    private _subs: Subscription[] = []

    constructor(private _navParams: NavParams,
                private _loading: LoadingController,
                private _sanitizer: DomSanitizer,
                private _service: HomeService) {
    }

    async loading() {
        const loader = await this._loading.create({
            content: '加载中...',
            duration: 0
        })

        return await loader.present()
    }

    ngOnInit() {
        this.loading()
        const { id } = this._navParams.data
        const loadSub = this._service.loadTopicDetail(id as string, { mdrender: true })
            .subscribe(({ data }) => {
                this.topic = data
            })
        this._subs.push(loadSub)
    }

    ngOnDestroy() {
        this._subs.forEach(sub => sub.unsubscribe())
    }

    _htmlSanitizer(html): SafeHtml {
        return this._sanitizer.sanitize(SecurityContext.HTML, html)
    }
}
