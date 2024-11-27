// The Render Props pattern in React is a design pattern that allows a component to share its state or behavior with other components by passing a function as a prop. This function (render prop) allows the receiving component to render UI based on the state or behavior provided by the parent.

import React, { useState, useEffect } from "react";

interface MouseTrackerProps {
  render: (mousePosition: { x: number; y: number }) => JSX.Element;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return render(mousePosition);
};

export default MouseTracker;
