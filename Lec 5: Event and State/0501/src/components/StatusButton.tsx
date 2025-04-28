function StatusButton(
    { defaultStatus='Not Started' }:
    { defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    const colorMap: Record<'Not Started' | 'Progress' | 'Done' | 'Archived', string> = {
        'Not Started': 'bg-gray-300 text-gray-700',
        'Progress': 'bg-indigo-300 text-blue-800',
        'Done': 'bg-lime-600 text-green-950',
        'Archived': 'bg-yellow-500 text-yellow-900',
    };

    const handleClick = (event: React.MouseEvent) => {
        const button = event.currentTarget;
        const currentStatus = button.textContent as 'Not Started' | 'Progress' | 'Done' | 'Archived';
        const statusMap: Map<'Not Started' | 'Progress' | 'Done' | 'Archived', 'Not Started' | 'Progress' | 'Done' | 'Archived'> = new Map([
        ['Not Started', 'Progress'],
        ['Progress', 'Done'],
        ['Done', 'Archived'],
        ['Archived', 'Not Started']
        ]);
        const nextStatus = statusMap.get(currentStatus) || 'Not Started';
        button.textContent = nextStatus;
        button.className = `text-sm border w-28 rounded px-2 py-1 focus:outline-none ${colorMap[nextStatus]}`;
    };
    
    return (
        <button
        onClick={handleClick}
        className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none ${colorMap[defaultStatus]}`}
        >
        {defaultStatus}
        </button>
    );
}

export default StatusButton;