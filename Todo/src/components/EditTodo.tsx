import { Action } from '../TodoContext';
interface EditTodoProps {
    editForm: { name:string; dueDate: string};
    dispatch: React.Dispatch<Action>;
    onSave: () => void;
    onCancel: () => void;
}

function EditTodo({ editForm, dispatch, onSave, onCancel }: EditTodoProps) {
    return (
        <div className="flex gap-2 bg-yellow-100 p-2 rounded">
                    <input 
                        type="text"
                        value={editForm.name}
                        onChange={(e) => dispatch({type: 'UPDATE_FIELD', field: 'name', value: e.target.value, form: 'editForm'})}
                        className="border p-2 rounded w-64"
                    />
                    <input 
                        type="date"
                        value={editForm.dueDate}
                        onChange={(e) => dispatch({type: 'UPDATE_FIELD', field: 'dueDate', value: e.target.value, form: 'editForm'})}
                        className="border p-2 rounded w-48"
                    />
                    <button
                        onClick={onSave}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        disabled={!editForm.name.trim() || !editForm.dueDate.trim()}
                    >
                        Save
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
    )
}

export default EditTodo;