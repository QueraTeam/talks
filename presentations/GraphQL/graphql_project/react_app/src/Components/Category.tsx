import React, {useEffect} from "react";
import {CategoryType} from "../types";
import {gql, useLazyQuery} from "@apollo/client";
import {useCategory} from "../context";
import {setPosts} from "../actions";

const Category: React.FC<CategoryType> = ({id, name}) => {
    const {state, dispatch} = useCategory()!;
    const [refetch, {data, called}] = useLazyQuery(gql`
        query ($id: Int!) {
            posts: postsByCategoryId(id: $id) {
                id
                name
            }
        }
    `, {
        fetchPolicy: "no-cache"
    })

    useEffect(() => {
        if (data) {
            dispatch(setPosts(id, data.posts))
        }
    }, [data])

    const handleClick = () => {
        refetch(
            {
                variables: {
                    id
                },
            }
        )
    }
    console.log(called)
    return <div className={"category" + (state.activeCategoryId === id ? " active" : "")} onClick={handleClick}>
        <h2>{name}</h2>
    </div>
}


export default Category