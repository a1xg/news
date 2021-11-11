import React, { useState, useEffect } from "react";
import csrftoken from "../../../Authorization/csrftoken";
import CommentEditContainer from "./CommentEditContainer.jsx";

// isCommentAuthor - Allowing comment editing for the author of the comment
// isNewsAuthor - Allowing comment editing for the author of the news
const Comment = ({comment , isNewsAuthor}) => {
    const [isCommentAuthor, setIsCommentAutror] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            const user = localStorage.getItem('user');
            if (comment.author_name == user) {
                setIsCommentAutror(true);
            };
        }
    }, []);

    const onDelete = (e) => {
        e.preventDefault();
        console.log('delete');
        fetch(`/api/v1/comment/detail/${comment.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        });
    };

    const onEdit = (e) => {
        e.preventDefault();
        setEditMode(true);
    };

    return (
        <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
            {editMode == false &&
                <div>
                    {isNewsAuthor == true | isCommentAuthor == true &&
                        <div style={{ top: 5, right: 5 }}>
                            <a href='' onClick={onEdit}>edit |</a>
                            <a href='' onClick={onDelete}> delete</a>
                        </div>
                    }
                    <div>
                        <p>id {comment.id} Author: {comment.author_name}</p>
                        <p>{comment.creation_date}</p>
                        <p>{comment.content}</p>
                    </div>
                </div>
            }
            {editMode &&
                <CommentEditContainer
                    comment={comment}
                    setEditMode={setEditMode}
                />
            }
        </div >
    )
};

export default Comment;