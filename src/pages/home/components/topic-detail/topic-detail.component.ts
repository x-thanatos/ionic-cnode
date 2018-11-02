import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { Subscription } from 'rxjs/Subscription'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { HomeService } from '../../../../core/store/home/home.service'
import { TopicDetailModel } from '../../../../core/store/home/home.model'

@Component({
    selector: 'topic-detail',
    templateUrl: './topic-detail.component.html',
    styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit, OnDestroy {
    topic: TopicDetailModel
    private _subs: Subscription[] = []

    constructor(private _loading: LoadingController,
                private _sanitizer: DomSanitizer,
                private _service: HomeService) {
    }

    async loading() {
        const loader = await this._loading.create()

        return await loader.present()
    }

    ngOnInit() {
        this.loading()
        const { id } = { id: '1'}
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
