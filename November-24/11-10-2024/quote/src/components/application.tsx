/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Quotes from "./Quote";
import InspirationalQuote from "./InspirationalQuote";

export type Quote = {
  id: number;
  quote: string;
  author?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`https://dummyjson.com/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [count, setCount] = useState(10);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuotes = async () => {
      setIsLoading(true);
      const fetchedQuotes = await fetchQuotes(count);
      setQuotes(fetchedQuotes.quotes);
      setIsLoading(false);
    };
    loadQuotes();
  }, [count]);

  return (
    <main className="flex w-full py-16">
      {isLoading ? (
        <Loader />
      ) : (
        <Quotes quotes={quotes} setQuotes={setQuotes}>
          {quotes.map((quote) => (
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

export default Application;



const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64 w-full">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
    </div>
  );
};
