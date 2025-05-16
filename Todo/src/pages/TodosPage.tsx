import TodoList from '../components/TodoList';
import NavBar from '../components/NavBar';

function TodosPage() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <NavBar />
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-xl space-y-4 p-4 overflow-hidden">
            <TodoList />
        </div>
    </div>
  )
}

export default TodosPage
