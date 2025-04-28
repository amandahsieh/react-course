import { useState } from 'react'
export default function Nav() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index => index + 1);
        setIndex(index => index + 1);
        setIndex(7);
        setIndex(index => index + 1);
    }
    return (
        <div className="flex items-center p-4">
            <h3 className="p-4">{index}</h3>
            <button className="border bg-gray-300 rounded p-2" onClick={handleClick}>
                Increase
            </button>
        </div>
    )
}