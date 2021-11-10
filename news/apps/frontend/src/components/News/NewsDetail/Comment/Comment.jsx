import React from "react";

const Comment = (props) => {
    return (
        <div style={{width:500, backgroundColor:'lightcoral', margin:5, padding:15}}>
            <div style={{top:5, right:5}}>
                <a href='' >edit |</a>
                <a href='' > delete</a>
            </div>
            <div>
            <p>id {props.comment.id} Author: {props.comment.author_name}</p>
            <p>{props.comment.creation_date}</p>
            <p>{props.comment.content}</p>
            </div>
        </div>
    )
};

export default Comment;