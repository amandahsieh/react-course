function StatusButton(
    { status='Not Started' }:
    { status?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    const colorMap: Record<'Not Started' | 'Progress' | 'Done' | 'Archived', string> = {
        'Not Started': 'bg-gray-300 text-gray-700',
        'Progress': 'bg-indigo-300 text-blue-800',
        'Done': 'bg-lime-600 text-green-950',
        'Archived': 'bg-yellow-500 text-yellow-900',
    };
    // const statusOrder: Array<'Not Started' | 'Progress' | 'Done' | 'Archived'> = [
    //     'Not Started', 
    //     'Progress', 
    //     'Done', 
    //     'Archived'
    // ];
    // const [status, setStatus] = useState<'Not Started' | 'Progress' | 'Done' | 'Archived'>(defaultStatus) || 'Not Started';

    // const handleClick = () => {
    //     const currentIndex = statusOrder.indexOf(status);
    //       const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    //     setStatus(nextStatus);
    //     alert(`Status changed to: ${nextStatus}`);
    // };
  
  return (
    <button className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none ${colorMap[status]}`}>
      {status}
    </button>
  );
}

export default StatusButton;
