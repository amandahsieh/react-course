import { useTodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';
import TodoItem from './TodoItem.tsx';
import AddTodo from './AddTodo.tsx';
import EditTodo from './EditTodo.tsx';
import FilterBar from './FilterBar.tsx';

function TodoList() {
    const { state, dispatch } = useTodoContext();
    const { todos, selectedStatus, formData, editForm, editingId } = state;
    const navigate = useNavigate();
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
                    <div key={todo.id} className="cursor-pointer" onClick={() => navigate(`/todos/${todo.id}`)}>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onStatusChange={() => dispatch({ type: 'CHANGE_STATUS', id: todo.id })}
                            onDelete={ () => dispatch({ type: 'DELETE_TODO', id: todo.id}) }
                            onEdit={() => dispatch({ type: 'START_EDIT', todo: todo})}
                        />
                    </div>
            ))}
        </div>
    )
}

export default TodoList