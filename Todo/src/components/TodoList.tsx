import { useState } from 'react'
import TodoItem from './TodoItem.tsx'

interface Todo {
    id: number;
    itemName: string;
    dueDate: string;
    status: 'Not Started' | 'Progress' | 'Done' | 'Archived';
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, itemName: 'Task 1', dueDate: '2023-10-01', status: 'Not Started' },
        { id: 2, itemName: 'Task 2', dueDate: '2023-10-02', status: 'Progress' },
        { id: 3, itemName: 'Task 3', dueDate: '2023-10-03', status: 'Done' },
        { id: 4, itemName: 'Task 4', dueDate: '2023-10-04', status: 'Archived' },
        { id: 5, itemName: 'Task 5', dueDate: '2023-10-05', status: 'Not Started' },
        { id: 6, itemName: 'Task 6', dueDate: '2023-10-06', status: 'Progress' },
    ]);
    function nextStatus(currentStatus: 'Not Started' | 'Progress' | 'Done' | 'Archived') {
        const order = ['Not Started', 'Progress', 'Done', 'Archived'];
        const nextIndex = (order.indexOf(currentStatus) + 1) % order.length;
        return order[nextIndex] as 'Not Started' | 'Progress' | 'Done' | 'Archived';
    }
    function handleStatusChange(id: number) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, status: nextStatus(todo.status) } : todo
            )
        );
    }
    function handleDelete(id: number) {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    }
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onStatusChange={() => handleStatusChange(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                />
            ))}
        </div>
    )
}

export default TodoList