import { Pipe, PipeTransform } from '@angular/core'
import { TopicTabPipe } from './topic-tab.pipe'
import { TopicBaseModel } from '../../core/store/home/home.model'

@Pipe({
    name: 'TopicStatus'
})
export class TopicStatusPipe implements PipeTransform {
    constructor(private _tabPipe: TopicTabPipe) {
    }

    transform(input: TopicBaseModel, key = 'text'): string {
        const status = {
            color: 'gray',
            text: this._tabPipe.transform(input.tab)
        }
        if (input.good) {
            status.color = 'danger'
            status.text = '精华'
        }
        if (input.top) {
            status.color = 'secondary'
            status.text = '置顶'
        }

        return status[key]
    }
}
