import React, { use } from 'react';
import TodosCard from './todosCard/TodosCard';

const Todos = ({todosPromise}) => {
    const todosData = use(todosPromise);

    return (
        <div>
            <h1>All todos {todosData.length}</h1>
            <div>
                {
                    todosData.map(todos => <TodosCard todos={todos} key={todos.id}></TodosCard>)
                }
            </div>
        </div>
    );
};

export default Todos;