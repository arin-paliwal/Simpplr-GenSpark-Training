// Static imports in JavaScript allow you to directly import functions, constants, or other members from a module. These imports can then be used without referencing the module's name, mimicking the behavior of "static imports."

import { PI, calculateArea, calculatePerimeter } from './mathUtils.js';

// Directly using imported members without qualifying them
console.log(`PI: ${PI}`);
console.log(`Area of circle: ${calculateArea(10)}`);
console.log(`Perimeter of circle: ${calculatePerimeter(10)}`);
