import React, { useState, useEffect } from "react";
import NewsPostContainer from './NewsPostContainer.jsx';
import NewsCreateContainer from "../NewsForms/NewsCreateContainer.jsx";

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
                <NewsCreateContainer />
            }
            <p>News list:</p>
            <div>
                {posts.map((post, index) => {
                    return (
                        <NewsPostContainer
                            key={post.id}
                            post={post}
                            position={index}
                        />
                    )
                })}

            </div>
        </div>
    )
};

export default NewsList;
