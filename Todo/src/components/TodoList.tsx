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
    formData: { name: string; dueDate: string };
    editForm: { name: string; dueDate: string };
    editingId: number | null;
}

const initialState: State = {
    todos: [
        { id: 1, itemName: 'Task 1', dueDate: '2025-05-13', status: 'Not Started' },
        { id: 2, itemName: 'Task 2', dueDate: '2025-06-02', status: 'Progress' },
        { id: 3, itemName: 'Task 3', dueDate: '2025-07-03', status: 'Done' },
        { id: 4, itemName: 'Task 4', dueDate: '2025-08-04', status: 'Archived' },
        { id: 5, itemName: 'Task 5', dueDate: '2025-10-05', status: 'Not Started' },
        { id: 6, itemName: 'Task 6', dueDate: '2025-10-06', status: 'Progress' },
    ],
    selectedStatus: 'All',
    formData: { name: '', dueDate: ''},
    editForm: { name: '', dueDate: ''},
    editingId: null
}

export type Action = 
      { type: 'DELETE_TODO';        id: number}
    | { type: 'CHANGE_STATUS';      id: number}
    | { type: 'SET_STATUS_FILTER';  status: string}
    | { type: 'UPDATE_FIELD';       field: 'name' | 'dueDate'; value: string; form: 'formData' | 'editForm'}
    | { type: 'ADD_TODO' }
    | { type: 'START_EDIT';         todo: Todo}
    | { type: 'SAVE_EDIT';}
    | { type: 'CANCEL_EDIT';}

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
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.form]: {...state[action.form], [action.field]: action.value},
            };
        case 'ADD_TODO':
            if (!state.formData.name.trim() || !state.formData.dueDate.trim()) return state;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        itemName: state.formData.name,
                        dueDate: state.formData.dueDate,
                        status: 'Not Started',
                    },
                ],
                formData: { name: '', dueDate: ''},
            };
        case 'START_EDIT':
            return{
                ...state,
                editingId: action.todo.id,
                editForm: { name: action.todo.itemName, dueDate: action.todo.dueDate },
            };
        case 'SAVE_EDIT':
            if (!state.editForm.name.trim() || !state.editForm.dueDate.trim()) return state;
            return {
                ...state,
                todos: state.todos.map((t) => 
                    t.id === state.editingId
                        ? {...t, itemName: state.editForm.name, dueDate: state.editForm.dueDate }
                        : t
                ),
                editingId: null,
                editForm: { name: '', dueDate: ''},
            };
        case 'CANCEL_EDIT':
            return {
                ...state,
                editingId: null,
                editForm: { name: '', dueDate: ''},
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
    const { todos, selectedStatus, formData, editForm, editingId } = state;
    return (
        <div className="space-y-4">
            <AddTodo formData={formData} dispatch={dispatch} onAdd={() => dispatch({ type: 'ADD_TODO' })} />
            {editingId !== null && (
                <EditTodo editForm={editForm} dispatch={dispatch} 
                    onSave  ={() => dispatch({ type: 'SAVE_EDIT'})} 
                    onCancel={() => dispatch({ type: 'CANCEL_EDIT'})} />
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
                        onEdit={() => dispatch({ type: 'START_EDIT', todo: todo})}
                    />
            ))}
        </div>
    )
}

export default TodoList