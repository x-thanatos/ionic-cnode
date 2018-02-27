import { NgModule } from '@angular/core'
import { TopicTabPipe } from './pipes/topic-tab.pipe'
import { TopicStatusPipe } from './pipes/topic-status.pipe'

const pipes = [
    TopicTabPipe,
    TopicStatusPipe
]
@NgModule({
    declarations: [
        ...pipes
    ],
    providers: [
        TopicTabPipe,
        TopicStatusPipe
    ],
    exports: [
        ...pipes
    ]
})
export class ShareModule {
}
