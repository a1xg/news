import React from "react";

const NewsDetail = ({ permission, onDelete, onEdit, post }) => {
    return (
        <div>
            {permission &&
                <div>
                    <a href='/#' onClick={onEdit}>edit </a> |
                    <a href='/#' onClick={onDelete}> delete</a>
                </div>
            }
            <p>
                <a href={post.link}>
                    {post.title}
                </a>
            </p>
            <span>
            {
            `id: ${post.id} | 
            date: ${new Date(post.creation_date).toLocaleDateString()} | 
            author: ${post.author_name} | 
            total comments: ${post.total_comments} | 
            ${post.total_votes} votes  
            from: [${post.voters.join(', ')}]`
            }
            </span>
        </div>
    )
};

export default NewsDetail;