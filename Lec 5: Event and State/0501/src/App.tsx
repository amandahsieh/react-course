import TodoItem from './components/TodoItem.tsx'

function App() {
  type Status = 'Not Started' | 'Progress' | 'Done' | 'Archived';
  const todoList: { id: number; itemName?: string; dueDate?: string; defaultStatus?: Status }[] = [
    { id: 1, itemName: 'Todo 1', dueDate: '20250421', defaultStatus: 'Progress' },
    { id: 2, itemName: 'Todo 2' },
    { id: 3, itemName: 'Todo 3', dueDate: '20250422', defaultStatus: 'Done' },
    { id: 4, itemName: 'Todo 4',                      defaultStatus: 'Archived' },
    { id: 5, itemName: 'Todo 5' },
    { id: 6, itemName: 'Todo 6', dueDate: '20250424', defaultStatus: 'Not Started' },
    { id: 7, itemName: 'Todo 7', dueDate: '20250425', defaultStatus: 'Progress' },
    { id: 8, itemName: 'Todo 8', dueDate: '20250426', defaultStatus: 'Done' },
    { id: 9}
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            itemName={todo.itemName}
            dueDate={todo.dueDate}
            defaultStatus={todo.defaultStatus}
          />
        ))}
      </div>
    </div>
  )
}

export default App
