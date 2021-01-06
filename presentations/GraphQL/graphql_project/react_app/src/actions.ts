import {
    CategoryActions,
    CategoryType,
    PostType,
    SET_CATEGORIES,
    SET_CATEGORY_POSTS,
    SET_FAILED,
    SET_LOADING_ON
} from "./types";

export const setLoadingOn = (): CategoryActions => {
    return {
        type: SET_LOADING_ON
    }
}

export const setSomethingWentWrong = (): CategoryActions => {
    return {
        type: SET_FAILED
    }
}

export const setCategories = (categories: CategoryType[]): CategoryActions => {
    return ({
        type: SET_CATEGORIES,
        payload: {
            categories,
            loading: false,
            failed: false
        }
    })
}

export const setPosts = (id: number, posts: PostType[]): CategoryActions => {
    return {
        type: SET_CATEGORY_POSTS,
        payload: {
            activeCategoryId: id,
            posts,
            loading: false,
            failed: false
        }
    }
}