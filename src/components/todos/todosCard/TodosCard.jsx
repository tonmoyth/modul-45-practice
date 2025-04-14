import React from 'react';
import { Link } from 'react-router';

const TodosCard = ({todos}) => {
    const {id,title} = todos;
    return (
        <div className='border mb-4'>
            <h1>{title}</h1>
            <Link to={`/todos/${id}`}>
            <button>Details</button>
            </Link>
        </div>
    );
};

export default TodosCard;