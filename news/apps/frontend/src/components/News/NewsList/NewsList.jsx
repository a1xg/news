import React, { useState, useEffect } from "react";
import NewsPost from './NewsPost/NewsPost.jsx';
import CreateEditNewsForm from "../CreateEditNewsForm/CreateEditNewsForm.jsx";

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
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
      }
        fetch('/api/v1/news/list')
            .then(response => { return response.json(); })
            .then((data) => {
                setPosts(data);
            })
    }, [props]);

    return (
        <div>
            {isAuth && 
            <CreateEditNewsForm action='create' />
            }
            <p>News list:</p>
            <div>
                {posts.map((post, index) => {
                    return (
                        <div key={post.id}>
                            <NewsPost post={post} position={index} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
};

export default NewsList;
