import DeleteButton from "./DeleteButton.tsx";
import StatusButton from "./StatusButton.tsx";

function Button( { onClick, children }: { onClick?: () => void, children: React.ReactNode }) {
    return (
        <button onClick={ e => {
            e.stopPropagation();
            if (onClick) onClick();
        }}>
            {children}
        </button>
    )
}

function TodoItem(
    { itemName="Unnamed", dueDate="No Due Date", defaultStatus="Not Started" }:
    { itemName?: string, dueDate?: string, defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    const contentJsx = (
        <div className="flex justify-between items-center p-4 border-b">
            <span className="text-gray-700">{itemName}</span>
            <span className="text-gray-500">{
                dueDate === "No Due Date" ? dueDate : `Due: ${dueDate}`
            }</span>
            <div className="flex items-center space-x-4 bg-gray-300 p-2" onClick={() => {
                alert('You are in the editing area');
            }}>
                <Button onClick={() => {
                    alert('Update ' + itemName + "'s status");
                }}>
                    <StatusButton defaultStatus={defaultStatus} />
                </Button>
                <Button>
                    <DeleteButton taskName={itemName}/>
                </Button>
            </div>
        </div>
    )
    return (
        defaultStatus === 'Done'? <div className='opacity-50 line-through'>{contentJsx}</div> : contentJsx
    )
}

export default TodoItem