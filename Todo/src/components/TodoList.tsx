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
    const [itemName, setItemName] = useState('');
    const [dueDate, setDueDate] = useState('');
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
    function handleAdd() {
        if (!itemName.trim() || !dueDate.trim()) return;
        const newTodo: Todo = {
            id: Date.now(),
            itemName,
            dueDate: "No Due Date",
            status: 'Not Started',
        };
        setTodos(prev => [...prev, newTodo]);
        setItemName('');
    }
    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Add new task"
                    className="border p-2 rounded"
                />
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="Set Due Date"
                    className="border p-2 rounded"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    onClick={handleAdd}
                    disabled={!itemName.trim() || !dueDate.trim()}
                >
                    Add
                </button>
            </div>
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