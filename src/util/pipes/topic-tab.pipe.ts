import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'TopicTab'
})
export class TopicTabPipe implements PipeTransform {
    transform(input: string): string {
        let tab = '未知'
        switch (input) {
            case 'share':
                tab = '分享'
                break
            case 'ask':
                tab = '问答'
                break
            default:
                break
        }

        return tab
    }
}
