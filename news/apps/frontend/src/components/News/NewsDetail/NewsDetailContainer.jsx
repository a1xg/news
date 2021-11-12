import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import CommentDisplayContainer from './Comment/CommentDisplayContainer.jsx';
import CommentCreateContainer from "./Comment/CommentCreateContainer.jsx";
import NewsEditContainer from "../NewsForms/NewsEditContainer.jsx";
import NewsDetail from "./NewsDetail.jsx";

const NewsDetailContainer = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [isNewsAuthor, setNewsAuthor] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();
    const [post, setPost] = useState({
        id: null,
        total_votes: null,
        total_comments: null,
        voters: [''],
        author_name: '',
        creation_date: '',
        title: '',
        link: '',
        comments: [],
    })

    useEffect(() => {
        const user = localStorage.getItem('user');
        fetch(`/api/v1/news/detail/${props.match.params.postID}`)
            .then(response => { return response.json(); })
            .then((data) => {
                setPost(data);
                if (user) {
                    setIsAuth(true);
                }
                if (data.author_name === user) {
                    setNewsAuthor(true);
                };
            })
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
    };

    return (
        <div>
            <Link to='/'>
                To news list
            </Link>
            <p>News:</p>
            <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
                {editMode == false &&
                    <NewsDetail
                        permission={isNewsAuthor}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        post={post}
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
            {post.comments.length > 0 &&
                <div>
                    <p>Comments:</p>
                    {post.comments.map((comment) => {
                        return (
                            <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
                                <CommentDisplayContainer
                                    comment={comment}
                                    isNewsAuthor={isNewsAuthor}
                                />
                            </div>
                        )
                    })}
                </div>
            }
            {isAuth &&
                <Fragment>
                    {post.id != null &&
                        <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 15 }}>
                            <CommentCreateContainer
                                postID={post.id}
                            />
                        </div>
                    }
                </Fragment>
            }
        </div>
    )
};

export default NewsDetailContainer;
