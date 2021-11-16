import React, {useState} from "react";
import csrftoken from "../../Authorization/csrftoken";

const VoteButton = (props) => {
    const [activevote, setActiveVote] = useState(true)

    const onClick = (e) => {
        e.preventDefault();

        const vote = {
            news: props.postID,
        };
        fetch(`/api/v1/news/detail/${props.postID}/vote/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(vote)
        });
        setActiveVote(false);
    };


    return (
        <div>
        {activevote &&
            <a href='/#' onClick={onClick}><h3>^vote^</h3></a> 
        }
        </div>
        
              
    )
};

export default VoteButton;