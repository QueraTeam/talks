import React, {ChangeEvent, useEffect} from 'react';
import {gql, useLazyQuery} from "@apollo/client";
import {useCategory} from "../context";
import {setCategories} from "../actions";

const InputField: React.FC = () => {
    const {dispatch} = useCategory()!;

    const [reFetch, {data}] = useLazyQuery(gql`
        query ($name: String!){
            categories: categoryByName(name: $name) {
                id
                name
            }
        }
    `)

    useEffect(() => {
        if (data)
            dispatch(setCategories(data.categories))
    }, [data])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        reFetch({
            variables: {
                name: e.target.value
            }
        })
    }

    return <input onChange={handleChange} id="input_field"/>
}

export default InputField