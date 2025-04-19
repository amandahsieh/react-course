function StatusButton() {
    return (
        <select
          className="text-sm border rounded px-2 py-1 text-gray-600 focus:outline-none"
          defaultValue="not started"
        >
          <option value="not started">Not Started</option>
          <option value="process">In Process</option>
          <option value="done">Done</option>
          <option value="archived">Archived</option>
        </select>
    )
}

export default StatusButton