import React, { useState, useEffect } from 'react';
import csrftoken from '../../Authorization/csrftoken';
import { useHistory } from 'react-router-dom';

const CreateEditNewsForm = (props) => {
    console.log('CreateEditNewsForm props:', props)
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [method, setMethod] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (props.action == 'create') {
            setMethod('POST')
            setUrl('/api/v1/news/create')
        } else if (props.action== 'edit') {
            setMethod('PUT')
            props.newsID != null ? setUrl(`/api/v1/news/detail/${props.newsID}`) : setUrl('')
            props.title != null ? setTitle(props.title) : setTitle('')
            props.link != null ? setLink(props.link) : setLink('')
        }

    }, [props])

    const onSubmit = (e) => {
        e.preventDefault();
        const news = {
            title: title,
            link: link
        }
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(news)
        });
        history.push('/');
        props.setEditHandler(false);
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

export default CreateEditNewsForm;