import TodoItem from './components/TodoItem.tsx';
import Nav from './components/Nav.tsx';

function App() {
  type Status = 'Not Started' | 'Progress' | 'Done' | 'Archived';
  const todoList: { id: number; name?: string; dueDate?: string; defaultStatus: Status }[] = [
    { id: 1, name: 'Task 1', dueDate: '2023-10-01', defaultStatus: 'Not Started' },
    { id: 2, name: 'Task 2', dueDate: '2023-10-02', defaultStatus: 'Progress' },
    { id: 3, name: 'Task 3', dueDate: '2023-10-03', defaultStatus: 'Done' },
    { id: 4, name: 'Task 4', dueDate: '2023-10-04', defaultStatus: 'Archived' },
    { id: 5, name: 'Task 5', dueDate: '2023-10-05', defaultStatus: 'Not Started' },
    { id: 6, name: 'Task 6', dueDate: '2023-10-06', defaultStatus: 'Progress' },
  ]

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <Nav />
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl space-y-4 p-4">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            itemName={item.name}
            dueDate={item.dueDate}
            defaultStatus={item.defaultStatus}
          />
        ))}
      </div>
    </div>
  )
}

export default App
