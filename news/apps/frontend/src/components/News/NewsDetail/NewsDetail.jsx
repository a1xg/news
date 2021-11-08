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
        creation_date: '',
        title: '',
        link: '',
        comments: [
            {
                id: null,
                author_name: '',
                creation_date: '',
                content: '',
                news: null
            },
        ],
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
            <Link to='/'>
                To news list
            </Link>
            <p>News:</p>
            <div style={{ width: 500, backgroundColor: 'lightcoral', margin: 5, padding: 5 }}>
                id {post.id} 
                <a href={post.link}>
                    {post.title}
                </a>
                <p>Creation date: {post.creation_date} by {post.author_name} | {post.total_comments} comments</p>
                <p>{post.total_votes} votes from [{post.voters.join(', ')}]</p>
            </div>
            <div>
                <p>Comments:</p>
                {post.comments.map((comment) => {
                    return (
                        <Comment comment={comment} />
                    )
                })}
            </div>

        </div>
    )
};

export default NewsDetail;
