export interface TopicQueryModel {
    page?: number
    tab?: string
    limit?: number
    mdrender?: boolean
}

export interface TopicModel {
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
