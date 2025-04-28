import { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  itemName: string;
  dueDate: string;
  status: 'Not Started' | 'Progress' | 'Done' | 'Archived';
}

function TodoList() {
    const [newItemName, setNewItemName] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, itemName: 'Todo 1', dueDate: '20250421', status: 'Progress' },
        { id: 2, itemName: 'Todo 2', dueDate: '20250422', status: 'Not Started' },
        { id: 3, itemName: 'Todo 3', dueDate: '20250422', status: 'Done' },
        { id: 4, itemName: 'Todo 4', dueDate: '20250516', status: 'Archived' },
        { id: 5, itemName: 'Todo 5', dueDate: '20250423', status: 'Not Started' },
        { id: 6, itemName: 'Todo 6', dueDate: '20250424', status: 'Not Started' },
        { id: 7, itemName: 'Todo 7', dueDate: '20250425', status: 'Progress' },
        { id: 8, itemName: 'Todo 8', dueDate: '20250426', status: 'Done' },
        { id: 9, itemName: 'Todo 9', dueDate: '20250427', status: 'Archived' },
    ]);

    function handleStatusChange(id: number) {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, status: nextStatus(todo.status)}
                    : todo
            )
        );
    }

    function nextStatus(currentStatus: 'Not Started' | 'Progress' | 'Done' | 'Archived') {
        const order = ['Not Started', 'Progress', 'Done', 'Archived'];
        const nextIndex = (order.indexOf(currentStatus) + 1) % order.length;
        return order[nextIndex] as 'Not Started' | 'Progress' | 'Done' | 'Archived';
    }

    function handleDelete(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function handleAddTodo() {
        if (newItemName.trim() === '') return;
        const newTodo: Todo = {
          id: Date.now(),
          itemName: newItemName,
          dueDate: newDueDate.trim() !== '' ? newDueDate : 'No Due Date',
          status: 'Not Started',
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setNewItemName('');
        setNewDueDate('');
      }
    
      return (
        <div className="p-4 space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              className="border rounded px-2 py-1 flex-1"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Input New Todo..."
            />
            <input
              type="date"
              className="border rounded px-2 py-1"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 text-white rounded px-4 py-1 hover:bg-blue-600"
            >
              新增
            </button>
          </div>
    
          {/* 清單區域 */}
          <div>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onStatusChange={() => handleStatusChange(todo.id)}
                onDelete={() => handleDelete(todo.id)}
              />
            ))}
          </div>
        </div>
      );
    }

export default TodoList;
