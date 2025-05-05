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
    const [formData, setFormData] = useState({
        name: '',
        dueDate: ''
    })
    const [editForm, setEditForm] = useState({ name: '', dueDate:'' })
    const [editingId, setEditingId] = useState<number | null>(null);
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
        if (!formData.name.trim() || !formData.dueDate.trim()) return;
        const newTodo: Todo = {
            id: Date.now(),
            itemName: formData.name,
            dueDate: formData.dueDate,
            status: 'Not Started',
        };
        setTodos(prev => [...prev, newTodo]);
        setFormData({ name: '', dueDate: ''});
    }
    function handleEditStart(todo: Todo){
        setEditingId(todo.id);
        setEditForm({ name: todo.itemName, dueDate: todo.dueDate})
    }
    function handleEditSave() {
        if (!editForm.name.trim() || !editForm.dueDate.trim()) return;
        setTodos( prev =>
            prev.map(todo => 
                todo.id === editingId
                    ? {...todo, itemName: editForm.name, dueDate: editForm.dueDate}
                    : todo
            )
        );
        setEditingId(null);
        setEditForm({ name: '', dueDate: ''});
    }
    function handleEditCancel() {
        setEditingId(null);
        setEditForm({ name: '', dueDate: ''});
    }
    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Add new task"
                    className="border p-2 rounded"
                />
                <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                    placeholder="Set Due Date"
                    className="border p-2 rounded"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    onClick={handleAdd}
                    disabled={!formData.name.trim() || !formData.dueDate.trim()}
                >
                    Add
                </button>
            </div>
            {editingId !== null && (
                <div className="flex gap-2 bg-yellow-100 p-2 rounded">
                    <input 
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value})}
                        className="border p-2 rounded w-64"
                    />
                    <input 
                        type="date"
                        value={editForm.dueDate}
                        onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value})}
                        className="border p-2 rounded w-48"
                    />
                    <button
                        onClick={handleEditSave}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        disabled={!editForm.name.trim() || !editForm.dueDate.trim()}
                    >
                        Save
                    </button>
                    <button
                        onClick={handleEditCancel}
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            )}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onStatusChange={() => handleStatusChange(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                    onEdit={() => handleEditStart(todo)}
                />
            ))}
        </div>
    )
}

export default TodoList