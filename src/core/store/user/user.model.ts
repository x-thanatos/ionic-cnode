import { Author } from '../home/home.model'

export interface SimpleReply {
    author: Author
    id: string
    last_reply_at: string
    title: string
}

export interface SimpleTopic {
    author: Author
    id: string
    last_reply_at: string
    title: string
}

export interface UserInfoModel {
    avatar_url: string
    create_at: string
    githubUsername: string
    loginname: string
    recent_replies: SimpleReply[]
    recent_topics: SimpleTopic[]
    score: 0
}
