import DeleteButton from './DeleteButton.tsx'
import StatusButton from './StatusButton.tsx'

function TodoItem(
  {itemName='Unamed', dueDate='No Due Date', defaultStatus='not started'}: 
  {itemName?: string, dueDate?: string, defaultStatus?: 'not started' | 'process' | 'done' | 'archived'}
) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span className="text-gray-700">{itemName}</span>
      <span className="text-sm text-gray-500">Due: {dueDate}</span>
      <div className="flex space-x-2 items-center">
        <StatusButton defaultStatus={defaultStatus}/>
        <DeleteButton />
      </div>
    </div>
  )
}

export default TodoItem