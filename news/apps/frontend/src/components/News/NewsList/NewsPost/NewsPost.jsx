import React from "react";
import { NavLink } from "react-router-dom";
import VoteButton from "../../VoteButton/VoteButton.jsx";

const NewsPost = (props) => {
    const post = props.post
    return (
        <div style={{width:500, height:250, backgroundColor: 'lightcoral', margin:5, padding:15}}>
            <p>Position: {props.position}</p>
            {' '}
            <VoteButton postID={props.post.id} />
            <p>
            <a href=''> edit </a>|
            <a href=''> delete</a> 
            </p>
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