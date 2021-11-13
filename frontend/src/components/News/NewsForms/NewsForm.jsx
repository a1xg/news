import React from "react";

const NewsForm = (props) => {
    return (
        <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
            Form for adding news
            <form onSubmit={props.onSubmit}>
                <br />
                <input
                    name='title'
                    type='text'
                    placeholder='News title'
                    value={props.title}
                    onChange={e => props.setTitle(e.target.value)}
                    required
                    style={{width:'100%'}}
                />
                <br />
                <br />
                <input
                    name='link'
                    type='url'
                    placeholder='https://www.newslink.com'
                    pattern='https://.*'
                    value={props.link}
                    onChange={e => props.setLink(e.target.value)}
                    required
                    style={{width:'100%'}}
                />
                <br />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
};

export default NewsForm;