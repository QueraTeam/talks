import React from 'react'
import Post from "./Post";
import {useCategory} from "../context";

const PostContainer: React.FC = () => {
    const {state: {posts}} = useCategory()!;
    return <div id="post_container">
        {
            posts?.map((post) => <Post key={post.id} {...post} />)
            ?? <div className="no_category">
                <h1>Select a Category</h1>
            </div>
        }
    </div>
}

export default PostContainer