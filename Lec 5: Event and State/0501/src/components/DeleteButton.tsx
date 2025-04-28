function DeleteButton( {taskName="Unnamed"}: {taskName?: string} ) {
    function DeleteHandler(taskName: string) {
        alert('Delete ' + taskName);
    }
    return (
        <button 
            className="text-sm text-red-500 hover:underline" 
            onClick={() => {DeleteHandler(taskName)}}
        >
            Delete
        </button>
    )
}

export default DeleteButton