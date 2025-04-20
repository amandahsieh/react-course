import DeleteButton from './DeleteButton.tsx'

function TodoItem() {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span className="text-gray-700">待辦事項</span>
      <DeleteButton />
    </div>
  )
}

export default TodoItem