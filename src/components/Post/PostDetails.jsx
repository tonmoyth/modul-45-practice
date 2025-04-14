import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
   
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default PostDetails;