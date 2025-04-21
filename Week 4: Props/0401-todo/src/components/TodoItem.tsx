import DeleteButton from './DeleteButton.tsx'

function TodoItem(
	{ itemName='Unamed', dueDate='No Due Date' }:
	{ itemName?: string, dueDate?: string }
) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span className="text-gray-700">{itemName}</span>
      <span className="text-sm text-gray-500">Due: {dueDate}</span>
      <DeleteButton />
    </div>
  )
}

export default TodoItem