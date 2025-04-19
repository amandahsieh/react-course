import DeleteButton from './DeleteButton.tsx'

function TodoItem({itemName='Unamed Todo Item'}) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span className="text-gray-700">{itemName}</span>
      <DeleteButton />
    </div>
  )
}

export default TodoItem