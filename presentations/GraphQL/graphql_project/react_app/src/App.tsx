import React, {useEffect} from 'react';
import './App.css';
import CategoryContainer from "./Components/CategoryContainer";
import PostContainer from "./Components/PostContainer";
import {gql, useQuery} from "@apollo/client";
import {useCategory} from "./context";
import {setCategories, setLoadingOn} from "./actions";
import Loading from "./Components/Loading";

function App() {
    const {state, dispatch} = useCategory()!;
    const {data} = useQuery(gql`
        {
            allCategories {
                id
                name
            }
        }
    `)

    useEffect(() => {
        dispatch(setLoadingOn())
    }, [])

    useEffect(() => {
        if (data) {
            dispatch(setCategories(data.allCategories))
        }
    }, [data])

    return state.loading
        ? <Loading/>
        : (
            <div className="App">
                <CategoryContainer/>
                <PostContainer/>
            </div>
        );
}

export default App;
