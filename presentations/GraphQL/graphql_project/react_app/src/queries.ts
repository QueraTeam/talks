import {gql} from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
    query {
        allCategories {
            id
            name
        }
    }
`

export const FILTER_CATEGORIES = gql`
    query ($name: String!){
        categories: categoryByName(name: $name) {
            id
            name
        }
    }
`

export const GET_POSTS_BY_CATEGORY = gql`
    query ($name: String!){
        category: categoryByName(name: $name) {
            postSet {
                id
                name
            }
        }
    }
`