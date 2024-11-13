'use client';

import { useReducer } from 'react';
import { ArrowLeft, ArrowRight, Undo2, RotateCcw } from 'lucide-react';

type CounterProps = {
  InitialCounter: number;
  greeting?: string;
};

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET', payload: number }
  | { type: 'UPDATE_COUNT', payload: number }
  | { type: 'UNDO' };

type State = {
  count: number;
  draftCounter: number;
  history: number[];
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        history: [...state.history, state.count],
        count: state.count + 1,
        draftCounter: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        history: [...state.history, state.count],
        count: state.count - 1,
        draftCounter: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        history: [...state.history, state.count],
        count: action.payload,
        draftCounter: action.payload,
      };
    case 'UPDATE_COUNT':
      return {
        ...state,
        history: [...state.history, state.count],
        count: action.payload,
        draftCounter: action.payload,
      };
    case 'UNDO':
      if (state.history.length === 0) return state;
      const lastCount = state.history[state.history.length - 1];
      return {
        ...state,
        count: lastCount,
        draftCounter: lastCount,
        history: state.history.slice(0, -1),
      };
    default:
      return state;
  }
}

export default function Counter({ InitialCounter = 0 }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: InitialCounter,
    draftCounter: InitialCounter,
    history: [],
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE_COUNT', payload: state.draftCounter });
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Days Since Last Accident
        </h1>
        <div className="mb-8 text-center text-8xl font-bold text-indigo-600">
          {state.count}
        </div>
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="rounded-full bg-indigo-500 p-3 text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => dispatch({ type: 'RESET', payload: InitialCounter })}
            className="rounded-full bg-gray-500 p-3 text-white transition-colors duration-200 hover:bg-gray-600"
          >
            <RotateCcw size={24} />
          </button>
          <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="rounded-full bg-indigo-500 p-3 text-white transition-colors duration-200 hover:bg-indigo-600"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        <form onSubmit={onSubmit} className="mb-6 flex items-center">
          <input
            type="number"
            value={state.draftCounter}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_COUNT', payload: e.target.valueAsNumber })
            }
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
          onClick={() => dispatch({ type: 'UNDO' })}
          className={`flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-gray-800 transition-colors duration-200 hover:bg-gray-300
            ${state.history.length === 0 &&
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
