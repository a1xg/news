import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import csrftoken from '../../../Authorization/csrftoken';

const CreateEditCommentForm = (props) => {
    console.log('CreateEditCommentForm props', props)
    const [comment, setComment] = useState('');
    const [method, setMethod] = useState('');
    const [postID, setPostID] = useState('')
    const [url, setUrl] = useState('')
    const history = useHistory();


    useEffect(() => {
        
        if (props.action == 'create') {
            setPostID(props.postID);
            setMethod('POST')
            setUrl(`/api/v1/news/detail/${props.postID}/comment/create`)

        } else if (props.action == 'edit') {
            console.log('edit props', props)
            setPostID(props.comment.news);
            setMethod('PUT')
            setComment(props.comment.content)
            setUrl(`/api/v1/comment/detail/${props.comment.id}`);
        }

    },[props],);


    const onSubmit = (e) => {
        //TODO сделать обновление коммента после редактирования
        e.preventDefault();
        const newComment = {
            content: comment,
            news: postID
        }

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(newComment)
        });
        setComment('');
        props.setEditMode(false);
        history.push(`/news/detail/${postID}`);
        
        
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

export default CreateEditCommentForm;