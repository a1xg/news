import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import VoteButton from "../../VoteButton/VoteButton.jsx";
import csrftoken from "../../../Authorization/csrftoken.js";
import CreateEditNewsForm from "../../CreateEditNewsForm/CreateEditNewsForm.jsx";

const NewsPost = (props) => {
    const post = props.post
    const [activeVote, setActiveVote] = useState(false);
    const [isAuthor, setIsAutror] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();

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
        fetch(`/api/v1/news/detail/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        });
        history.push('/');
    }

    const onEdit = (e) => {
        e.preventDefault();
        setEditMode(true)
    }


    return (

        <div style={{ width: 500, height: 250, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
            {editMode == false &&
                <div>
                    <p>Position: {props.position}</p>
                    {activeVote &&
                        <VoteButton postID={post.id} />
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
                    <p>id {post.id} | Author [ {post.author_name} | {post.creation_date} ] | {post.total_votes} votes from: {post.voters.join(', ')} </p>
                    <NavLink to={`/news/detail/${post.id}`} >
                        <p>{post.total_comments} comments</p>
                    </NavLink>
                </div>
            }
            {editMode &&
                <CreateEditNewsForm 
                action='edit' 
                newsID={post.id}
                title={post.title}
                link={post.link}
                setEditMode={setEditMode}
                />
            }
        </div>

    )
};

export default NewsPost;