import React, { useState } from 'react';
import csrftoken from '../../Authorization/csrftoken';
import { useHistory } from 'react-router-dom';
import NewsForm from './NewsForm.jsx';

const NewsEditContainer = (props) => {
    const history = useHistory();
    const [title, setTitle] = useState(props.title);
    const [link, setLink] = useState(props.link);

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/v1/news/detail/${props.newsID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                title: title,
                link: link
            })
        });

        setTitle('');
        history.push('/');
        props.setEditMode(false);
    };

    return (
        <NewsForm
            onSubmit={onSubmit}
            title={title}
            link={link}
            setTitle={setTitle}
            setLink={setLink}
        />
    )
};

export default NewsEditContainer;