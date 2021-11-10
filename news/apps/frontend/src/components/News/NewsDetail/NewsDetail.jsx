import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Comment from './Comment/Comment.jsx';
import CreateEditCommentForm from './CreateEditCommentForm/CreateEditCommentForm.jsx';
import CreateEditNewsForm from "../CreateEditNewsForm/CreateEditNewsForm.jsx";

const NewsDetail = (props) => {
    console.log('NewsDetail props', props);
    const [editMode, setEditMode] = useState(false);
    const [isAuthor, setIsAutror] = useState(false);
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
        
        console.log('user', user);
        console.log('author name', post.author_name)

        fetch(`/api/v1/news/detail/${props.match.params.postID}`)
            .then(response => { return response.json(); })
            .then((data) => {
                setPost(data);
                if (data.author_name === user) {
                    setIsAutror(true);
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
                    <div>
                        {isAuthor &&
                            <div>
                                <a href='' onClick={onEdit}>edit </a> |
                                <a href='' onClick={onDelete}> delete</a>
                            </div>
                        }
                        <p>
                            <a href={post.link}>
                                {post.title}
                            </a>
                        </p>
                        <p>id {post.id} |Creation date: {post.creation_date} by {post.author_name} | {post.total_comments} comments</p>
                        <p>{post.total_votes} votes from [{post.voters.join(', ')}]</p>
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

            {post.id != null &&
                <div style={{ widows: 500, height: 100 }}>
                    <CreateEditCommentForm
                        postID={post.id}
                        action='create'
                        setEditMode={setEditMode}
                    />
                </div>
            }
            {post.comments.length > 0 &&
                <div>
                    <p>Comments:</p>
                    {post.comments.map((comment) => {
                        return (
                            <Comment comment={comment} />
                        )
                    })}
                </div>
            }
        </div>
    )
};

export default NewsDetail;
