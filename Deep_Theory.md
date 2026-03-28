

## Deep Theory

### 1)DOM Tree Structure :

The DOM (Document Object Model) represents an HTML document as a tree structure of nodes. Each element, attribute, and text in the HTML becomes a node in this tree.

- The document is the root of the DOM tree.
- HTML elements like `<html>`, `<head>`, and `<body>` become element nodes.
- Text inside elements becomes text nodes.
- Nodes are connected through parent, child, and sibling relationships.

This structure allows JavaScript to access, modify, add, or delete elements dynamically** in a webpage.

### 2)Reflow vs Repaint Performance Costs

Reflow (Layout) and Repaint are browser processes that happen when the DOM or CSS changes.

**Reflow**
- Reflow occurs when the browser recalculates the layout and position of elements** in the page.
- It happens when element size, structure, or position** changes.
- Examples: changing width/height, adding/removing elements, resizing the window.
- Performance Cost: Reflow is expensive because it may affect many elements in the layout.

**Repaint**
- Repaint happens when the appearance of an element changes but the layout remains the same.
- Examples: changing color, background, or visibility.
- Performance Cost: Repaint is cheaper than reflow because it only updates visual styles.

  ### 3)Event Bubbling, Capturing, Delegation Patterns

**Event Bubbling**
- Event bubbling means the event starts from the target element and moves upwards to its parent elements in the DOM.
- Example: clicking a button inside a div triggers the button event first, then the div event.

**Event Capturing**
- Event capturing is the opposite of bubbling.
- The event starts from the root (document) and travels down to the target element.
- It can be enabled by passing `true` in `addEventListener()`.

**Event Delegation**
- Event delegation is a pattern where a parent element handles events for its child elements.
- Instead of adding event listeners to many child elements, one listener is added to the parent.
- It works because of event bubbling.

### 4)Browser Rendering Pipeline

The browser rendering pipeline is the process the browser follows to convert HTML, CSS, and JavaScript into pixels on the screen.

**Steps in Rendering Pipeline**

1. **Parsing**
   - Browser parses HTML → DOM Tree
   - Browser parses CSS → CSSOM Tree

2. **Render Tree Creation**
   - DOM and CSSOM are combined to create the Render Tree.
   - Only visible elements are included.

3. **Layout (Reflow)**
   - Browser calculates the size and position of each element on the page.

4. **Paint (Repaint)**
   - Browser fills pixels with colors, text, borders, shadows, etc.

5. **Compositing**
   - Different layers are combined and displayed on the screen.

  ### 5)Virtual DOM vs Real DOM (Conceptual Intro to React)

**Real DOM**
- The Real DOM is the actual Document Object Model used by the browser to render web pages.
- Every change in the Real DOM can cause reflow and repaint, which may reduce performance.
- Updating many elements directly in the Real DOM is slow and costly.

**Virtual DOM**
- The Virtual DOM is a lightweight copy of the Real DOM used by React.
- When a change occurs, React first updates the Virtual DOM.
- React then compares the new Virtual DOM with the previous version (called diffing).

     

