import * as React from "react";
import reducer, {defaultState, IInitialState} from "./reducer";
import {CategoryActions} from "./types";

interface ContextType {
    state: IInitialState,
    dispatch: React.Dispatch<CategoryActions>
}

const CategoryContext = React.createContext<ContextType | undefined>(undefined)

const CategoryProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState)

    return <CategoryContext.Provider value={{state, dispatch}}>
        {children}
    </CategoryContext.Provider>
}

const useCategory = () => React.useContext(CategoryContext)

export {useCategory, CategoryProvider}