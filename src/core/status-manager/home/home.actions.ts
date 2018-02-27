import { Action } from '@ngrx/store'
import { TopicModel, TopicQueryModel } from './home.model'

export enum HomeActionEnums {
    LoadTopics = '[Home] load topics',
    LoadTopicsFailed = '[Home] load topics failed',
    LoadTopicsSuccess = '[Home] load topics success',
}

export namespace HomeActions {
    export class LoadTopics implements Action {
        readonly type = HomeActionEnums.LoadTopics

        constructor(public payload?: TopicQueryModel) {
        }
    }

    export class LoadTopicsFailed implements Action {
        readonly type = HomeActionEnums.LoadTopicsFailed

        constructor(public payload?) {
        }
    }

    export class LoadTopicsSuccess implements Action {
        readonly type = HomeActionEnums.LoadTopicsSuccess

        constructor(public payload: TopicModel[]) {
        }
    }
}

export type HomeActionTypes = HomeActions.LoadTopics
    | HomeActions.LoadTopicsFailed
    | HomeActions.LoadTopicsSuccess
