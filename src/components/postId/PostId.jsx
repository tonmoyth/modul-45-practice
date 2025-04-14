import React, { use } from 'react';

const PostId = ({user}) => {
    const postIdData = use(user);
  
    
    return (
        <div>
            <h1>{postIdData.title}</h1>
        </div>
    );
};

export default PostId;