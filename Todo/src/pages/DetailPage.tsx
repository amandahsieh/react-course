import { useParams } from 'react-router-dom';
import { useTodoContext } from '../TodoContext';

function DetailPage() {
    const { id } = useParams();
    const { state } = useTodoContext();
    const todo = state.todos.find(t => t.id === Number(id));
    if (!todo) return <div className="p-4 text-red-500">Can't Find the Todo Item</div>;
    const daysLeft = Math.ceil((new Date(todo.dueDate).getTime() - Date.now()) / (1000 * 3600 * 24));
    return (
        <div>
            <h2 className="text-xl font-bold">Detailed Information of {todo.itemName}</h2>
            <p><strong>Task Name: </strong> {todo.itemName} </p>
            <p><strong>Due Date: </strong> {todo.dueDate} </p>
            <p><strong>Current Status: </strong> {todo.status} </p>
            <p><strong>Create Time: </strong> {todo.createdAt} </p>
            <p><strong>Last Updated: </strong> {todo.updatedAt} </p>
            <p><strong>Days Left: </strong> {daysLeft} </p>
        </div>
    )
}

export default DetailPage;