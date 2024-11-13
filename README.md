
# snaker.js
Visualize connections between elements with lines.
 ---
The `snaker.js` module allows you to create connections in the form of lines between blocks on a webpage. The lines can be drawn either using `canvas` or `SVG`, providing flexibility and performance depending on your project requirements. The lines automatically adjust to the position and size of the blocks they connect.
#### Key Features:
1.  **Initialization of Container and Blocks**:
- The module accepts a CSS selector to locate the container that holds the blocks.
- It then reads all child elements as blocks, between which lines will be drawn.
2.  **Options**:
-  `strokeStyle`: The color of the line (default is `#ccc`).
-  `lineWidth`: The width of the line (default is `2`).
-  `rounded`: The curvature radius for line corners (default is `0`).
3.  **Line Drawing**:
- Lines are drawn between blocks, and they can either be straight or have rounded corners, depending on the settings.
- If blocks are aligned horizontally or vertically, straight lines are drawn.
- If blocks are at different heights or widths, curved lines are drawn with rounded corners for a smooth bend.
4.  **Drawing Modules**:
-  **Canvas**: The original solution uses the `<canvas>` element to quickly draw lines in a 2D context.
-  **SVG**: Added support for drawing lines using SVG, which allows for direct manipulation of lines in the DOM, making it easier to animate or style them.
5.  **Automatic Updates**:
- Whenever the page size changes (e.g., on container resize), the lines automatically adjust to the new size, ensuring the connections are properly displayed.
#### Parameters and Usage:
```javascript
const snaker =  new Snaker('.container', {
	strokeStyle: '#ff0000', // Line color
	lineWidth: 3, // Line width
	rounded: 10, // Line corner rounding
});
```
If you would like to add automatic updates, use this code:
```javascript
window.addEventListener("resize", () =>  {
	snaker.flow();
});
```