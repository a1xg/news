import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Comment from './Comment/Comment.jsx';
import AddCommentForm from './AddCommentForm/AddCommentForm.jsx';

const NewsDetail = (props) => {
    console.log('NewsDetail props', props)
    const [post, setPost] = useState({
        id: null,
        total_votes: null,
        total_comments: null,
        voters: [''],
        author_name: '',
        comments: [
            {
                id: null,
                author_name: '',
                creation_date: '',
                content: '',
                news: null
            },
        ],
        creation_date: '',
        title: '',
        link: ''
    })

    useEffect(() => {
        fetch(`/api/v1/news/detail/${props.match.params.postID}`)
            .then(response => { return response.json(); })
            .then((data) => {
                setPost(data);
                console.log(data)
            })
    }, []);


    return (
        <div>
            DETAIL
            <Link to='/'>
                TO LIST
            </Link>

            {post.comments.map((comment) => {
                return (
                    <Comment comment={comment} />
                )
            })}
        </div>
    )
};

export default NewsDetail;
