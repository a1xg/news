import React from "react";

const NewsForm = (props) => {
    return (
        <div style={{ width: 500, height: 100 }}>
            <form onSubmit={props.onSubmit}>
                <label htmlFor='title'>News title:</label>
                <br />
                <input
                    name='title'
                    type='text'
                    value={props.title}
                    onChange={e => props.setTitle(e.target.value)}
                    required
                    style={{width:'100%'}}
                />
                <br />
                <label htmlFor='link'>News link:</label>
                <br />
                <input
                    name='link'
                    type='text'
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