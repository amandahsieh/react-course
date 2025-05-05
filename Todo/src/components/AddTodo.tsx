interface AddTodoProps {
    formData: {name: string; dueDate: string};
    setFormData: (data: {name: string; dueDate: string }) => void;
    onAdd: () => void;
}

function AddTodo({ formData, setFormData, onAdd }: AddTodoProps) {
    return (
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
                onClick={onAdd}
                disabled={!formData.name.trim() || !formData.dueDate.trim()}
            >
                Add
            </button>
        </div>
    )
}

export default AddTodo