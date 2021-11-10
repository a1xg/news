import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import csrftoken from '../../../Authorization/csrftoken';

const AddCommentForm = (props) => {
    const [comment, setComment] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            content: comment,
            news: props.postID
        }

        fetch('/api/v1/news/detail/1/comment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(newComment)
        });
    }


    return (
        <div style={{ width: 500, height: 250 }}>
            <form id='commentform' onSubmit={onSubmit}>
                <label htmlFor='comment'>Add comment form:</label>
                <br />
                <input type='submit' value='Send' />
            </form>
            <textarea 
            form='commentform' 
            name='comment' 
            style={{ width: '100%' }} 
            value={comment}
            onChange={e => setComment(e.target.value)}
            />
        </div>
    )
};

export default AddCommentForm;