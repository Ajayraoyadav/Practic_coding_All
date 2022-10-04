# React Interview Questions

### 1. Explain what React is?

React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.

### 2. Explain what is JSX? 

What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

### 3. Explain what props are?

Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.

### 4. Explain what is state?

What Is 'State' in ReactJS? The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

### 5. Explain how the state gets updated in react?

State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

### 6. What is declarative?

With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps. React is declarative because we write the code that we want and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

### 7. What are Components? What are elements?

In React, this is where the elements come to rescue. An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button ), its properties (for example, its color ), and any child elements inside it.

### 8. How can you handle events in React?

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.

### what is the difference between Props and State? explore (https://reactjs.org/)

### Explain the useState API? explore (https://reactjs.org/)

### Explain the how map, filter, reduce work (https://reactjs.org/)

### Embedding map() in JSX
In the examples above we declared a separate listItems variable and included it in JSX:

     function NumberList(props) {
       const numbers = props.numbers;
       const listItems = numbers.map((number) =>
         <ListItem key={number.toString()}
                   value={number} />
       );
       return (
         <ul>
           {listItems}
         </ul>
       );
     }
JSX allows embedding any expression in curly braces so we could inline the map() result:

    function NumberList(props) {
      const numbers = props.numbers;
      return (
        <ul>
          {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
          )}
        </ul>
      );
    }
