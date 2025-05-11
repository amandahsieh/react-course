import { useState, useReducer } from 'react'
import TodoItem from './TodoItem.tsx'
import AddTodo from './AddTodo.tsx';
import EditTodo from './EditTodo.tsx';
import FilterBar from './FilterBar.tsx';

interface Todo {
    id: number;
    itemName: string;
    dueDate: string;
    status: 'Not Started' | 'Progress' | 'Done' | 'Archived';
}

interface State {
    todos: Todo[];
    selectedStatus: string;
}

const initialState: State = {
    todos: [
        { id: 1, itemName: 'Task 1', dueDate: '2025-06-01', status: 'Not Started' },
        { id: 2, itemName: 'Task 2', dueDate: '2025-07-02', status: 'Progress' },
        { id: 3, itemName: 'Task 3', dueDate: '2025-08-03', status: 'Done' },
        { id: 4, itemName: 'Task 4', dueDate: '2025-10-04', status: 'Archived' },
        { id: 5, itemName: 'Task 5', dueDate: '2025-10-05', status: 'Not Started' },
        { id: 6, itemName: 'Task 6', dueDate: '2025-10-06', status: 'Progress' },
    ],
    selectedStatus: 'All',
}

export type Action = 
      { type: 'DELETE_TODO';        id: number}
    | { type: 'CHANGE_STATUS';      id: number}
    | { type: 'SET_STATUS_FILTER';  status: string};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.id),
            };
        case 'CHANGE_STATUS':
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.id ? { ...t, status: nextStatus(t.status) } : t
                ),
            };
        case 'SET_STATUS_FILTER':
            return {
                ...state,
                selectedStatus: action.status,
            };
        default:
            return state;
    }
}

function nextStatus(currentStatus: 'Not Started' | 'Progress' | 'Done' | 'Archived') {
    const order = ['Not Started', 'Progress', 'Done', 'Archived'];
    const nextIndex = (order.indexOf(currentStatus) + 1) % order.length;
    return order[nextIndex] as 'Not Started' | 'Progress' | 'Done' | 'Archived';
}

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todos, selectedStatus } = state;
    const [formData, setFormData] = useState({
        name: '',
        dueDate: ''
    })
    const [editForm, setEditForm] = useState({ name: '', dueDate:'' });
    const [editingId, setEditingId] = useState<number | null>(null);
    function handleAdd() {
        // if (!formData.name.trim() || !formData.dueDate.trim()) return;
        // const newTodo: Todo = {
        //     id: Date.now(),
        //     itemName: formData.name,
        //     dueDate: formData.dueDate,
        //     status: 'Not Started',
        // };
        // setTodos(prev => [...prev, newTodo]);
        // setFormData({ name: '', dueDate: ''});
    }
    function handleEditStart(todo: Todo){
        // setEditingId(todo.id);
        // setEditForm({ name: todo.itemName, dueDate: todo.dueDate})
    }
    function handleEditSave() {
        // if (!editForm.name.trim() || !editForm.dueDate.trim()) return;
        // setTodos( prev =>
        //     prev.map(todo => 
        //         todo.id === editingId
        //             ? {...todo, itemName: editForm.name, dueDate: editForm.dueDate}
        //             : todo
        //     )
        // );
        // setEditingId(null);
        // setEditForm({ name: '', dueDate: ''});
    }
    function handleEditCancel() {
        // setEditingId(null);
        // setEditForm({ name: '', dueDate: ''});
    }
    return (
        <div className="space-y-4">
            <AddTodo formData={formData} setFormData={setFormData} onAdd={handleAdd} />
            {editingId !== null && (
                <EditTodo editForm={editForm} setEditForm={setEditForm} onSave={handleEditSave} onCancel={handleEditCancel} />
            )}
            <FilterBar selectedStatus={selectedStatus} setSelectedStatus={(status) => dispatch({ type: 'SET_STATUS_FILTER', status})} />
            {todos
                .filter(todo => selectedStatus === 'All' || todo.status === selectedStatus)
                .map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onStatusChange={() => dispatch({ type: 'CHANGE_STATUS', id: todo.id })}
                        onDelete={ () => dispatch({ type: 'DELETE_TODO', id: todo.id}) }
                        onEdit={() => handleEditStart(todo)}
                    />
            ))}
        </div>
    )
}

export default TodoList