export interface TopicQueryModel {
    page?: number
    tab?: string
    limit?: number
    mdrender?: boolean
}

export interface TopicDetailQueryModel {
    mdrender?: boolean
    accesstoken?: string
}

export interface Author {
    avatar_url: string,
    loginname: string
}

export interface TopicBaseModel {
    author: Author
    author_id: string
    content: string
    create_at: string
    good: boolean
    id: string
    last_reply_at: string
    reply_count: number
    tab: string
    title: string
    top: boolean
    visit_count: number
}

export interface TopicReply {
    author: Author
    content: string
    create_at: string
    id: string
    is_uped: boolean
    reply_id: string | null
}

export interface TopicDetailModel extends TopicBaseModel {
    is_collect: boolean
    replies: TopicReply[]
}
