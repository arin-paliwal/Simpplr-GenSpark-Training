// The Hooks pattern in React refers to the usage of React hooks to encapsulate and reuse logic across different components. The pattern leverages custom hooks to encapsulate reusable logic that can be shared across different parts of the application.

// Before hooks, React developers often relied on higher-order components (HOCs) or render props for code reuse, but custom hooks provide a simpler and cleaner way to share logic without adding complexity.

// Key Characteristics of the Hooks Pattern:
// Encapsulation: Custom hooks allow you to encapsulate and abstract logic, making your components cleaner and more readable.
// Reusability: Custom hooks can be reused across components to share behavior such as data fetching, form handling, or managing side effects.
// Separation of Concerns: Custom hooks allow you to separate the business logic from UI logic.
// Cleaner Components: Custom hooks help reduce boilerplate code in components, making them easier to maintain and test.


import { useState, useEffect } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: T = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
