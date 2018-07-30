import { NgModule } from '@angular/core'
import { HomeRouterModule } from './home.router.module'
import { TopicListComponent } from './components/topic-list/topic-list.component'
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component'
import { TopicCommentComponent } from './components/topic-comment/topic-comment.component'

@NgModule({
    declarations: [
        TopicListComponent,
        TopicDetailComponent,
        TopicCommentComponent
    ],
    imports: [
        HomeRouterModule
    ]
})
export class HomeModule {
}
