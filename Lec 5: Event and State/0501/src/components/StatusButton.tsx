function StatusButton(
    { status }: { status: 'Not Started' | 'Progress' | 'Done' | 'Archived' }
  ) {
    const colorMap: Record<'Not Started' | 'Progress' | 'Done' | 'Archived', string> = {
      'Not Started': 'bg-gray-300 text-gray-700',
      'Progress': 'bg-indigo-300 text-blue-800',
      'Done': 'bg-lime-600 text-green-950',
      'Archived': 'bg-yellow-500 text-yellow-900',
    };
  
    return (
      <button
        className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none ${colorMap[status]}`}
      >
        {status}
      </button>
    );
  }
  
  export default StatusButton;
  