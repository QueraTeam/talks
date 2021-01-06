import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {CategoryProvider} from "./context";

const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache()
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <CategoryProvider>
                <App/>
            </CategoryProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
