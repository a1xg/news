import React, { useState, useEffect, Fragment } from "react";
import NewsPostContainer from './NewsPostContainer.jsx';
import NewsCreateContainer from "../NewsForms/NewsCreateContainer.jsx";

const NewsList = (props) => {
    const [posts, setPosts] = useState([])
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
            {posts.length > 0 &&
                <Fragment>
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
                </Fragment>
            }

        </div>
    )
};

export default NewsList;
