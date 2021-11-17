import React, { useState, useEffect, Fragment } from "react";
import NewsPostContainer from './NewsPostContainer.jsx';
import NewsCreateContainer from "../NewsForms/NewsCreateContainer.jsx";

const NewsList = ({ isAuth }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/api/v1/news/list')
            .then(response => { return response.json(); })
            .then((data) => {
                setPosts(data);
            })
    }, []);

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
