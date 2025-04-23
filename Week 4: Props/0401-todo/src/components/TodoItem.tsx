import DeleteButton from './DeleteButton.tsx'
import StatusButton from './StatusButton.tsx'

function TodoItem( 
    { itemName='Unamed', dueDate='No Due Date', defaultStatus='Not Started' }:
    { itemName?: string, dueDate?: string, defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
){
    const contentJsx = (
        <div className="flex justify-between items-center p-4 border-b">
            <span className="text-gray-700">{itemName}</span>
            <span className="text-gray-500 text-sm">{
                dueDate === 'No Due Date' ? dueDate : `Due: ${dueDate}`}
            </span>
            <div className='flex items-center space-x-4'>
                <StatusButton defaultStatus={defaultStatus}/>
                <DeleteButton />
            </div>
        </div>
    )
    return (
        defaultStatus === 'Done'? <div className='opacity-50 line-through'>{contentJsx}</div> : contentJsx
    )
}

export default TodoItem