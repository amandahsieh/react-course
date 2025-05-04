import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface CounterProps {
  count: number;
  text: string;
}
const Counter: React.FC<CounterProps> = ({ count, text }) => {
  console.log(`${text} Counter is rendering`);
  return <h1>{text} Count: {count}</h1>;
};

const MemoizedCounter = memo(Counter);

function Parent() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
      <Counter count={count} text="default" /> {/* 每次 Parent 更新都會 re-render */}
      <MemoizedCounter count={count} text="memoized" /> {/* 記憶化，只有 count 變時才會 re-render */}
    </div>
  );
}

function App() {
  const [count2, setCount2] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React 17</h1>
      <Parent />
      
      <div className="card">
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          Another Count is {count2}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
