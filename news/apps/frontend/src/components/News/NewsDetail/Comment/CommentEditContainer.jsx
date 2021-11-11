import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import csrftoken from '../../../Authorization/csrftoken';
import Form from './Form.jsx';

const EditContainer = ({comment, setEditMode}) => {
    const [correctedComment, setCorrectedComment] = useState('');
    const history = useHistory();

    useEffect(() => {
        setCorrectedComment(comment.content);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/v1/comment/detail/${comment.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                content: correctedComment,
                news: comment.news
            })
        });

        setCorrectedComment('');
        setEditMode(false);
        history.push(`/news/detail/${comment.news}`);
    }

    return (
        <Form
            setComment={setCorrectedComment}
            onSubmit={onSubmit}
            comment={correctedComment}
        />
    )
};

export default EditContainer;