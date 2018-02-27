import { NgModule } from '@angular/core'
import { EFFECTS } from './effects'
import { REDUCERS } from './reducers'
import { HomeService } from './home/home.service'
import { HttpClientModule } from '@angular/common/http'

const services = [HomeService]

@NgModule({
    imports: [
        HttpClientModule,
        REDUCERS,
        EFFECTS
    ],
    providers: [
        ...services
    ]
})
export class StatusManagerModule {
}
