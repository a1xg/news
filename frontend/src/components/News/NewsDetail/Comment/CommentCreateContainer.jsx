import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import csrftoken from '../../../Authorization/csrftoken';
import CommentForm from './CommentForm.jsx';

const CommentCreateContainer = ({postID}) => {
    const [comment, setComment] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/v1/news/detail/${postID}/comment/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                content: comment,
                news: postID
            })
        });

        setComment('');
        history.push(`/news/detail/${postID}`);
    };

    return (
        <CommentForm 
        setComment={setComment}
        onSubmit={onSubmit}
        comment={comment}
        />
    )
};

export default CommentCreateContainer;