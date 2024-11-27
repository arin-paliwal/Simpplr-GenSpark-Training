// The Higher-Order Component (HOC) is a design pattern in React that allows you to reuse component logic. An HOC is a function that takes a component and returns a new component with additional props or behavior.

// HOCs don’t modify the original component directly. Instead, they wrap it, enhancing or augmenting its functionality without changing its core behavior.

import React, { useState, useEffect } from "react";

const withLoading = <T extends object>(Component: React.ComponentType<T>) => {
  return (props: T) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
};

export default withLoading;
