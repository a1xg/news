import React, {useState, useEffect} from "react";
import csrftoken from "../../../Authorization/csrftoken";

const Comment = (props) => {
    const [isAuthor, setIsAutror] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            const user = localStorage.getItem('user')
            if (props.comment.author_name === user) {
                setIsAutror(true);
            }
        }

    }, []);

    const onDelete = (e) => {
        e.preventDefault();
        console.log('delete');
        fetch(`/api/v1/comment/detail/${props.comment.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        });
    };

    const onEdit = (e) => {
        e.preventDefault();
        console.log('edit');
        fetch(`/api/v1/comment/detail/${props.comment.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            //body: JSON.stringify(vote)
        });
    };



    return (
        <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
            {isAuthor &&
                <div style={{ top: 5, right: 5 }}>
                    <a href='' onClick={onEdit}>edit |</a>
                    <a href='' onClick={onDelete}> delete</a>
                </div>
            }
            <div>
                <p>id {props.comment.id} Author: {props.comment.author_name}</p>
                <p>{props.comment.creation_date}</p>
                <p>{props.comment.content}</p>
            </div>
        </div>
    )
};

export default Comment;