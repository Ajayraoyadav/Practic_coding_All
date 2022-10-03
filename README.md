# Mix Interview Questions

### 1. Explain briefly what happens when you hit a url? explain DNS lookup  

After hitting the URL, the browser cache is checked. As browser maintains its DNS records for some amount of time for the websites you have visited earlier. Hence, firstly, DNS query runs here to find the IP address associated with the domain name.

### 2. What is a URLs full form? Explain what a url is and the four parts  

(Uniform Resource Locator)
Protocol
The protocol or scheme of a URL indicates the method that will be used for transmitting or exchanging data. The most familiar scheme is the Hypertext Transfer Protocol (HTTP) or Hypertext Transfer Protocol Secure (HTTPS) for the transmission of HTML files. FTP (for files) and Mailto (for mails) are examples of other types of schemes.
In the example URL above, https:// is the URL's secure protocol.
Domain
The domain or hostname of a URL is a user-friendly expression of the Internet Protocol (IP) address of a website. It points to the location of the website's host server.
In the example above, the domain is www.example.com.
Path
The path that follows the domain name inside a URL points to a specific file or other resource location. It can also include a query string.
In our example URL, /category-A/subcategory-A1/model-123.html shows the path of the URL, which in this example, ends in a product page.
Query
The query string, also known as a fragment identifier, is frequently used for internal searches and is commonly preceded by a question mark (?).
For example:
https://www.example.com/category-A/subcategory-A1?searchTerm=Model+123
This URL is the result of a user entering the search term “Model 123” on the subcategory A1 page. The landing page in this example is either the product page of model 123 or a list of search results that contain the term “Model 123”.

### 3. What is HTTP protocol? What is TCP Protocol?

HTTP is a Hypertext Transfer Protocol, whereas TCP full form is Transmission Control Protocol. HTTP is utilized to access websites, while TCP is a session establishment protocol between client and server. HTTP uses port 80 and TCP uses no port. HTTP doesn't need authentication, whereas, TCP uses the TCP-AO.

### 4. What are HTTP headers?  

An HTTP header is a field of an HTTP request or response that passes additional context and metadata about the request or response. For example, a request message can use headers to indicate it's preferred media formats, while a response can use header to indicate the media format of the returned body.

### 5. What are some HTTP response codes? what does it mean  

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: Informational responses , Successful responses , Redirection messages

### 6. What does cache control on http response mean?  

Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it's cached and its maximum age before expiring

### 7. What is polling? What is long polling?  

Long polling is a method that server applications use to hold a client connection until information becomes available.
Polling is the process where the computer or controlling device waits for an external device to check for its readiness or state, often with low-level hardware.

### 8. What are websockets?

A WebSocket is a persistent connection between a client and server. WebSockets provide a bidirectional, full-duplex communications channel that operates over HTTP through a single TCP/IP socket connection. At its core, the WebSocket protocol facilitates message passing between a client and server.

### 9. How is web sockets different from HTTP?

Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available. WebSockets keeps a single, persistent connection open while eliminating latency problems that arise with HTTP request/response-based methods.

### 10. What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### 11. What does Access-Control-Allow-Origin header do?  What is the Access-Control-Allow-Origin response header?

The Access-Control-Allow-Origin header is included in the response from one website to a request originating from another website, and identifies the permitted origin of the request.

### 12. What is clickjacking? How do you fix it?  

Clickjacking is an attack that fools users into thinking they are clicking on one thing when they are actually clicking on another. Its other name, user interface (UI) redressing, better describes what is going on.

A better approach to prevent clickjacking attacks is to ask the browser to block any attempt to load your website within an iframe. You can do it by sending the X-Frame-Options HTTP header.

### 13. What are some performance metrics for your website?  

- Page Speed. Page speed is one of the most important metrics to be aware of, and it can have a far greater impact than you may even realize. ...
- Time to Title. ...
- Time to Start Render. ...
- Time to Interact. ...
- DNS Lookup Speed. ...
- Bounce Rate. ...
- Requests Per Second. ...
- Error Rate.

### 14. What do CDN or Content Delivery Networks do? When do you need a  CDN?

A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

### 15. What is the difference between Client Side Renderring and Server Side  Renderring?  

Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route. But server-side rendering is able to display a fully populated page on the first load for any route of the website, whereas client-side rendering displays a blank page first.

### 16. What is the difference between Preloading and Prefetching resources?  

Preload is an early fetch instruction to the browser to request a resource needed for a page (key scripts, Web Fonts, hero images). Prefetch serves a slightly different use case — a future navigation by the user (e.g between views or pages) where fetched resources and requests need to persist across navigations.

### 17. What is Progressive Rendering  

“Progressive Server-Side Rendering — the key to a faster web page is the technique of sequentially rendering parts of the web page on the server-side and send it to the client in portions without waiting for the entire page to be rendered.

### 18. What are service workers?

Service Worker is a script that works on browser background without user interaction independently. Also, It resembles a proxy that works on the user side. With this script, you can track network traffic of the page, manage push notifications and develop “offline first” web applications with Cache API

### 19. What is the difference between flex and grids?  

Grid and flexbox. The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.

### 20. Give an example where we have to use grids and where you have to use  flexbox?  

If you are using flexbox and find yourself disabling some of the flexibility, you probably need to use CSS Grid Layout. An example would be if you are setting a percentage width on a flex item to make it line up with other items in a row above. In that case, a grid is likely to be a better choice.

