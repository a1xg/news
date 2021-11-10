import React, { useState } from 'react';
import csrftoken from '../../Authorization/csrftoken';

const AddNewsForm = (props) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const news = {
            title: link,
            link: link
        }

        fetch('/api/v1/news/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(news)
        });
    };

    return (
        <div style={{ width: 500, height: 100 }}>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>News title:</label>
                <br />
                <input
                    name='title'
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    style={{width:'100%'}}
                />
                <br />
                <label htmlFor='link'>News link:</label>
                <br />
                <input
                    name='link'
                    type='text'
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    required
                    style={{width:'100%'}}
                />
                <br />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
};

export default AddNewsForm;