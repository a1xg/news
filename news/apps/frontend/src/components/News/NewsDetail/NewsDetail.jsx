import React from "react";

const NewsDetail = ({permission, onDelete, onEdit, post}) => {
    return (
        <div>
            {permission &&
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
    )
};

export default NewsDetail;