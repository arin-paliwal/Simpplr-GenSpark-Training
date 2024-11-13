import { useEffect, useReducer, useState } from "react";
import InspirationalQuote from "./InspirationalQuote";
import { QuoteInterface } from "../types";
import Quotes from "./Quote";

export const fetchRandomQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`https://dummyjson.com/quotes?limit=${count}`);
  return response.json();
};

type Action =
  | { type: "SET_COUNT"; payload: number }
  | { type: "SET_QUOTES"; payload: QuoteInterface[] }
  | { type: "SET_LOADING"; payload: boolean };

type State = {
  count: number;
  quotes: QuoteInterface[];
  isLoading: boolean;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "SET_QUOTES":
      return { ...state, quotes: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  count: 10,
  quotes: [],
  isLoading: true,
};

const Wrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadQuotes = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const fetchedQuotes = await fetchQuotes(state.count);
      dispatch({ type: "SET_QUOTES", payload: fetchedQuotes.quotes });
      dispatch({ type: "SET_LOADING", payload: false });
    };
    loadQuotes();
  }, [state.count]);

  return (
    <main className="flex w-full py-16">
      {state.isLoading ? (
        <Loader />
      ) : (
        <Quotes quotes={state.quotes} count={state.count} dispatch={dispatch}>
          {state.quotes.map((quote) => (
            <InspirationalQuote
              key={quote.id}
              id={quote.id}
              quote={quote.quote}
              author={quote.author}
            />
          ))}
        </Quotes>
      )}
    </main>
  );
};

export default Wrapper;

const Loader = () => (
  <div className="flex justify-center items-center h-64 w-full">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
  </div>
);
