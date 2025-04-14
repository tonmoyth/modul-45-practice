import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import PostId from '../postId/PostId';

const Post = ({post}) => {

    const [showName,setShowName] = useState(false);

    const {id,title,body} = post;
    console.log(post)

    const user = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    
    return (
        <div className='border mb-4 p-4'>
            <h1 className='text-2xl'>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
            <button>details</button>
            </Link>

            <button onClick={()=> setShowName(!showName)}>
                {showName ? 'Show Name' : 'hide Name'}
            </button>

            {
                showName && <Suspense fallback={<span>Loading...</span>}>
                    <PostId user={user}></PostId>
                </Suspense>
            }
        </div>
    );
};

export default Post