import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NewsPost from './NewsPost/NewsPost.jsx';

const NewsList = (props) => {
    const [posts, setPosts] = useState([{
        id: null,
        author_name: '',
        creation_date: '',
        id: null,
        link: '',
        title: '',
        total_comments: null,
        total_votes: null,
        voters: ['']
    }])

    useEffect(() => {
        fetch('/api/v1/news/list')
            .then(response => { return response.json(); })
            .then((data) => {
                setPosts(data);
                console.log(data)
            })
    }, []);

    return (
        <div>
            <NavLink to='/detail'>
                TO DETAIL
            </NavLink>
            <div>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <NewsPost post={post}/>
                        </div>
                    )
                })}

            </div>
        </div>
    )
};

export default NewsList;
