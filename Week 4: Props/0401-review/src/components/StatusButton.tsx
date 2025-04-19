function StatusButton(
    { defaultStatus = 'Not Started' }:
    { defaultStatus?: 'Not Started' | 'Progress' | 'Done' | 'Archived' | undefined }
) {
    return (
        <button className={`text-sm border w-28 rounded px-2 py-1 focus:outline-none`}>
            {defaultStatus}
        </button>
    );
}

export default StatusButton