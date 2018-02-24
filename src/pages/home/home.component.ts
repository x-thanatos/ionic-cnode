import { Component, OnInit } from '@angular/core'
import { LoadingController, NavController, ToastController } from 'ionic-angular'
import { HomeService } from '../../share/service/home.service'

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    topics = []

    constructor(public navCtrl: NavController,
                private _loading: LoadingController,
                private _service: HomeService) {

    }

    ngOnInit() {
        const loader = this._loading.create({
            content: '加载中...',
            duration: 0
        })
        loader.present()
        this._service.loadTopics()
            .take(1)
            .subscribe((res: any) => {
                console.log(res)
                loader.dismiss()
                this.topics = res.data
            })
    }

}
