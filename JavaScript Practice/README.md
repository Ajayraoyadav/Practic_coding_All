# JavaScript Interviews Question

### 1. What do you understand by JavaScript ?

=> JavaScript is a popular web scripting language is used for clint-side and server-side development.
=>The JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers while also supporting object-oriented programming abilities .

### 2. What is difference between JavaScript and Java ?

=>1.JavaScript is an object-oriented scripting language.
2.JavaScript application are meant to run inside a web browser. 3. JavaScript does not need compilation before running the application code .
=>1.Java is an object-oriented programming language.
2.Java applications are generally made for use in Operating Systems and Virtual Machines.
3.Java source code needs a compiler before it can be ready to run in realtime.

### 3. Who developed JavaScript, and what was the first name of JavaScript?

=> JavaScript was developed by Brendan Eich, who was a Netscape programmer. Brendan Eich developed this new scripting language in just ten days in the year September 1995. At the time of its launch, JavaScript was initially called Mocha. After that, it was called Live Script and later known as JavaScript.

### 4. List some of the advantages of JavaScript.

==> Some of the advantages of JavaScript are:

- Server interaction is less
- Feedback to the visitors is immediate
- Interactivity is high
- Interfaces are richer

### 5. List some of the disadvantages of JavaScript.

=> Some of the disadvantages of JavaScript are:

- No support for multithreading
- No support for multiprocessing
- Reading and writing of files is not allowed
- No support for networking applications.

### 6. Define a named function in JavaScript.

=> The function which has named at the time of definition is called a named function. For example

    function msg(){
     document.writeln("Named Function");
    }
    msg();

### 7. Name the types of functions.

=>The types of function are:

1.  Named - These type of functions contains name at the time of definition. For Example:

        function display() {
         console.log("Named Function");
        }
        display();

2.  Anonymous - These type of functions doesn't contain any name. They are declared dynamically at runtime.

         var display=function() {
         document.writeln("Anonymous Function");
        }
        display();

### 8. Define anonymous function

=> It is a function that has no name. These functions are declared dynamically at runtime using the function operator instead of the function declaration. The function operator is more flexible than a function declaration. It can be easily used in the place of an expression. For example:

    var display=function() {
     alert("Anonymous Function is invoked");
    }
    display();

### 9. In JavaScript what is an argument object?

The variables of JavaScript represent the arguments that are passed to a function.

### 10. Define closure.

In JavaScript, we need closures when a variable which is defined outside the scope in reference is accessed from some inner scope.

     var num = 10;
     function sum() {
     document.writeln(num+num);
     }
     sum();

### 11. What is BOM?

BOM stands for Browser Object Model. It provides interaction with the browser. The default object of a browser is a window. So, you can call all the functions of the window by specifying the window or directly. The window object provides various properties like document, history, screen, navigator, location, innerHeight, innerWidth,

