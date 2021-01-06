import {CategoryActions, CategoryType, PostType, SET_CATEGORIES, SET_CATEGORY_POSTS} from "./types";

export interface IInitialState {
    categories?: CategoryType[],
    posts?: PostType[],
    activeCategoryId?: number,
    loading: boolean,
    failed: boolean
}

export const defaultState: IInitialState = {
    loading: false,
    failed: false,
    activeCategoryId: -1
}


const reducer = (state: IInitialState = defaultState, action: CategoryActions) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, ...action.payload}
        case SET_CATEGORY_POSTS:
            return {...state, ...action.payload}
        default:
            return state
    }
}


export default reducer