import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VoteButton from "../../VoteButton/VoteButton.jsx";
import csrftoken from "../../../Authorization/csrftoken.js";
import CreateEditNewsForm from "../../CreateEditNewsForm/CreateEditNewsForm.jsx";

const NewsPost = (props) => {
    const post = props.post
    const [activeVote, setActiveVote] = useState(false);
    const [isAuthor, setIsAutror] = useState(false);
    const [editHandler, setEditHandler] = useState(false)

    useEffect(() => {

        if (localStorage.getItem('user') !== null) {
            const user = localStorage.getItem('user')
            let userVoted = (post.voters.indexOf(user) > -1)
            if (!(userVoted)) {
                setActiveVote(true);
            };
            if (post.author_name === user) {
                setIsAutror(true);
            }
        }

    }, []);

    const onDelete = (e) => {
        e.preventDefault();
        console.log('delete');
        fetch(`/api/v1/news/detail/${props.post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        });
    }

    const onEdit = (e) => {
        e.preventDefault();
        setEditHandler(true)
    }


    return (

        <div style={{ width: 500, height: 250, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
            {editHandler == false &&
                <div>
                    <p>Position: {props.position}</p>
                    {activeVote &&
                        <VoteButton postID={props.post.id} />
                    }
                    {isAuthor &&
                        <p>
                            <a href='' onClick={onEdit}> edit </a>|
                            <a href='' onClick={onDelete}> delete</a>
                        </p>
                    }

                    <a href={post.link}>
                        {post.title}
                    </a>
                    <p>Author [ {post.author_name} | {post.creation_date} ] | {post.total_votes} votes from: {post.voters.join(', ')} </p>
                    <NavLink to={`/news/detail/${props.post.id}`} >
                        <p>{post.total_comments} comments</p>
                    </NavLink>
                </div>
            }
            {editHandler &&
                <CreateEditNewsForm 
                action='edit' 
                newsID={props.post.id}
                title={post.title}
                link={post.link}
                setEditHandler={setEditHandler}
                />
            }
        </div>

    )
};

export default NewsPost;