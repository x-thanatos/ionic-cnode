import { Component, Input, OnInit, SecurityContext } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { TopicReply } from '../../../../core/status-manager/home/home.model'

@Component({
    selector: 'topic-comment',
    templateUrl: 'topic-comment.component.html'
})
export class TopicCommentComponent implements OnInit {
    @Input() comments: TopicReply[] = []

    constructor(private _sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        console.log(this.comments)
    }

    _htmlSanitizer(html): SafeHtml {
        return this._sanitizer.sanitize(SecurityContext.HTML, html)
    }
}
