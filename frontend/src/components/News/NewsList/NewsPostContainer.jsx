import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import csrftoken from "../../Authorization/csrftoken.js";
import NewsEditContainer from "../NewsForms/NewsEditContainer.jsx";
import NewsPost from "./NewsPost.jsx";

const NewsPostContainer = (props) => {
    const post = props.post
    const [activeVote, setActiveVote] = useState(false);
    const [isNewsAuthor, setIsNewsAutror] = useState(false);
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
                setIsNewsAutror(true);
            }
        }
    }, [post.author_name, post.voters]);

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

        <div style={{
            width: 500,
            height: 180,
            backgroundColor: 'lightcoral',
            margin: 5,
            padding: 15
        }}
        >
            {editMode === false &&
                <NewsPost
                    position={props.position}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    post={post}
                    permission={isNewsAuthor}
                    activeVote={activeVote}
                />
            }
            {editMode &&
                <NewsEditContainer
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

export default NewsPostContainer;