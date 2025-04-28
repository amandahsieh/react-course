import TodoList from './components/TodoList.tsx'
import Nav from './components/Nav.tsx'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <Nav />
      <h1 className='text-2xl font-bold text-center mb-6'>Todo List</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
        <TodoList/>
      </div>
    </div>
  )
}

export default App
