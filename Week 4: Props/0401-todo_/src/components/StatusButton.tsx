function StatusButton(
    { defaultStatus = 'Not Started' }:
    { defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    const color = 
        defaultStatus === 'Not Started' ? 'bg-gray-300 text-gray-700' :
            defaultStatus === 'Progress' ? 'bg-indigo-300 text-blue-800' :
                defaultStatus === 'Done' ? 'bg-lime-600 text-green-950' :
                    defaultStatus === 'Archived' ? 'bg-yellow-500 text-yellow-900' : '';
    return (
        <button className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none ${color}`}>
            {defaultStatus}
        </button>
    );
}

export default StatusButton