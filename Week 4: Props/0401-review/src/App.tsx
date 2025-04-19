import TodoItem from './components/TodoItem.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 space-y-4">
        <TodoItem itemName='Todo 1' dueDate='20250421' defaultStatus='process'/>
        <TodoItem itemName='Todo 2'/>
        <TodoItem />
      </div>
    </div>
  );
}


export default App;