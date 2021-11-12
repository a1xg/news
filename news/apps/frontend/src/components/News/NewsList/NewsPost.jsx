import React from "react";
import { NavLink } from "react-router-dom";
import VoteButton from "../VoteButton/VoteButton.jsx";


const NewsPost = (props) => {
    return (
        <div>
            {props.activeVote &&
                <VoteButton postID={props.post.id} />
            }
            {props.permission &&
                <p>
                    <a href='' onClick={props.onEdit}> edit </a>|
                    <a href='' onClick={props.onDelete}> delete</a>
                </p>
            }
            <a href={props.post.link}>
                {props.post.title}
            </a>
            <br />
            <span>
                {
                `Position: ${props.position} | 
                id: ${props.post.id} | 
                Author: ${props.post.author_name} | 
                Date: ${new Date(props.post.creation_date).toLocaleDateString()} | 
                Total votes: ${props.post.total_votes} 
                from: [${props.post.voters.join(', ')}]`
                }
            </span>
            <NavLink to={`/news/detail/${props.post.id}`} >
                <p>{props.post.total_comments} comments</p>
            </NavLink>
        </div>

    )
};

export default NewsPost;