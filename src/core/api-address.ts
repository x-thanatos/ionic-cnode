export const API_PREFIX = '/api/v1'
export const API_ADDRESS = {
    TOPIC_LIST: '/topics',
    TOPIC_DETAIL: '/topic/:id'
}

Object.keys(API_ADDRESS).forEach(key => {
    API_ADDRESS[key] = API_PREFIX + API_ADDRESS[key]
})
