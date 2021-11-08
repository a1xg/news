import React from "react";

const Comment = (props) => {
    return (
        <div style={{width:500, backgroundColor:'lightcoral', margin:5, padding:5}}>
            <p>id {props.comment.id} Author: {props.comment.author_name}</p>
            <p>{props.comment.creation_date}</p>
            <p>{props.comment.content}</p>
        </div>
    )
};

export default Comment;