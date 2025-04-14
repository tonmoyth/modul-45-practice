import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className='border mb-4 p-4'>
            <h1 className='text-2xl'>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
            <button>details</button>
            </Link>
        </div>
    );
};

export default Post