'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Undo2, RotateCcw } from 'lucide-react';

type CounterProps = {
  InitialCounter: number;
  greeting?: string;
};

export default function Component({ InitialCounter = 0 }: CounterProps) {
  const [count, setCount] = useState(InitialCounter);
  const [draftCounter, setDraftCounter] = useState<number>(count);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setDraftCounter(count);
  }, [count]);

  const updateCount = (newCount: number) => {
    setHistory((prev) => [...prev, count]); // It will create a copy of the previous history and add the current count to it
    setCount(newCount);
  };

  // this function is responsible for undoing the operation
  const undoHandler = () => {
    if (history.length > 0) {
      const lastCount = history.pop();
      setHistory([...history]); // It will create a copy of the history without the last element
      if (lastCount !== undefined) setCount(lastCount);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateCount(draftCounter);
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Days Since Last Accident
        </h1>
        <div className="mb-8 text-center text-8xl font-bold text-indigo-600">
          {count}
        </div>
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => updateCount(count - 1)}
            className="rounded-full bg-indigo-500 p-3 text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => updateCount(InitialCounter)}
            className="rounded-full bg-gray-500 p-3 text-white transition-colors duration-200 hover:bg-gray-600"
          >
            <RotateCcw size={24} />
          </button>
          <button
            onClick={() => updateCount(count + 1)}
            className="rounded-full bg-indigo-500 p-3 text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        <form onSubmit={onSubmit} className="mb-6 flex items-center">
          <input
            type="number"
            value={draftCounter}
            onChange={(e) => setDraftCounter(e.target.valueAsNumber)}
            className="flex-grow rounded-l-lg bg-gray-100 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="rounded-r-lg bg-indigo-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            Update
          </button>
        </form>
        <button
          onClick={undoHandler}
          className={`flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-gray-800 transition-colors duration-200 hover:bg-gray-300
              ${history.length === 0 &&
            'pointer-events-none cursor-not-allowed opacity-50'
            }
              `}
        >
          <Undo2 size={18} className="mr-2" />
          Undo Last Action
        </button>
      </div>
    </div>
  );
}
