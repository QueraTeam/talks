import React from 'react'
import {PostType} from "../types";

const styles = {
    root: {
        marginBottom: "1rem",
    },
    header: {
        fontFamily: "Staatliches, cursive",
        fontWeight: 200,
        cursor: "Pointer"
    }
}

const Post: React.FC<PostType> = ({id, name, content}) => {
    return <div style={styles.root}>
        <h2 style={styles.header}>{name}</h2>
        <div>
            {content}
        </div>
    </div>
}

export default Post