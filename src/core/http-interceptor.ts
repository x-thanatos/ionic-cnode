import { Injectable, Provider } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'
import { API_PREFIX } from './core-api'

export interface BasResponseModel<T> {
    success: boolean
    data: T
}

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const { url } = req
        const request = req.clone({
            url: `${API_PREFIX}${url}`
        })
        return next.handle(request)
    }
}

export const InterceptorProviders: Provider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }
]
