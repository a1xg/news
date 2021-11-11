import React from "react"

const Form = ({onSubmit, comment, setComment}) => {
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

export default Form;