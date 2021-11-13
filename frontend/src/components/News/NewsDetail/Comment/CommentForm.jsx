import React from "react"

const Form = ({onSubmit, comment, setComment}) => {
    return (
        <div>
            <form id='commentform' onSubmit={onSubmit}>
                <label htmlFor='comment'>Add comment form:</label>
                <br />
                <input type='submit' value='Send' />
            </form>
            <textarea 
            form='commentform' 
            placeholder='Leave your comment here'
            name='comment' 
            style={{ width: '100%' }} 
            value={comment}
            onChange={e => setComment(e.target.value)}
            />
        </div>
    )
};

export default Form;