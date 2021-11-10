import React from "react";
import csrftoken from "../../Authorization/csrftoken";

const VoteButton = (props) => {


    const onClick = (e) => {
        e.preventDefault();

        const vote = {
            news:props.postID,
        };
        fetch(`/api/v1/news/detail/${props.postID}/vote/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(vote)
        })
    };


    return (
            <a href='' onClick={onClick}><h3>^</h3></a>
    )
};

export default VoteButton;