import { useState } from 'react'

function Module() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Module</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count in module is {count}
        </button>
      </div>
    </>
  )
}

export default Module
