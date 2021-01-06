export interface PostType {
    id: number,
    name: string,
    content: string
}

export interface CategoryType {
    id: number,
    name: string,
    postSet?: PostsType
}

export interface PostsType {
    posts: PostType[]
}

export const SET_LOADING_ON = "SET_LOADING_ON"

export interface setLoading {
    type: typeof SET_LOADING_ON
}

export const SET_FAILED = "SET_FAILED"

export interface setFailed {
    type: typeof SET_FAILED
}


export const SET_CATEGORIES = "SET_CATEGORIES"

export interface setCategoriesType {
    type: typeof SET_CATEGORIES,
    payload: {
        categories: CategoryType[],
        loading: boolean,
        failed: boolean
    }
}

export const SET_CATEGORY_POSTS = "SET_CATEGORY_POSTS"

interface setCategoryPosts {
    type: typeof SET_CATEGORY_POSTS,
    payload: {
        activeCategoryId: number,
        posts: PostType[],
        loading: boolean,
        failed: boolean,

    }
}


export type CategoryActions = setCategoriesType | setCategoryPosts | setLoading | setFailed