![bom](https://user-images.githubusercontent.com/97391719/193571310-1730c5c2-e338-4ef6-9d8b-1d87f94e687f.jpg)

### 12. What is DOM? What is the use of document object?

    DOM stands for Document Object Model. A document object represents the HTML document. It can be used to access and change the content of HTML.

### 13. What are the different data types present in JavaScript?

There are two types of data types in JavaScript:

Primitive data types
Non- Primitive data types

###### Primitive data types

The primitive data types are as follows:
1.String: The string data type represents a sequence of characters. It is written within quotes and can be represented using a single or a double quote.
2.Number: The number data type is used to represent numeric values and can be written with or without decimals.
3.Boolean: The Boolean data type is used to represent a Boolean value, either false or true. This data type is generally used for conditional testing.
4.BigInt: The BigInt data type is used to store numbers beyond the Number data type limitation. This data type can store large integers and is represented by adding "n" to an integer literal.
5.Undefined: The Undefined data type is used when a variable is declared but not assigned. The value of this data type is undefined, and its type is also undefined.
6.Null: The Null data type is used to represent a non-existent, null, or a invalid value i.e. no value at all.
7.Symbol: Symbol is a new data type introduced in the ES6 version of JavaScript. It is used to store an anonymous and unique value.
8.typeof: The typeof operator is used to determine what type of data a variable or operand contains. It can be used with or without parentheses (typeof(x) or typeof x). This is mainly used in situations when you need to process the values of different types.

###### Non-Primitive data types

In the above examples, we can see that the primitive data types can store only a single value. To store multiple and complex values, we have to use non-primitive data types.

The non-primitive data types are as follows:
1.Object: The Object is a non-primitive data type. It is used to store collections of data. An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the value can be any data type, such as strings, numbers, Booleans, or complex data types like arrays, functions, and other objects.

Example:

    var obj1 = {
     x: 123,
     y: "Welcome to JavaTpoint",
     z: function(){
     return this.x;
     }
     }

2.Array: The Array data type is used to represent a group of similar values. Every value in an array has a numeric position, called its index, and it may contain data of any data type-numbers, strings, Booleans, functions, objects, and even other arrays. The array index starts from 0 so that the first array element is arr[0], not arr[1].

Example:

    var colors = ["Red", "Yellow", "Green", "Orange"];
    var cities = ["Noida", "Delhi", "Ghaziabad"];
    alert(colors[2]); // Output: Green
    alert(cities[1]); // Output: Delhi

### 14. What is the difference between == and ===?

The == operator checks equality only whereas === checks equality, and data type, i.e., a value must be of the same type.

### 15. Difference between Client side JavaScript and Server side JavaScript?

Client-side JavaScript comprises the basic language and predefined objects which are relevant to running JavaScript in a browser. The client-side JavaScript is embedded directly by in the HTML pages. The browser interprets this script at runtime.

Server-side JavaScript also resembles client-side JavaScript. It has a relevant JavaScript which is to run in a server. The server-side JavaScript are deployed only after compilation.

### 16. What's the difference between event.preventDefault() and event.stopPropagation() methods in JavaScript?

    In JavaScript, the event.preventDefault() method is used to prevent the default behavior of an element.

For example: If you use it in a form element, it prevents it from submitting. If used in an anchor element, it prevents it from navigating. If used in a contextmenu, it prevents it from showing or displaying.

On the other hand, the event.stopPropagation() method is used to stop the propagation of an event or stop the event from occurring in the bubbling or capturing phase.

### 17. What is the difference between undefined value and null value?

Undefined value: A value that is not defined and has no keyword is known as undefined value. For example:

    int number;//Here, a number has an undefined value.

Null value: A value that is explicitly specified by the keyword "null" is known as a null value. For example:

    String str=null;//Here, str has a null value.

### 18. What is the role of a strict mode in JavaScript?

The JavaScript strict mode is used to generates silent errors. It provides "use strict"; expression to enable the strict mode. This expression can only be placed as the first statement in a script or a function. For example:

    "use strict";
    x=10;
    console.log(x);

### 19. What do you understand by hoisting in JavaScript?

Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top. In simple words, we can say that Hoisting is a process in which, irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

### 20. What are the scopes of a variable in JavaScript?

The scope of a variable implies where the variable has been declared or defined in a JavaScript program. There are two scopes of a variable:

###### Global Scope

Global variables, having global scope are available everywhere in a JavaScript code.

###### Local Scope

Local variables are accessible only within a function in which they are defined.

### 21. What is the ‘this’ keyword in JavaScript?

The ‘this’ keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assign values to object properties.

### 22. What is Callback in JavaScript?

In JavaScript, functions are objects and therefore, functions can take other functions as arguments and can also be returned by other functions.

![callback](https://user-images.githubusercontent.com/97391719/193576642-f3084325-a927-4721-9b52-4754be698cb3.jpg)

A callback is a JavaScript function that is passed to another function as an argument or a parameter. This function is to be executed whenever the function that it is passed to gets executed.


