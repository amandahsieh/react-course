function StatusButton(
    { defaultStatus='Not Started' }:
    { defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    const colorMap: Record<'Not Started' | 'Progress' | 'Done' | 'Archived', string> = {
        'Not Started': 'bg-gray-200 text-gray-700',
        'Progress': 'bg-indigo-300 text-blue-800',
        'Done': 'bg-green-200 text-green-950',
        'Archived': 'bg-yellow-500 text-yellow-900',
    };
    const colorClass = colorMap[defaultStatus] ?? 'bg-gray-200 text-gray-700';

    return (
        <button className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none ${colorClass}`}>
            {defaultStatus}
        </button>
    )
}
export default StatusButton