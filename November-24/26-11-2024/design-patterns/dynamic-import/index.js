//  By dynamically importing modules, you can load them only when needed, reducing the initial load time and improving performance. This can be particularly useful in scenarios where you want to conditionally load modules based on certain criteria or dynamically create objects based on user input or other factors.

import { createShape } from "./shapeFactory.js";

(async () => {
  const circle = await createShape("circle", 10);
  circle.draw();

  const rectangle = await createShape("rectangle", 20, 10);
  rectangle.draw();
})();

// Example 2 -- We can use React Suspense and fallback to show a loading indicator while the module is being loaded. The module will only load when it's needed, improving the overall performance of the application and reducing the bundle size.


// import React, { Suspense, lazy } from "react";
//   // import Send from "./icons/Send";
//   // import Emoji from "./icons/Emoji";
//   const Send = lazy(() =>
//     import(/*webpackChunkName: "send-icon" */ "./icons/Send")
//   );
//   const Emoji = lazy(() =>
//     import(/*webpackChunkName: "emoji-icon" */ "./icons/Emoji")
//   );
//   // Lazy load EmojiPicker  when <EmojiPicker /> renders
//   const Picker = lazy(() =>
//     import(/*webpackChunkName: "emoji-picker" */ "./EmojiPicker")
//   );

//   const ChatInput = () => {
//     const [pickerOpen, togglePicker] = React.useReducer(state => !state, false);

//     return (
//       <Suspense fallback={<p id="loading">Loading...</p>}>
//         <div className="chat-input-container">
//           <input type="text" placeholder="Type a message..." />
//           <Emoji onClick={togglePicker} />
//           {pickerOpen && <Picker />}
//           <Send />
//         </div>
//       </Suspense>
//     );
//   };

//   console.log("ChatInput loaded", Date.now());

//   export default ChatInput;