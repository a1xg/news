import React from "react";
import { NavLink } from "react-router-dom";
import VoteButton from "../VoteButton/VoteButton.jsx";


const NewsPost = (props) => {
    return (
        <div>
            <p>Position: {props.position}</p>
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
            <p>id {props.post.id} | Author [ {props.post.author_name} | {props.post.creation_date} ] | {props.post.total_votes} votes from: {props.post.voters.join(', ')} </p>
            <NavLink to={`/news/detail/${props.post.id}`} >
                <p>{props.post.total_comments} comments</p>
            </NavLink>
        </div>

    )
};

export default NewsPost;