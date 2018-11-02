import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { HomeRouterModule } from './home.router.module'
import { TopicListComponent } from './components/topic-list/topic-list.component'
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component'
import { TopicCommentComponent } from './components/topic-comment/topic-comment.component'
import { HomeComponent } from './home.component'
import { UtilModule } from '../../util/util.module'

@NgModule({
    declarations: [
        HomeComponent,
        TopicListComponent,
        TopicDetailComponent,
        TopicCommentComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        UtilModule,
        HomeRouterModule
    ]
})
export class HomeModule {
}