### 21. What does @media do?

The @media rule is used in media queries to apply different styles for different media types/devices. Media queries can be used to check many things, such as: width and height of the viewport. width and height of the device.

### 22. What are the differences between relative and absolute in CSS?  

Relative - the element is positioned relative to its normal position. Absolute - the element is positioned absolutely to its first positioned parent. Fixed - the element is positioned related to the browser window.

### 23. What is scoping?

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block.

### 24. What are closures? Few Common Uses for closures :

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

### 25. Explain promises to a 5 year old, with simple examples

Just answer a simple, 'Yes, I will,' or 'No, I won't. ' Anything beyond this is from the evil one.” Letting your “yes” mean “yes”, and your “no” mean “no” is different from making a promise to me. Making promises are vows or pledges to take action about something and ensure it happens.

### 26. What is currying?  Currying is an advanced technique of working with functions. It's used not only in JavaScript, but in other languages as well.

Currying is helpful when you have to frequently call a function with a fixed argument. Considering, for example, the following function: If we want to define the function error , warn , and info , for every type, we have two options. Currying provides a shorter, concise, and more readable solution.

### 27. What are classes? what are getters and setters?  

In object-oriented programming , a class is a template definition of the method s and variable s in a particular kind of object . Thus, an object is a specific instance of a class; it contains real values instead of variables. The class is one of the defining ideas of object-oriented programming.
Getters and setters are used to protect your data, particularly when creating classes. For each instance variable, a getter method returns its value while a setter method sets or updates its value. Given this, getters and setters are also known as accessors and mutators, respectively

### 28. Explain event delegation  

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object.

### 29. What is a closure, and how/why would you use one?  

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

### 30. What's the difference between feature detection, feature inference, and  using the UA string?  

Feature Detection Feature detection is just a way of determining if a feature exists in certain browsers. A good example is a modern HTML5 feature ‘Location’.

Feature Inference
Feature Inference is when you have determined a feature exists and assumed the next web technology feature you are implementing unto your app exists as well. Its usually bad practice to assume, so its better to explicitly specify features you want to detect and plan a fallback action.

UA String
UA String or User Agent String is a string text of data that each browsers send and can be access via navigator.userAgent. These “string text of data” contains information of the browser environment you are targeting.
If you open your console and run

### 31. Explain Ajax in as much detail as possible. What are the advantages and  disadvantages of using Ajax?  

AJAX is improve the speed and performance. Fetching data from database and storing data into database perform background without reloading page. AJAX Disadvantages 1. AJAX application would be a mistake because search engines would not be able to index an AJAX application.

### 32. What are the pros and cons of using Promises instead of callbacks?  • Better defined and organized control flow of asynchronous logic.

- Highly reduced coupling.
- We have integrated error handling.
- Enhanced readability.

### 33. What tools and techniques do you use for debugging JavaScript code?

Developer tools in modern web browsers. Every modern browser has tools available within it to debug code. ...
The hackable debug tool — debugger. ...
Node. ...
Postman for debugging requests and responses. ...
ESLint. ...
JS Bin. ...
JSON Formatter and Validator. ...
Webpack.

### 34. What are the pros and cons of immutability?  

Some of the key benefits of immutable objects are:

- Thread safety.
- Atomicity of failure.
- Absence of hidden side-effects.
- Protection against null reference errors.
- Ease of caching.
- Prevention of identity mutation.
- Avoidance of temporal coupling between methods.
- Support for referential transparency.

### 35. Explain the difference between synchronous and asynchronous functions.  

In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.

### 36. What is event loop? What is the difference between call stack and task  queue?

Event Loop has pretty specific work. It has responsibility to see weather the call-stack is empty and does the task queue contains pending task to process. If the call-stack is empty, it will push the task to the call-stack from the queue and the task gets processed.

### 37. Explain Long Polling.  

HTTP Long Polling is a technique used to push information to a client as soon as possible on the server. As a result, the server does not have to wait for the client to send a request. In Long Polling, the server does not close the connection once it receives a request from the client.

### 38. Explain the benefits and drawbacks of using "use strict".  what are the advantages and disadvantages to using it?

If you put "use strict"; at the top of your code (or function), then the JS is evaluated in strict mode. Strict mode throws more errors and disables some features in an effort to make your code more robust, readable, and accurate.

### 39. What are some of the uses of Docker?  

Docker is an open source containerization platform. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.
8 Proven Real-World Ways to Use Docker

- Simplifying Configuration.
- Code Pipeline Management.
- Developer Productivity.
- App Isolation.
- Server Consolidation.
- Debugging Capabilities.
- Multi-tenancy.
- Rapid Deployment.

### 40. Is there a way to decrease the load time of a web application?  

Caching is one of the most effective ways to speed up your web pages. Caching stores copies of your site's files, minimizing the work needed for the server to generate and serve a web page to a visitor's browser.

### 41. State difference between normalization and denormalization.  

Normalization is used to remove redundant data from the database and to store non-redundant and consistent data into it. Denormalization is used to combine multiple table data into one so that it can be queried quickly.

### 42. Explain the Restful API and write its usage.  

A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.

### 43. What is event bubbling and capturing in JavaScript?  

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

### 44. In the past, what was the best implementation or debugging you did?

Best practices for debugging

- Reproduce the problem. Ideally reduce the input as much as possible.
- Examine what goes wrong and list theories for where the bug may be.
- Examine one theory at a time by debugging that specific area of the code.
