import React from 'react'
import InputField from "./InputField";
import Category from "./Category";
import {useCategory} from "../context";


const CategoryContainer: React.FC = () => {
    const {state: {categories}} = useCategory()!;

    return <div id="category_container">
        <h1>Categories</h1>
        <InputField/>
        <div className="items">
            {
                categories?.map(category => <Category key={category.id} {...category} />)
                ?? <h2 className="no_results">No Results :(</h2>
            }
        </div>
    </div>
}

export default CategoryContainer