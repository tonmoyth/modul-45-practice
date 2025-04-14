import React from 'react';
import { useLoaderData } from 'react-router';

const TodolsDetails = () => {

    const todos = useLoaderData();
    
    return (
        <div>
            <h1>{todos.title}</h1>
        </div>
    );
};

export default TodolsDetails;