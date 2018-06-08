import { Injectable, Provider } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'

export interface BasResponseModel<T> {
    success: boolean
    data: T
}

@Injectable()
class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
    }
}

export const InterceptorProviders: Provider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }
]
