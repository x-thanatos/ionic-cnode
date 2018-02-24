import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from './service/home.service'

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        HomeService
    ]
})
export class ShareModule {
}
