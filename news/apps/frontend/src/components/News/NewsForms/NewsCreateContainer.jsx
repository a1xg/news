import React, { useState } from 'react';
import csrftoken from '../../Authorization/csrftoken';
import { useHistory } from 'react-router-dom';
import NewsForm from './NewsForm.jsx';

const NewsCreateContainer = (props) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/news/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                title: title,
                link: link
            }
            )
        });

        setTitle('');
        setLink('')
        history.push('/');
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

export default NewsCreateContainer;