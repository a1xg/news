import React from "react";
import { NavLink } from "react-router-dom";


const NewsPost = (props) => {
    const post = props.post
    return (
        <div style={{width:500, height:250, backgroundColor: 'lightcoral', margin:5, padding:5}}>

            <NavLink to={`detail/${props.post.id}`} >
                Post detail
            </NavLink>
            <p>ID {post.id}</p>
            <p>{post.link}</p>
            <p>Author {post.author_name}</p>
            <p>Date {post.creation_date}</p>
            <p>Title {post.title}</p>
            <p>Total comments {post.total_comments}</p>
            <p>Total votes {post.total_votes}</p>
            <p>Voters {post.voters.join(', ')}</p>

        </div>
    )
};

export default NewsPost;