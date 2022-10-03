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

1. Named - These type of functions contains name at the time of definition. For Example:
   function display() {  
    console.log("Named Function");  
   }  
   display();

2. Anonymous - These type of functions doesn't contain any name. They are declared dynamically at runtime.
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

