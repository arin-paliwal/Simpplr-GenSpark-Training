import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { Quote, fetchQuotes } from "./Application";

type QuotesPropTypes = {
  quotes: Quote[];
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
  //   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

const Quotes = ({
  children,
  setQuotes,
}: PropsWithChildren<QuotesPropTypes>) => {
  const [count, setCount] = useState(10);

  return (
    <section className="flex flex-col gap-8 p-6 bg-gray-50 rounded-lg shadow-md max-w-6xl mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchQuotes(count).then((data) => setQuotes(data.quotes));
        }}
        className="space-y-6"
      >
        <label
          htmlFor="number-of-quotes-to-load"
          className="block text-lg font-medium text-gray-700"
        >
          Number of Quotes to Load
        </label>
        <div className="flex items-center gap-4">
          <input
            id="number-of-quotes-to-load"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button
            type="submit"
            className="px-6 py-3 flex w-[20rem] justify-center bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Load Quotes
          </button>
        </div>
      </form>
      <div className="grid gap-8 grid-cols-2">
        {children}
      </div>
    </section>
  );
};

export default Quotes;
