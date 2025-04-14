import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
   
    const navigate = useNavigate();
    return (
        <div>
            <h1>{post.title}</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(`/`)}>Go Home</button>
        </div>
    );
};

export default PostDetails;