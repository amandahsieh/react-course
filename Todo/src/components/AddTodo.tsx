import { Action } from './TodoList.tsx';

interface AddTodoProps {
    formData: {name: string; dueDate: string};
    dispatch: React.Dispatch<Action>
    onAdd: () => void;
}

function AddTodo({ formData, dispatch, onAdd }: AddTodoProps) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={formData.name}
                onChange={(e) => 
                    dispatch({type: 'UPDATE_FIELD', field: 'name', value: e.target.value, form: 'formData'})
                }
                placeholder="Add new task"
                className="border p-2 rounded"
            />
            <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => 
                    dispatch({type: 'UPDATE_FIELD', field: 'dueDate', value: e.target.value, form: 'formData'})
                }
                placeholder="Set Due Date"
                className="border p-2 rounded"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={onAdd}
                disabled={!formData.name.trim() || !formData.dueDate.trim()}
            >
                Add
            </button>
        </div>
    )
}

export default AddTodo