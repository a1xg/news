import React from "react";
import { NavLink } from "react-router-dom";

const NewsPost = (props) => {
    const post = props.post
    return (
        <div style={{width:500, height:160, backgroundColor: 'lightcoral', margin:5, padding:5}}>
            <p>Position: {props.position} </p>
            <a href={post.link}>
            {post.title}
            </a>
            <p>Author {post.author_name} Date {post.creation_date} | {post.total_votes} votes from: {post.voters.join(', ')} </p>
            <NavLink to={`/news/detail/${props.post.id}`} >
            <p>{post.total_comments} comments</p>
            </NavLink>
        </div>
    )
};

export default NewsPost;