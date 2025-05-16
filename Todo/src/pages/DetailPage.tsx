import { useParams } from 'react-router-dom';
import { useTodoContext } from '../TodoContext';

function DetailPage() {
    const { id } = useParams();
    const { state } = useTodoContext();
    const todo = state.todos.find(t => t.id === Number(id));
    if (!todo) return <div className="p-4 text-red-500">Can't Find the Todo Item</div>;
    return (
        <div>
            <h2 className="text-xl font-bold">Detailed Information of {todo.itemName}</h2>
            <p><strong>Task Name: </strong> {todo.itemName} </p>
            <p><strong>Due Date: </strong> {todo.dueDate} </p>
            <p><strong>Current Status: </strong> {todo.status} </p>
        </div>
    )
}

export default DetailPage;