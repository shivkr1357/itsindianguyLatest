export const interviewQA = [
  {
    id: "1",
    slug: "react",
    data: [
      {
        que: "What is React?",
        ans: "React is a JavaScript library for building user interfaces.",
      },
      {
        que: "What are the features of React?",
        ans: "The main features of React are Virtual DOM, JSX, Components, and Unidirectional data flow.",
      },
      {
        que: "What is JSX?",
        ans: "JSX is a syntax extension for JavaScript that allows you to write HTML directly within React.",
      },
      {
        que: "What is the Virtual DOM?",
        ans: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates and improve performance.",
      },
      {
        que: "What are React components?",
        ans: "Components are the building blocks of a React application, each representing a part of the user interface.",
      },
      {
        que: "What is the difference between state and props?",
        ans: "State is managed within the component, while props are passed to the component from its parent.",
      },
      {
        que: "What is a functional component?",
        ans: "A functional component is a JavaScript function that returns a React element.",
      },
      {
        que: "What is a class component?",
        ans: "A class component is a JavaScript class that extends React.Component and has a render method.",
      },
      {
        que: "What are hooks in React?",
        ans: "Hooks are functions that let you use state and other React features in functional components.",
      },
      {
        que: "What is the useEffect hook?",
        ans: "The useEffect hook allows you to perform side effects in function components, such as fetching data or directly manipulating the DOM.",
      },
      {
        que: "What is the useState hook?",
        ans: "The useState hook allows you to add state to functional components.",
      },
      {
        que: "What is the useContext hook?",
        ans: "The useContext hook allows you to use the React context API in functional components.",
      },
      {
        que: "What is the useReducer hook?",
        ans: "The useReducer hook is an alternative to useState for managing more complex state logic.",
      },
      {
        que: "What is the useRef hook?",
        ans: "The useRef hook allows you to create a mutable object that persists for the lifetime of the component.",
      },
      {
        que: "What is the useMemo hook?",
        ans: "The useMemo hook allows you to memoize expensive calculations to optimize performance.",
      },
      {
        que: "What is the useCallback hook?",
        ans: "The useCallback hook returns a memoized callback function that only changes if one of the dependencies has changed.",
      },
      {
        que: "What is the useLayoutEffect hook?",
        ans: "The useLayoutEffect hook is similar to useEffect but is fired synchronously after all DOM mutations.",
      },
      {
        que: "What is the useImperativeHandle hook?",
        ans: "The useImperativeHandle hook customizes the instance value that is exposed when using ref in functional components.",
      },
      {
        que: "What is the difference between controlled and uncontrolled components?",
        ans: "Controlled components have their state controlled by React, while uncontrolled components manage their own state internally.",
      },
      {
        que: "What are higher-order components (HOC)?",
        ans: "Higher-order components are functions that take a component and return a new component with added functionality.",
      },
      {
        que: "What is context in React?",
        ans: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
      },
      {
        que: "What is the React lifecycle?",
        ans: "The React lifecycle consists of methods that are invoked at different stages of a component's existence, such as mounting, updating, and unmounting.",
      },
      {
        que: "What are React fragments?",
        ans: "React fragments let you group a list of children without adding extra nodes to the DOM.",
      },
      {
        que: "What is prop drilling?",
        ans: "Prop drilling refers to the process of passing props down multiple levels of a component tree.",
      },
      {
        que: "What is React.lazy?",
        ans: "React.lazy allows you to render a dynamic import as a regular component, enabling code splitting and lazy loading.",
      },
      {
        que: "What is React.Suspense?",
        ans: "React.Suspense allows you to handle the loading state for components that are rendered lazily.",
      },
      {
        que: "What is a React portal?",
        ans: "A React portal allows you to render children into a different part of the DOM tree.",
      },
      {
        que: "What is reconciliation in React?",
        ans: "Reconciliation is the process by which React updates the DOM when a component's state or props change.",
      },
      {
        que: "What is an error boundary?",
        ans: "An error boundary is a component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI.",
      },
      {
        que: "What is the significance of keys in React?",
        ans: "Keys help React identify which items have changed, are added, or are removed, optimizing the rendering process.",
      },
      {
        que: "What is server-side rendering (SSR) in React?",
        ans: "SSR is the process of rendering React components on the server and sending the HTML to the client.",
      },
      {
        que: "What is static site generation (SSG) in React?",
        ans: "SSG is the process of generating static HTML pages at build time, which are then served to the client.",
      },
      {
        que: "What is the difference between SSR and SSG?",
        ans: "SSR renders pages on each request, while SSG pre-renders pages at build time.",
      },
      {
        que: "What is code splitting in React?",
        ans: "Code splitting is the process of splitting your code into smaller bundles, which can be loaded on demand to improve performance.",
      },
      {
        que: "What is React's Strict Mode?",
        ans: "Strict Mode is a tool for highlighting potential problems in an application by intentionally double-invoking certain functions.",
      },
      {
        que: "What are synthetic events in React?",
        ans: "Synthetic events are React's cross-browser wrapper around the browser's native event system, providing a consistent interface.",
      },
      {
        que: "What is the difference between useState and useReducer?",
        ans: "useState is for simple state management, while useReducer is for managing more complex state logic with multiple sub-values.",
      },
      {
        que: "What is the use of React's memo function?",
        ans: "React.memo is a higher-order component that memoizes the rendered output of a component to prevent unnecessary re-renders.",
      },
      {
        que: "What are hooks rules?",
        ans: "Hooks rules state that hooks must be called at the top level of a functional component and cannot be called conditionally or inside loops.",
      },
      {
        que: "What is the use of PropTypes in React?",
        ans: "PropTypes is a type-checking library used to ensure the correct type of props are passed to a component.",
      },
    ],
  },

  {
    id: "2",
    slug: "javascript",
    data: [
      {
        que: "What is JavaScript?",
        ans: "JavaScript is a versatile programming language primarily used for web development.",
      },
      {
        que: "What are closures in JavaScript?",
        ans: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.",
      },
      {
        que: "What is hoisting in JavaScript?",
        ans: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.",
      },
      {
        que: "What is the difference between var, let, and const?",
        ans: "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
      },
      {
        que: "What is the event loop?",
        ans: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel.",
      },
      {
        que: "What is the prototype chain?",
        ans: "The prototype chain is used to build new types of objects based on existing ones. It is a way of inheritance in JavaScript.",
      },
      {
        que: "What is asynchronous programming?",
        ans: "Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs.",
      },
      {
        que: "What is a promise?",
        ans: "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.",
      },
      {
        que: "What is async/await?",
        ans: "async/await is syntactic sugar built on top of promises, making asynchronous code easier to write and read.",
      },
      {
        que: "What is an arrow function?",
        ans: "Arrow functions are a shorter syntax for writing functions, introduced in ES6. They also do not have their own 'this' context.",
      },
      {
        que: "What is the difference between == and ===?",
        ans: "== checks for value equality, while === checks for both value and type equality.",
      },
      {
        que: "What are template literals?",
        ans: "Template literals are string literals allowing embedded expressions, using backticks (`) instead of quotes.",
      },
      {
        que: "What is the DOM?",
        ans: "The DOM (Document Object Model) is a programming interface for web documents, representing the page so that programs can change the document structure, style, and content.",
      },
      {
        que: "What are higher-order functions?",
        ans: "Higher-order functions are functions that can take other functions as arguments or return functions as their result.",
      },
      {
        que: "What is an IIFE?",
        ans: "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.",
      },
      {
        que: "What are JavaScript data types?",
        ans: "JavaScript data types include primitive types (such as number, string, boolean, null, undefined, symbol) and object types.",
      },
      {
        que: "What is the difference between null and undefined?",
        ans: "null is an assigned value indicating no value, while undefined means a variable has been declared but not yet assigned a value.",
      },
      {
        que: "What are the different types of errors in JavaScript?",
        ans: "The different types of errors in JavaScript include SyntaxError, TypeError, ReferenceError, RangeError, EvalError, and URIError.",
      },
      {
        que: "What is event delegation?",
        ans: "Event delegation is a technique of using a single event listener to manage events for multiple elements by taking advantage of event bubbling.",
      },
      {
        que: "What is a callback function?",
        ans: "A callback function is a function passed into another function as an argument and is executed after some operation has been completed.",
      },
      {
        que: "What is the difference between a for loop and a for...in loop?",
        ans: "A for loop is used for numeric iteration, while a for...in loop iterates over the properties of an object.",
      },
      {
        que: "What is the spread operator?",
        ans: "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.",
      },
      {
        que: "What is destructuring?",
        ans: "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
      },
      {
        que: "What are default parameters?",
        ans: "Default parameters allow you to initialize function parameters with default values if no value is provided or undefined is passed.",
      },
      {
        que: "What is a pure function?",
        ans: "A pure function is a function that returns the same output for the same input and has no side effects.",
      },
      {
        que: "What are modules in JavaScript?",
        ans: "Modules in JavaScript allow you to break your code into separate files, each containing a distinct piece of functionality, and to import/export these modules as needed.",
      },
      {
        que: "What is the use of the this keyword?",
        ans: "The this keyword refers to the object it belongs to. It has different values depending on where it is used.",
      },
      {
        que: "What is function currying?",
        ans: "Function currying is the process of transforming a function with multiple arguments into a sequence of functions each taking a single argument.",
      },
      {
        que: "What is the difference between call, apply, and bind?",
        ans: "call and apply invoke a function with a specified 'this' context and arguments, but apply takes an array of arguments while call takes individual arguments. bind returns a new function with a specified 'this' context and arguments.",
      },
      {
        que: "What is JSON?",
        ans: "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
      },
      {
        que: "What is a promise chain?",
        ans: "A promise chain is a series of promises where each promise returns another promise, allowing for a sequence of asynchronous operations to be performed in order.",
      },
      {
        que: "What are generators?",
        ans: "Generators are functions that can be exited and later re-entered, maintaining their context (variable bindings) between re-entrances.",
      },
      {
        que: "What is a Proxy object?",
        ans: "A Proxy object allows you to create an intermediary for another object that can intercept and redefine fundamental operations for that object.",
      },
      {
        que: "What is the difference between synchronous and asynchronous code?",
        ans: "Synchronous code executes sequentially, waiting for each operation to complete before moving to the next. Asynchronous code executes without waiting for previous operations to complete, often using callbacks, promises, or async/await.",
      },
      {
        que: "What are JavaScript frameworks and libraries?",
        ans: "JavaScript frameworks (e.g., Angular, Vue.js) provide a structure and standard way to build applications, while libraries (e.g., jQuery, Lodash) offer reusable functions and utilities.",
      },
      {
        que: "What is functional programming?",
        ans: "Functional programming is a programming paradigm where you build software by composing pure functions, avoiding shared state and mutable data.",
      },
      {
        que: "What is event bubbling?",
        ans: "Event bubbling is a type of event propagation where the event starts from the target element and then bubbles up to the parent elements in the DOM.",
      },
      {
        que: "What is event capturing?",
        ans: "Event capturing is a type of event propagation where the event is first captured by the outermost element and propagated to the target element.",
      },
      {
        que: "What is the fetch API?",
        ans: "The fetch API provides an interface for fetching resources (including across the network), returning a Promise that resolves to the Response to the request.",
      },
      {
        que: "What is Web Storage API?",
        ans: "The Web Storage API provides mechanisms to store key-value pairs in the browser. It includes localStorage for persistent storage and sessionStorage for temporary storage.",
      },
    ],
  },
  {
    id: "3",
    slug: "next",
    data: [
      {
        que: "What is Next.js?",
        ans: "Next.js is a React framework for server-side rendering and generating static websites.",
      },
      {
        que: "What are the key features of Next.js?",
        ans: "Key features include server-side rendering, static site generation, API routes, and automatic code splitting.",
      },
      {
        que: "What is server-side rendering (SSR)?",
        ans: "SSR is the process of rendering web pages on the server instead of the client, improving performance and SEO.",
      },
      {
        que: "What is static site generation (SSG)?",
        ans: "SSG pre-renders pages at build time, resulting in better performance and SEO.",
      },
      {
        que: "What are API routes in Next.js?",
        ans: "API routes allow you to create backend endpoints as part of your Next.js application.",
      },
      {
        que: "What is the difference between getStaticProps and getServerSideProps?",
        ans: "getStaticProps is used for static site generation, while getServerSideProps is used for server-side rendering.",
      },
      {
        que: "What is the getInitialProps lifecycle method?",
        ans: "getInitialProps is used to asynchronously fetch data before rendering a page.",
      },
      {
        que: "How does Next.js handle routing?",
        ans: "Next.js uses a file-based routing system where the file structure of the pages directory determines the routes.",
      },
      {
        que: "What is the difference between Link and useRouter in Next.js?",
        ans: "Link is used for client-side navigation, while useRouter provides access to the router object for programmatic navigation.",
      },
      {
        que: "How can you create dynamic routes in Next.js?",
        ans: "Dynamic routes can be created by using brackets in the file name, such as [id].js.",
      },
      {
        que: "What is the purpose of the _app.js file?",
        ans: "The _app.js file is used to customize the default App component, allowing you to add global styles and layout components.",
      },
      {
        que: "What is the _document.js file used for?",
        ans: "The _document.js file is used to customize the HTML document, such as adding custom tags to the head.",
      },
      {
        que: "How can you create API endpoints in Next.js?",
        ans: "API endpoints can be created by adding files to the pages/api directory.",
      },
      {
        que: "What is ISR (Incremental Static Regeneration)?",
        ans: "ISR allows you to update static content after the site has been built without needing a full rebuild.",
      },
      {
        que: "What is the use of next/head in Next.js?",
        ans: "next/head is used to modify the head of your document, such as adding meta tags and linking stylesheets.",
      },
      {
        que: "How do you deploy a Next.js application?",
        ans: "You can deploy a Next.js application using platforms like Vercel, Netlify, or by serving it as a Node.js server.",
      },
      {
        que: "What are custom document and custom app components?",
        ans: "Custom document (_document.js) and custom app (_app.js) components allow you to customize the server-side rendering document and the app rendering process, respectively.",
      },
      {
        que: "What is the purpose of the next.config.js file?",
        ans: "The next.config.js file is used to customize the default Next.js configuration, such as setting up redirects, rewrites, or environment variables.",
      },
      {
        que: "How do you handle static file serving in Next.js?",
        ans: "Static files can be served by placing them in the public directory.",
      },
      {
        que: "What is the purpose of getStaticPaths?",
        ans: "getStaticPaths is used with dynamic routes to specify which paths should be statically generated at build time.",
      },
      {
        que: "How do you use environment variables in Next.js?",
        ans: "Environment variables can be defined in .env.local, .env.development, or .env.production files and accessed using process.env.",
      },
      {
        que: "What is next/link used for?",
        ans: "next/link is used to create links for client-side navigation between routes.",
      },
      {
        que: "What is next/router used for?",
        ans: "next/router is a hook that gives you access to the router object and allows for programmatic navigation.",
      },
      {
        que: "What is fast refresh in Next.js?",
        ans: "Fast refresh is a feature that allows you to see changes instantly without losing component state while developing.",
      },
      {
        que: "What are the advantages of using Next.js?",
        ans: "Advantages include improved performance, SEO, developer experience, and built-in support for features like SSR and SSG.",
      },
      {
        que: "What is the difference between static generation and server-side rendering?",
        ans: "Static generation pre-renders pages at build time, while server-side rendering renders pages on each request.",
      },
      {
        que: "How can you handle CSS in Next.js?",
        ans: "CSS can be handled using CSS modules, global CSS, or styled-components.",
      },
      {
        que: "What are CSS modules?",
        ans: "CSS modules are CSS files in which all class and animation names are scoped locally by default.",
      },
      {
        que: "How do you use styled-components in Next.js?",
        ans: "styled-components can be used by installing the library and creating styled components within your Next.js pages or components.",
      },
      {
        que: "What is prefetching in Next.js?",
        ans: "Prefetching is a feature that loads page data in the background to improve navigation speed.",
      },
      {
        que: "What is the fallback key in getStaticPaths?",
        ans: "The fallback key determines the behavior for paths not returned by getStaticPaths, allowing dynamic content to be generated.",
      },
      {
        que: "What is the Image component in Next.js?",
        ans: "The Image component is used to optimize images for faster load times with built-in lazy loading and responsive design.",
      },
      {
        que: "How do you use TypeScript with Next.js?",
        ans: "TypeScript can be used by adding a tsconfig.json file and installing the necessary TypeScript and type dependencies.",
      },
      {
        que: "What is Middleware in Next.js?",
        ans: "Middleware allows you to run code before a request is completed, useful for tasks like authentication and logging.",
      },
      {
        que: "What are rewrites and redirects in Next.js?",
        ans: "Rewrites and redirects are used to route URLs to different destinations, useful for SEO and user experience improvements.",
      },
      {
        que: "What is a custom server in Next.js?",
        ans: "A custom server allows you to extend or replace the default server behavior using frameworks like Express.",
      },
      {
        que: "How does Next.js handle internationalization (i18n)?",
        ans: "Next.js supports internationalization by providing built-in routing and language detection.",
      },
      {
        que: "What is AMP and how is it used in Next.js?",
        ans: "AMP (Accelerated Mobile Pages) is used to create faster-loading web pages. Next.js supports AMP with hybrid and fully AMP pages.",
      },
      {
        que: "How do you enable React Strict Mode in Next.js?",
        ans: "React Strict Mode can be enabled by setting the reactStrictMode property to true in the next.config.js file.",
      },
      {
        que: "What is the purpose of the next build command?",
        ans: "The next build command is used to build the application for production, optimizing the output for deployment.",
      },
    ],
  },
  {
    id: "4",
    slug: "node",
    data: [
      {
        que: "What is Node.js?",
        ans: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing server-side scripting.",
      },
      {
        que: "What are the key features of Node.js?",
        ans: "Key features include asynchronous and event-driven architecture, non-blocking I/O, single-threaded nature, and a large ecosystem.",
      },
      {
        que: "What is npm?",
        ans: "npm is the Node.js package manager used to install, share, and distribute code, managing project dependencies.",
      },
      {
        que: "What is the difference between npm and npx?",
        ans: "npm installs packages, while npx is a tool for running Node.js packages without globally installing them.",
      },
      {
        que: "What are modules in Node.js?",
        ans: "Modules are reusable blocks of code that can be imported into other files using require or import statements.",
      },
      {
        que: "What is the purpose of the package.json file?",
        ans: "package.json is a file that holds various metadata relevant to the project, listing the dependencies and scripts.",
      },
      {
        que: "What is the event loop in Node.js?",
        ans: "The event loop handles all asynchronous callbacks in Node.js, allowing non-blocking I/O operations.",
      },
      {
        que: "What are streams in Node.js?",
        ans: "Streams are instances of EventEmitter used to handle reading/writing data as a continuous flow, enabling efficient I/O operations.",
      },
      {
        que: "What is a buffer in Node.js?",
        ans: "A buffer is a temporary storage area for raw binary data used to handle binary data directly.",
      },
      {
        que: "What is the difference between process.nextTick() and setImmediate()?",
        ans: "process.nextTick() defers the execution of a callback until the next iteration of the event loop, while setImmediate() schedules a callback to be executed in the next iteration of the event loop.",
      },
      {
        que: "What is middleware in Node.js?",
        ans: "Middleware is a function that has access to the request, response, and next middleware function in the application’s request-response cycle.",
      },
      {
        que: "What is the purpose of Express.js?",
        ans: "Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.",
      },
      {
        que: "How do you handle errors in Node.js?",
        ans: "Errors can be handled using try-catch blocks, error-first callbacks, and middleware.",
      },
      {
        que: "What is the use of the cluster module in Node.js?",
        ans: "The cluster module allows you to create child processes (workers) that share the same server port, enabling load balancing.",
      },
      {
        que: "What is the purpose of the fs module?",
        ans: "The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.",
      },
      {
        que: "How do you make asynchronous HTTP requests in Node.js?",
        ans: "Asynchronous HTTP requests can be made using modules like http, https, axios, and node-fetch.",
      },
      {
        que: "What is a callback function?",
        ans: "A callback function is a function passed into another function as an argument, executed after the completion of the operation.",
      },
      {
        que: "What are promises in Node.js?",
        ans: "Promises are objects representing the eventual completion or failure of an asynchronous operation, allowing cleaner code and avoiding callback hell.",
      },
      {
        que: "What is async/await in Node.js?",
        ans: "async/await is syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.",
      },
      {
        que: "What is the purpose of the crypto module?",
        ans: "The crypto module provides cryptographic functionality, including a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.",
      },
      {
        que: "How do you create a web server in Node.js?",
        ans: "A web server can be created using the http module by calling http.createServer() and passing a callback function to handle requests.",
      },
      {
        que: "What is the purpose of the os module?",
        ans: "The os module provides operating system-related utility methods and properties, such as getting the hostname, platform, and memory usage.",
      },
      {
        que: "What is REPL in Node.js?",
        ans: "REPL stands for Read-Eval-Print Loop, an interactive shell that processes Node.js expressions.",
      },
      {
        que: "How do you handle file uploads in Node.js?",
        ans: "File uploads can be handled using middleware like multer, which processes multipart/form-data encoded forms.",
      },
      {
        que: "What are the advantages of using Node.js?",
        ans: "Advantages include non-blocking I/O, a single programming language for both client and server, a large ecosystem, and strong community support.",
      },
      {
        que: "What is an EventEmitter in Node.js?",
        ans: "EventEmitter is a class in the events module that allows you to create, emit, and listen to custom events.",
      },
      {
        que: "What is the purpose of the util module?",
        ans: "The util module provides utility functions for debugging, string formatting, and more, such as util.promisify and util.format.",
      },
      {
        que: "How do you perform unit testing in Node.js?",
        ans: "Unit testing can be performed using frameworks like Mocha, Jest, and Jasmine, along with assertion libraries like Chai.",
      },
      {
        que: "What is the difference between readFile and createReadStream?",
        ans: "readFile reads the entire file into memory, while createReadStream reads the file in chunks, which is more memory efficient.",
      },
      {
        que: "What is the use of the net module?",
        ans: "The net module provides an API for creating stream-based TCP or IPC servers and clients.",
      },
      {
        que: "What are worker threads in Node.js?",
        ans: "Worker threads enable the execution of JavaScript in parallel on different threads, making use of multicore processors.",
      },
      {
        que: "What is the difference between process.exit() and process.kill()?",
        ans: "process.exit() terminates the process immediately, while process.kill() sends a signal to the process, which can be handled or ignored.",
      },
      {
        que: "How do you manage environment variables in Node.js?",
        ans: "Environment variables can be managed using the process.env object and packages like dotenv to load them from a .env file.",
      },
      {
        que: "What is the purpose of the path module?",
        ans: "The path module provides utilities for working with file and directory paths, such as joining paths and resolving absolute paths.",
      },
      {
        que: "What is the use of the readline module?",
        ans: "The readline module provides an interface for reading data from a readable stream one line at a time.",
      },
      {
        que: "How do you implement authentication in Node.js?",
        ans: "Authentication can be implemented using middleware like Passport.js, JWT (JSON Web Tokens), and OAuth strategies.",
      },
      {
        que: "What is the purpose of the zlib module?",
        ans: "The zlib module provides compression functionality, such as gzip and deflate.",
      },
      {
        que: "What is the difference between fork and spawn in Node.js?",
        ans: "fork is a special case of spawn to create child processes that can communicate with the parent via IPC, while spawn starts a new process with a given command.",
      },
      {
        que: "What is the purpose of the assert module?",
        ans: "The assert module provides a set of assertion functions for testing invariants, useful for unit tests.",
      },
    ],
  },
  {
    id: "5",
    slug: "nest",
    data: [
      {
        que: "What is NestJS?",
        ans: "NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
      },
      {
        que: "What are the key features of NestJS?",
        ans: "Key features include modular architecture, dependency injection, decorators, middleware, and easy integration with other libraries and frameworks.",
      },
      {
        que: "What is a module in NestJS?",
        ans: "A module is a class annotated with the @Module decorator that organizes the application structure by grouping related components, services, and controllers.",
      },
      {
        que: "What is a controller in NestJS?",
        ans: "A controller is a class annotated with the @Controller decorator that handles incoming HTTP requests and returns responses.",
      },
      {
        que: "What is a service in NestJS?",
        ans: "A service is a class annotated with the @Injectable decorator that contains business logic and can be injected into controllers or other services.",
      },
      {
        que: "What is dependency injection in NestJS?",
        ans: "Dependency injection is a design pattern used to implement IoC (Inversion of Control), allowing the creation of dependent objects outside of a class and providing those objects to a class through different ways.",
      },
      {
        que: "What are decorators in NestJS?",
        ans: "Decorators are special types of declarations that can be attached to a class, method, accessor, property, or parameter to modify their behavior.",
      },
      {
        que: "What is middleware in NestJS?",
        ans: "Middleware is a function that can access the request and response objects and execute any code before passing control to the next middleware function.",
      },
      {
        que: "How do you handle exceptions in NestJS?",
        ans: "Exceptions are handled using built-in filters, such as the @Catch decorator and HttpException class, to provide custom error handling logic.",
      },
      {
        que: "What is a pipe in NestJS?",
        ans: "A pipe is a class annotated with the @Injectable decorator that can transform or validate data before it is handled by the route handler.",
      },
      {
        que: "What is an interceptor in NestJS?",
        ans: "An interceptor is a class annotated with the @Injectable decorator that can bind extra logic before or after method execution, transforming the result or handling errors.",
      },
      {
        que: "What is a guard in NestJS?",
        ans: "A guard is a class annotated with the @Injectable decorator that can determine whether a request will be handled by the route handler or not based on custom authorization logic.",
      },
      {
        que: "What is the purpose of the @Module decorator?",
        ans: "The @Module decorator defines a module and lists its components, services, and imports, which helps organize the application structure.",
      },
      {
        que: "How do you create a REST API in NestJS?",
        ans: "A REST API can be created by defining controllers with routes and using decorators such as @Get, @Post, @Put, and @Delete to map HTTP methods to route handlers.",
      },
      {
        que: "What is the purpose of the @Injectable decorator?",
        ans: "The @Injectable decorator marks a class as a provider that can be injected into other classes as a dependency.",
      },
      {
        que: "How do you create a GraphQL API in NestJS?",
        ans: "A GraphQL API can be created by installing the @nestjs/graphql package and defining resolvers, schemas, and queries/mutations.",
      },
      {
        que: "What is the role of the AppModule in NestJS?",
        ans: "The AppModule is the root module of the application, where other modules are imported and configured.",
      },
      {
        que: "What is the ConfigModule in NestJS?",
        ans: "The ConfigModule is used to manage application configuration, loading environment variables and providing them throughout the application.",
      },
      {
        que: "How do you perform validation in NestJS?",
        ans: "Validation can be performed using the class-validator and class-transformer packages along with pipes like ValidationPipe.",
      },
      {
        que: "What is the purpose of the @Body decorator?",
        ans: "The @Body decorator is used to extract the body of a request and bind it to a method parameter.",
      },
      {
        que: "What is the @Param decorator used for?",
        ans: "The @Param decorator is used to extract route parameters and bind them to a method parameter.",
      },
      {
        que: "How do you implement authentication in NestJS?",
        ans: "Authentication can be implemented using guards, strategies (e.g., Passport.js), and modules like AuthModule.",
      },
      {
        que: "What is the purpose of the @Get decorator?",
        ans: "The @Get decorator is used to define a route handler for HTTP GET requests.",
      },
      {
        que: "What is the @Post decorator used for?",
        ans: "The @Post decorator is used to define a route handler for HTTP POST requests.",
      },
      {
        que: "What is the purpose of the @Put decorator?",
        ans: "The @Put decorator is used to define a route handler for HTTP PUT requests.",
      },
      {
        que: "What is the @Delete decorator used for?",
        ans: "The @Delete decorator is used to define a route handler for HTTP DELETE requests.",
      },
      {
        que: "How do you create a custom decorator in NestJS?",
        ans: "A custom decorator can be created using the createParamDecorator function from @nestjs/common.",
      },
      {
        que: "What is the role of the Main.ts file?",
        ans: "The Main.ts file is the entry point of the application, where the NestFactory is used to create and configure the Nest application instance.",
      },
      {
        que: "How do you implement logging in NestJS?",
        ans: "Logging can be implemented using the built-in Logger service or third-party libraries like Winston or Pino.",
      },
      {
        que: "What is the purpose of the @Inject decorator?",
        ans: "The @Inject decorator is used to manually specify a provider to be injected into a class.",
      },
      {
        que: "What is the purpose of the @Query decorator?",
        ans: "The @Query decorator is used to extract query parameters from the request and bind them to a method parameter.",
      },
      {
        que: "How do you handle file uploads in NestJS?",
        ans: "File uploads can be handled using the @nestjs/platform-express package along with Multer middleware.",
      },
      {
        que: "What is the purpose of the @Req and @Res decorators?",
        ans: "The @Req and @Res decorators are used to inject the request and response objects into route handlers.",
      },
      {
        que: "What is the use of the @Patch decorator?",
        ans: "The @Patch decorator is used to define a route handler for HTTP PATCH requests.",
      },
      {
        que: "How do you manage database connections in NestJS?",
        ans: "Database connections can be managed using TypeORM, Mongoose, or other database libraries with the appropriate @Module configuration.",
      },
      {
        que: "What is the role of the ExceptionFilter?",
        ans: "ExceptionFilters are used to handle and customize error responses globally or at the controller/route level.",
      },
      {
        que: "How do you implement caching in NestJS?",
        ans: "Caching can be implemented using the CacheModule and CacheInterceptor or third-party solutions like Redis.",
      },
      {
        que: "What is the use of the APP_INTERCEPTOR token?",
        ans: "The APP_INTERCEPTOR token is used to register global interceptors, applying them across the entire application.",
      },
      {
        que: "How do you implement WebSockets in NestJS?",
        ans: "WebSockets can be implemented using the @nestjs/websockets package, defining gateways and subscribing to events.",
      },
      {
        que: "What is microservices architecture in NestJS?",
        ans: "Microservices architecture in NestJS allows you to build distributed systems using various transport layers like TCP, Redis, and MQTT.",
      },
    ],
  },
  {
    id: "6",
    slug: "python",
    data: [
      {
        que: "What is Python?",
        ans: "Python is a high-level, interpreted programming language known for its readability and versatility.",
      },
      {
        que: "What are the key features of Python?",
        ans: "Key features include easy syntax, dynamic typing, extensive libraries, and support for multiple programming paradigms.",
      },
      {
        que: "What is PEP 8?",
        ans: "PEP 8 is the style guide for Python code, providing conventions for writing readable and consistent code.",
      },
      {
        que: "What are Python's built-in data types?",
        ans: "Built-in data types include int, float, complex, str, list, tuple, dict, set, and bool.",
      },
      {
        que: "What is a list in Python?",
        ans: "A list is a mutable, ordered collection of items, which can be of different types.",
      },
      {
        que: "What is a tuple in Python?",
        ans: "A tuple is an immutable, ordered collection of items, which can be of different types.",
      },
      {
        que: "What is a dictionary in Python?",
        ans: "A dictionary is an unordered collection of key-value pairs, where keys are unique and immutable.",
      },
      {
        que: "What are list comprehensions in Python?",
        ans: "List comprehensions provide a concise way to create lists using a single line of code, often including a for loop and optional condition.",
      },
      {
        que: "What is the difference between append() and extend() in Python?",
        ans: "append() adds a single element to the end of a list, while extend() adds all elements of an iterable to the list.",
      },
      {
        que: "How do you handle exceptions in Python?",
        ans: "Exceptions are handled using try-except blocks, with optional else and finally clauses for additional control flow.",
      },
      {
        que: "What is a lambda function in Python?",
        ans: "A lambda function is an anonymous, inline function defined with the lambda keyword, typically used for short, throwaway functions.",
      },
      {
        que: "What are decorators in Python?",
        ans: "Decorators are functions that modify the behavior of another function or method, often used for logging, access control, and memoization.",
      },
      {
        que: "What is the difference between *args and **kwargs?",
        ans: "*args is used to pass a variable number of positional arguments, while **kwargs is used to pass a variable number of keyword arguments.",
      },
      {
        que: "What is the purpose of the self parameter in Python?",
        ans: "The self parameter refers to the instance of the class in method definitions, allowing access to instance attributes and methods.",
      },
      {
        que: "What is inheritance in Python?",
        ans: "Inheritance is a feature that allows a class to inherit attributes and methods from another class, promoting code reuse and hierarchy.",
      },
      {
        que: "What is polymorphism in Python?",
        ans: "Polymorphism allows different classes to be treated as instances of the same class through a common interface, enabling method overriding.",
      },
      {
        que: "What is a generator in Python?",
        ans: "A generator is a special type of iterator defined using a function with the yield keyword, producing values one at a time and maintaining state.",
      },
      {
        que: "What is the difference between a shallow copy and a deep copy?",
        ans: "A shallow copy creates a new object but copies references to the elements, while a deep copy creates a new object and recursively copies all objects it contains.",
      },
      {
        que: "What is the GIL (Global Interpreter Lock) in Python?",
        ans: "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously.",
      },
      {
        que: "What are Python's built-in functions?",
        ans: "Built-in functions include print(), len(), range(), type(), int(), str(), list(), dict(), and many others.",
      },
      {
        que: "What is a context manager in Python?",
        ans: "A context manager is a construct that provides a way to allocate and release resources, typically used with the with statement.",
      },
      {
        que: "How do you manage dependencies in Python?",
        ans: "Dependencies are managed using package managers like pip, and virtual environments can be created using tools like venv or virtualenv.",
      },
      {
        que: "What is the difference between Python 2 and Python 3?",
        ans: "Python 3 introduced many changes and improvements over Python 2, including print as a function, integer division behavior, and Unicode support.",
      },
      {
        que: "What is the purpose of the __init__.py file?",
        ans: "The __init__.py file indicates that the directory is a Python package, allowing modules within the directory to be imported.",
      },
      {
        que: "What is the purpose of the __name__ variable?",
        ans: "__name__ is a special variable that holds the name of the module, and it is set to '__main__' when the module is run as the main program.",
      },
      {
        que: "What is a virtual environment in Python?",
        ans: "A virtual environment is an isolated environment that allows you to manage dependencies for a project without affecting other projects or the system-wide Python installation.",
      },
      {
        que: "What is the difference between range() and xrange()?",
        ans: "In Python 2, range() returns a list and xrange() returns an iterator. In Python 3, xrange() was removed, and range() returns an iterator.",
      },
      {
        que: "How do you perform unit testing in Python?",
        ans: "Unit testing is performed using frameworks like unittest, pytest, and nose, allowing for the creation and execution of test cases.",
      },
      {
        que: "What is the purpose of the assert statement?",
        ans: "The assert statement is used to test conditions that should always be true, raising an AssertionError if the condition is false.",
      },
      {
        que: "How do you handle file operations in Python?",
        ans: "File operations are handled using built-in functions like open(), read(), write(), and close(), often within a with statement for automatic resource management.",
      },
      {
        que: "What is the difference between __str__ and __repr__?",
        ans: "__str__ is used to provide a readable string representation of an object, while __repr__ is used to provide an unambiguous string representation for debugging.",
      },
      {
        que: "How do you create a class in Python?",
        ans: "A class is created using the class keyword followed by the class name and a colon, with methods defined inside the class.",
      },
      {
        que: "What are docstrings in Python?",
        ans: "Docstrings are string literals that appear as the first statement in a module, class, method, or function, providing documentation for the code.",
      },
      {
        que: "What is the difference between static methods and class methods?",
        ans: "Static methods are defined using the @staticmethod decorator and do not access instance or class attributes, while class methods are defined using the @classmethod decorator and take a reference to the class as the first parameter.",
      },
      {
        que: "What is a metaclass in Python?",
        ans: "A metaclass is a class of a class that defines how a class behaves, allowing for the customization of class creation.",
      },
      {
        que: "What is monkey patching in Python?",
        ans: "Monkey patching is the dynamic modification of a class or module at runtime, often used to add or modify functionality without altering the original source code.",
      },
      {
        que: "What is the purpose of the pass statement?",
        ans: "The pass statement is a no-operation statement used as a placeholder in control structures, allowing for the creation of empty blocks of code.",
      },
      {
        que: "What is the difference between is and == in Python?",
        ans: "is checks for object identity (whether two variables reference the same object), while == checks for value equality (whether two variables have the same value).",
      },
      {
        que: "What are Python's built-in modules?",
        ans: "Built-in modules include sys, os, math, datetime, json, re, random, and many others, providing a wide range of functionality.",
      },
    ],
  },
  {
    id: "7",
    slug: "cpp",
    data: [
      {
        que: "What is C++?",
        ans: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
      },
      {
        que: "What are the main features of C++?",
        ans: "Some main features of C++ include object-oriented programming, encapsulation, inheritance, polymorphism, and templates.",
      },
      {
        que: "What is the difference between C and C++?",
        ans: "C++ supports object-oriented programming while C is procedural. C++ also includes features like function overloading, templates, and exceptions.",
      },
      {
        que: "What is a class?",
        ans: "A class is a user-defined data type that contains variables and functions to perform operations on those variables.",
      },
      {
        que: "What is an object?",
        ans: "An object is an instance of a class. It is a basic unit of object-oriented programming.",
      },
      {
        que: "What is inheritance?",
        ans: "Inheritance is a feature of OOP that allows a class to inherit properties and methods from another class.",
      },
      {
        que: "What is polymorphism?",
        ans: "Polymorphism is the ability of a function, object, or method to behave differently in different contexts, such as function overloading and overriding.",
      },
      {
        que: "What is encapsulation?",
        ans: "Encapsulation is the bundling of data and methods that operate on that data within a single unit, typically a class, and restricting access to some of the object's components.",
      },
      {
        que: "What are access specifiers?",
        ans: "Access specifiers define the access control for the members of a class. Common specifiers are public, private, and protected.",
      },
      {
        que: "What is a constructor?",
        ans: "A constructor is a special member function of a class that initializes objects of the class.",
      },
      {
        que: "What is a destructor?",
        ans: "A destructor is a special member function of a class that is executed when an object of the class is destroyed.",
      },
      {
        que: "What are inline functions?",
        ans: "Inline functions are functions that are expanded in line when invoked, potentially reducing function call overhead.",
      },
      {
        que: "What are friend functions?",
        ans: "Friend functions are functions that are not members of a class but have access to its private and protected members.",
      },
      {
        que: "What is operator overloading?",
        ans: "Operator overloading allows C++ operators to be defined with user-defined types, enabling customized implementations.",
      },
      {
        que: "What is function overloading?",
        ans: "Function overloading is the ability to create multiple functions with the same name but different parameters.",
      },
      {
        que: "What are templates?",
        ans: "Templates in C++ allow functions and classes to operate with generic types, enabling code reusability.",
      },
      {
        que: "What is the Standard Template Library (STL)?",
        ans: "The STL is a powerful set of C++ template classes to provide general-purpose classes and functions with templates for data structures, algorithms, and iterators.",
      },
      {
        que: "What is the difference between a pointer and a reference?",
        ans: "A pointer is a variable that holds a memory address, while a reference is an alias for another variable.",
      },
      {
        que: "What is exception handling?",
        ans: "Exception handling in C++ is done using try, catch, and throw blocks to handle runtime errors gracefully.",
      },
      {
        que: "What are smart pointers?",
        ans: "Smart pointers are objects that act as pointers but provide automatic memory management to prevent memory leaks and dangling pointers. Examples include std::unique_ptr, std::shared_ptr, and std::weak_ptr.",
      },
    ],
  },
  {
    id: "7",
    slug: "typescript",
    data: [
      {
        que: "What is TypeScript?",
        ans: "TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        que: "What are the key features of TypeScript?",
        ans: "Key features include static typing, type inference, interfaces, classes, and compatibility with JavaScript.",
      },
      {
        que: "How do you install TypeScript?",
        ans: "TypeScript can be installed globally using npm with the command `npm install -g typescript`.",
      },
      {
        que: "What is the purpose of the `tsconfig.json` file?",
        ans: "The `tsconfig.json` file is used to configure TypeScript compiler options and specify the files to be included in the project.",
      },
      {
        que: "What are TypeScript's basic data types?",
        ans: "Basic data types include number, string, boolean, array, tuple, enum, any, void, null, and undefined.",
      },
      {
        que: "What is type inference in TypeScript?",
        ans: "Type inference is a feature where TypeScript automatically infers the type of a variable based on its initial value or context.",
      },
      {
        que: "How do you define an interface in TypeScript?",
        ans: "An interface is defined using the `interface` keyword, followed by the interface name and a block containing property and method signatures.",
      },
      {
        que: "What is the difference between `interface` and `type` in TypeScript?",
        ans: "Both `interface` and `type` can be used to define custom types, but `interface` supports declaration merging while `type` is more flexible and can define union and intersection types.",
      },
      {
        que: "What are generics in TypeScript?",
        ans: "Generics are a way to create reusable components that can work with different data types, using type parameters to specify the type.",
      },
      {
        que: "How do you define a class in TypeScript?",
        ans: "A class is defined using the `class` keyword, followed by the class name and a block containing properties and methods.",
      },
      {
        que: "What is the purpose of access modifiers in TypeScript?",
        ans: "Access modifiers (`public`, `private`, `protected`) control the visibility and accessibility of class members.",
      },
      {
        que: "What is the difference between `public`, `private`, and `protected`?",
        ans: "`public` members are accessible from anywhere, `private` members are accessible only within the class, and `protected` members are accessible within the class and its subclasses.",
      },
      {
        que: "What are decorators in TypeScript?",
        ans: "Decorators are special types of declarations that can be attached to a class, method, accessor, property, or parameter to modify their behavior.",
      },
      {
        que: "How do you handle null and undefined in TypeScript?",
        ans: "TypeScript provides the `null` and `undefined` types, and strict null checking can be enabled using the `strictNullChecks` compiler option.",
      },
      {
        que: "What is a union type in TypeScript?",
        ans: "A union type allows a variable to hold values of multiple types, defined using the `|` symbol.",
      },
      {
        que: "What is an intersection type in TypeScript?",
        ans: "An intersection type combines multiple types into one, defined using the `&` symbol.",
      },
      {
        que: "How do you use the `readonly` modifier in TypeScript?",
        ans: "The `readonly` modifier is used to mark properties as immutable, meaning they can only be assigned a value once.",
      },
      {
        que: "What is the purpose of the `any` type in TypeScript?",
        ans: "The `any` type allows a variable to hold values of any type, opting out of type checking.",
      },
      {
        que: "What is the purpose of the `unknown` type in TypeScript?",
        ans: "The `unknown` type is a safer alternative to `any`, requiring type assertions or type checking before use.",
      },
      {
        que: "How do you perform type assertions in TypeScript?",
        ans: "Type assertions are performed using the `as` keyword or angle-bracket syntax to specify the type of a value.",
      },
      {
        que: "What is the difference between type assertions and type casting?",
        ans: "Type assertions are used in TypeScript to override inferred types, while type casting typically refers to converting data types in other languages.",
      },
      {
        que: "How do you define optional properties in an interface?",
        ans: "Optional properties are defined using a question mark (`?`) after the property name in the interface.",
      },
      {
        que: "What is the purpose of the `never` type in TypeScript?",
        ans: "The `never` type represents values that never occur, typically used for functions that throw exceptions or never return.",
      },
      {
        que: "What are ambient declarations in TypeScript?",
        ans: "Ambient declarations are used to describe the shape of code that is not written in TypeScript, using the `declare` keyword.",
      },
      {
        que: "What is the purpose of `moduleResolution` in TypeScript?",
        ans: "`moduleResolution` specifies how the TypeScript compiler resolves module imports, with options like `node` and `classic`.",
      },
      {
        que: "How do you use the `typeof` operator in TypeScript?",
        ans: "The `typeof` operator is used to get the type of a variable or expression at runtime, and in type contexts to refer to the type of a value.",
      },
      {
        que: "What is the purpose of the `keyof` operator?",
        ans: "The `keyof` operator is used to get a union type of all property names of an object type.",
      },
      {
        que: "How do you use mapped types in TypeScript?",
        ans: "Mapped types create new types by transforming properties of an existing type, using syntax like `{ [K in keyof T]: T[K] }`.",
      },
      {
        que: "What is the `Partial` utility type?",
        ans: "The `Partial` utility type makes all properties of a type optional.",
      },
      {
        que: "What is the `Pick` utility type?",
        ans: "The `Pick` utility type constructs a type by selecting a subset of properties from another type.",
      },
      {
        que: "What is the `Omit` utility type?",
        ans: "The `Omit` utility type constructs a type by excluding specified properties from another type.",
      },
      {
        que: "What is the purpose of the `extends` keyword in TypeScript?",
        ans: "The `extends` keyword is used in class declarations to create a subclass and in generic constraints to restrict the types that can be used.",
      },
      {
        que: "How do you use conditional types in TypeScript?",
        ans: "Conditional types use a form of `T extends U ? X : Y` to choose between two types based on a condition.",
      },
      {
        que: "What is the `infer` keyword used for?",
        ans: "The `infer` keyword is used in conditional types to infer and capture the type of a variable.",
      },
      {
        que: "What is the difference between `interface` merging and `namespace` merging?",
        ans: "`interface` merging allows multiple declarations of the same interface to be combined, while `namespace` merging allows a namespace to be extended with additional members.",
      },
      {
        que: "How do you enable strict mode in TypeScript?",
        ans: "Strict mode can be enabled using the `strict` compiler option in the `tsconfig.json` file, enabling all strict type-checking options.",
      },
      {
        que: "What is the purpose of the `enum` type in TypeScript?",
        ans: "The `enum` type defines a set of named constants, which can be numeric or string-based.",
      },
      {
        que: "How do you handle asynchronous operations in TypeScript?",
        ans: "Asynchronous operations are handled using promises and the `async`/`await` syntax, similar to JavaScript.",
      },
      {
        que: "What is the purpose of the `include` and `exclude` options in `tsconfig.json`?",
        ans: "The `include` option specifies the files or patterns to be included in the compilation, while the `exclude` option specifies the files or patterns to be excluded.",
      },
    ],
  },
  {
    id: "8",
    slug: "dsa-interview",
    data: [
      {
        que: "What is a Data Structure?",
        ans: "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently.",
      },
      {
        que: "What is an Array?",
        ans: "An array is a collection of elements stored at contiguous memory locations, accessible by an index.",
      },
      {
        que: "What is a Linked List?",
        ans: "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
      },
      {
        que: "What is the difference between Array and Linked List?",
        ans: "Arrays have fixed size and contiguous memory allocation, while linked lists have dynamic size and non-contiguous memory allocation.",
      },
      {
        que: "What is a Stack?",
        ans: "A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, where the last element added is the first to be removed.",
      },
      {
        que: "What is a Queue?",
        ans: "A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where the first element added is the first to be removed.",
      },
      {
        que: "What is a Binary Tree?",
        ans: "A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child.",
      },
      {
        que: "What is a Binary Search Tree (BST)?",
        ans: "A BST is a binary tree where the left subtree contains nodes with values less than the parent node, and the right subtree contains nodes with values greater than the parent node.",
      },
      {
        que: "What is Tree Traversal?",
        ans: "Tree traversal is the process of visiting all nodes in a tree in a specific order. Common methods include in-order, pre-order, and post-order traversal.",
      },
      {
        que: "What is a Hash Table?",
        ans: "A hash table is a data structure that stores key-value pairs and uses a hash function to compute an index where the value is stored.",
      },
      {
        que: "What is a Graph?",
        ans: "A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect pairs of vertices.",
      },
      {
        que: "What is the difference between BFS and DFS?",
        ans: "BFS (Breadth-First Search) explores nodes level by level, while DFS (Depth-First Search) explores as far as possible along each branch before backtracking.",
      },
      {
        que: "What is Recursion?",
        ans: "Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.",
      },
      {
        que: "What is Dynamic Programming?",
        ans: "Dynamic Programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.",
      },
      {
        que: "What is Memoization?",
        ans: "Memoization is a technique used in dynamic programming to store the results of expensive function calls and return the cached result when the same inputs occur again.",
      },
      {
        que: "What is Greedy Algorithm?",
        ans: "A greedy algorithm makes the locally optimal choice at each step with the hope of finding a global optimum.",
      },
      {
        que: "What is Divide and Conquer?",
        ans: "Divide and Conquer is an algorithm design paradigm that works by recursively breaking down a problem into smaller subproblems until they become simple enough to solve directly.",
      },
      {
        que: "What is Binary Search?",
        ans: "Binary search is an efficient algorithm for finding an element in a sorted array by repeatedly dividing the search interval in half.",
      },
      {
        que: "What is the time complexity of Binary Search?",
        ans: "The time complexity of binary search is O(log n), where n is the number of elements in the array.",
      },
      {
        que: "What is Bubble Sort?",
        ans: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
      },
      {
        que: "What is Merge Sort?",
        ans: "Merge sort is a divide-and-conquer algorithm that divides the array into halves, sorts them, and then merges the sorted halves.",
      },
      {
        que: "What is Quick Sort?",
        ans: "Quick sort is a divide-and-conquer algorithm that picks a pivot element and partitions the array around the pivot, then recursively sorts the subarrays.",
      },
      {
        que: "What is the time complexity of Quick Sort?",
        ans: "The average time complexity of quick sort is O(n log n), but the worst case is O(n²).",
      },
      {
        que: "What is a Heap?",
        ans: "A heap is a specialized tree-based data structure that satisfies the heap property: in a max heap, parent nodes are greater than child nodes; in a min heap, parent nodes are less than child nodes.",
      },
      {
        que: "What is Heap Sort?",
        ans: "Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements.",
      },
      {
        que: "What is a Priority Queue?",
        ans: "A priority queue is an abstract data type where each element has a priority, and elements with higher priority are served before elements with lower priority.",
      },
      {
        que: "What is the difference between Stack and Queue?",
        ans: "A stack follows LIFO (Last-In-First-Out), while a queue follows FIFO (First-In-First-Out).",
      },
      {
        que: "What is a Circular Queue?",
        ans: "A circular queue is a queue where the last position is connected back to the first position to make a circle, efficiently utilizing memory.",
      },
      {
        que: "What is a Deque?",
        ans: "A deque (double-ended queue) is a data structure that allows insertion and deletion at both ends.",
      },
      {
        que: "What is Time Complexity?",
        ans: "Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the input size.",
      },
      {
        que: "What is Space Complexity?",
        ans: "Space complexity is a measure of the amount of memory an algorithm uses as a function of the input size.",
      },
      {
        que: "What is Big O Notation?",
        ans: "Big O notation is a mathematical notation used to describe the upper bound of an algorithm's time or space complexity in the worst case.",
      },
      {
        que: "What is the difference between O(n) and O(log n)?",
        ans: "O(n) represents linear time complexity where time increases proportionally with input size, while O(log n) represents logarithmic time complexity where time increases slowly as input size grows.",
      },
      {
        que: "What is a Trie?",
        ans: "A trie is a tree-like data structure used to store strings, where each node represents a character and paths represent strings.",
      },
      {
        que: "What is a Segment Tree?",
        ans: "A segment tree is a binary tree used for storing intervals or segments, allowing efficient range queries and updates.",
      },
      {
        que: "What is a Disjoint Set (Union-Find)?",
        ans: "A disjoint set is a data structure that keeps track of elements partitioned into non-overlapping sets, supporting union and find operations.",
      },
      {
        que: "What is Topological Sorting?",
        ans: "Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v.",
      },
      {
        que: "What is the Shortest Path Algorithm?",
        ans: "Shortest path algorithms find the path with minimum distance between two vertices in a graph. Examples include Dijkstra's and Bellman-Ford algorithms.",
      },
      {
        que: "What is Dijkstra's Algorithm?",
        ans: "Dijkstra's algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights.",
      },
      {
        que: "What is the Knapsack Problem?",
        ans: "The knapsack problem is an optimization problem where you need to select items with given weights and values to maximize total value without exceeding a weight limit.",
      },
    ],
  },
  {
    id: "9",
    slug: "database-interview",
    data: [
      {
        que: "What is a Database?",
        ans: "A database is an organized collection of structured data stored electronically in a computer system, managed by a Database Management System (DBMS).",
      },
      {
        que: "What is SQL?",
        ans: "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.",
      },
      {
        que: "What is NoSQL?",
        ans: "NoSQL databases are non-relational databases designed to store and retrieve data that is modeled in ways other than tabular relations.",
      },
      {
        que: "What is the difference between SQL and NoSQL?",
        ans: "SQL databases are relational, use structured schema, and support ACID transactions. NoSQL databases are non-relational, have flexible schemas, and are designed for horizontal scalability.",
      },
      {
        que: "What is a Primary Key?",
        ans: "A primary key is a column or set of columns that uniquely identifies each row in a table.",
      },
      {
        que: "What is a Foreign Key?",
        ans: "A foreign key is a column or set of columns in one table that references the primary key of another table, establishing a relationship between the two tables.",
      },
      {
        que: "What is Normalization?",
        ans: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity by dividing large tables into smaller ones.",
      },
      {
        que: "What are the different Normal Forms?",
        ans: "Common normal forms include 1NF (First Normal Form), 2NF (Second Normal Form), 3NF (Third Normal Form), BCNF (Boyce-Codd Normal Form), and 4NF (Fourth Normal Form).",
      },
      {
        que: "What is Denormalization?",
        ans: "Denormalization is the process of adding redundant data to a database to improve read performance by reducing the number of joins required.",
      },
      {
        que: "What is an Index?",
        ans: "An index is a database object that improves the speed of data retrieval operations by providing quick access to rows in a table.",
      },
      {
        que: "What are the types of Indexes?",
        ans: "Common types include clustered index, non-clustered index, unique index, composite index, and full-text index.",
      },
      {
        que: "What is a Transaction?",
        ans: "A transaction is a sequence of one or more database operations that are treated as a single unit of work, ensuring data consistency.",
      },
      {
        que: "What are ACID properties?",
        ans: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties that guarantee reliable database transactions.",
      },
      {
        que: "What is a JOIN in SQL?",
        ans: "A JOIN is an SQL operation that combines rows from two or more tables based on a related column between them.",
      },
      {
        que: "What are the different types of JOINs?",
        ans: "Common types include INNER JOIN, LEFT JOIN (LEFT OUTER JOIN), RIGHT JOIN (RIGHT OUTER JOIN), and FULL JOIN (FULL OUTER JOIN).",
      },
      {
        que: "What is the difference between INNER JOIN and OUTER JOIN?",
        ans: "INNER JOIN returns only matching rows from both tables, while OUTER JOIN returns matching rows plus unmatched rows from one or both tables.",
      },
      {
        que: "What is a View in SQL?",
        ans: "A view is a virtual table based on the result of an SQL query, providing a way to simplify complex queries and control data access.",
      },
      {
        que: "What is a Stored Procedure?",
        ans: "A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed as a single unit.",
      },
      {
        que: "What is a Trigger?",
        ans: "A trigger is a database object that automatically executes a specified action when certain events (INSERT, UPDATE, DELETE) occur on a table.",
      },
      {
        que: "What is the difference between WHERE and HAVING clauses?",
        ans: "WHERE filters rows before grouping, while HAVING filters groups after the GROUP BY operation.",
      },
      {
        que: "What is a Cursor?",
        ans: "A cursor is a database object used to retrieve and manipulate rows from a result set one row at a time.",
      },
      {
        que: "What is Database Sharding?",
        ans: "Sharding is a database partitioning technique that distributes data across multiple database instances to improve performance and scalability.",
      },
      {
        que: "What is Replication?",
        ans: "Replication is the process of copying and maintaining database objects in multiple databases to improve availability, fault tolerance, and performance.",
      },
      {
        que: "What is a Deadlock?",
        ans: "A deadlock occurs when two or more transactions are waiting for each other to release locks, resulting in a circular dependency.",
      },
      {
        que: "What is Query Optimization?",
        ans: "Query optimization is the process of selecting the most efficient execution plan for a query to minimize resource usage and response time.",
      },
      {
        que: "What is the EXPLAIN command?",
        ans: "EXPLAIN is a command that shows the execution plan of a query, helping developers understand how the database will execute the query.",
      },
      {
        que: "What is CAP Theorem?",
        ans: "CAP theorem states that a distributed database system can only guarantee two of three properties: Consistency, Availability, and Partition tolerance.",
      },
      {
        que: "What is MongoDB?",
        ans: "MongoDB is a popular NoSQL document database that stores data in flexible, JSON-like documents called BSON.",
      },
      {
        que: "What is Redis?",
        ans: "Redis is an in-memory key-value data store used as a database, cache, and message broker, known for its high performance.",
      },
      {
        que: "What is the difference between DELETE and TRUNCATE?",
        ans: "DELETE removes rows one at a time and can be rolled back, while TRUNCATE removes all rows at once, is faster, but cannot be rolled back in most databases.",
      },
      {
        que: "What is a Composite Key?",
        ans: "A composite key is a primary key composed of two or more columns used together to uniquely identify a row in a table.",
      },
      {
        que: "What is Data Integrity?",
        ans: "Data integrity refers to the accuracy, consistency, and reliability of data stored in a database.",
      },
      {
        que: "What is a Schema?",
        ans: "A schema is the structure or blueprint of a database that defines how data is organized, including tables, columns, relationships, and constraints.",
      },
      {
        que: "What is the difference between UNION and UNION ALL?",
        ans: "UNION combines results from multiple queries and removes duplicates, while UNION ALL combines results and keeps all duplicates.",
      },
      {
        que: "What is Connection Pooling?",
        ans: "Connection pooling is a technique that maintains a cache of database connections that can be reused, improving performance by reducing the overhead of creating new connections.",
      },
    ],
  },
  {
    id: "10",
    slug: "ml-interview",
    data: [
      {
        que: "What is Machine Learning?",
        ans: "Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.",
      },
      {
        que: "What are the types of Machine Learning?",
        ans: "The main types are Supervised Learning, Unsupervised Learning, Semi-supervised Learning, and Reinforcement Learning.",
      },
      {
        que: "What is Supervised Learning?",
        ans: "Supervised learning is a type of machine learning where the model is trained on labeled data, learning to map inputs to known outputs.",
      },
      {
        que: "What is Unsupervised Learning?",
        ans: "Unsupervised learning is a type of machine learning where the model finds patterns in unlabeled data without predefined outputs.",
      },
      {
        que: "What is Reinforcement Learning?",
        ans: "Reinforcement learning is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize cumulative reward.",
      },
      {
        que: "What is the difference between Classification and Regression?",
        ans: "Classification predicts discrete class labels, while regression predicts continuous numerical values.",
      },
      {
        que: "What is Overfitting?",
        ans: "Overfitting occurs when a model learns the training data too well, including noise, resulting in poor performance on new, unseen data.",
      },
      {
        que: "What is Underfitting?",
        ans: "Underfitting occurs when a model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and test data.",
      },
      {
        que: "What is a Neural Network?",
        ans: "A neural network is a computational model inspired by biological neural networks, consisting of layers of interconnected nodes (neurons) that process information.",
      },
      {
        que: "What is Deep Learning?",
        ans: "Deep learning is a subset of machine learning that uses neural networks with multiple hidden layers to learn complex patterns in large amounts of data.",
      },
      {
        que: "What is a Convolutional Neural Network (CNN)?",
        ans: "A CNN is a deep learning architecture designed for processing structured grid data like images, using convolutional layers to extract features.",
      },
      {
        que: "What is a Recurrent Neural Network (RNN)?",
        ans: "An RNN is a type of neural network designed for sequential data, where connections between nodes form directed cycles, allowing information to persist.",
      },
      {
        que: "What is Backpropagation?",
        ans: "Backpropagation is an algorithm used to train neural networks by calculating gradients of the loss function with respect to weights and updating them to minimize error.",
      },
      {
        que: "What is Gradient Descent?",
        ans: "Gradient descent is an optimization algorithm that iteratively adjusts model parameters in the direction of steepest descent of the loss function to find the minimum.",
      },
      {
        que: "What is the difference between Batch Gradient Descent and Stochastic Gradient Descent?",
        ans: "Batch gradient descent uses the entire dataset to compute gradients, while stochastic gradient descent uses one sample at a time, making it faster but noisier.",
      },
      {
        que: "What is a Loss Function?",
        ans: "A loss function measures the difference between predicted and actual values, guiding the optimization process during training.",
      },
      {
        que: "What is Regularization?",
        ans: "Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function, discouraging complex models.",
      },
      {
        que: "What is L1 and L2 Regularization?",
        ans: "L1 regularization (Lasso) adds the absolute value of coefficients to the loss, promoting sparsity. L2 regularization (Ridge) adds the squared value of coefficients, shrinking them towards zero.",
      },
      {
        que: "What is Dropout?",
        ans: "Dropout is a regularization technique that randomly deactivates neurons during training to prevent overfitting and improve generalization.",
      },
      {
        que: "What is Cross-Validation?",
        ans: "Cross-validation is a technique for assessing model performance by splitting data into multiple folds and training/testing on different combinations.",
      },
      {
        que: "What is K-Fold Cross-Validation?",
        ans: "K-fold cross-validation divides the dataset into K equal parts, training on K-1 folds and testing on the remaining fold, repeating K times.",
      },
      {
        que: "What is Feature Engineering?",
        ans: "Feature engineering is the process of selecting, transforming, and creating features from raw data to improve model performance.",
      },
      {
        que: "What is Feature Scaling?",
        ans: "Feature scaling is the process of normalizing or standardizing features to bring them to a similar scale, improving model convergence.",
      },
      {
        que: "What is the difference between Normalization and Standardization?",
        ans: "Normalization scales features to a range [0,1], while standardization transforms features to have mean 0 and standard deviation 1.",
      },
      {
        que: "What is Principal Component Analysis (PCA)?",
        ans: "PCA is a dimensionality reduction technique that transforms data into a new coordinate system, retaining the most important variance.",
      },
      {
        que: "What is a Decision Tree?",
        ans: "A decision tree is a supervised learning algorithm that makes predictions by learning decision rules from features, represented as a tree structure.",
      },
      {
        que: "What is Random Forest?",
        ans: "Random Forest is an ensemble learning method that builds multiple decision trees and combines their predictions to improve accuracy and reduce overfitting.",
      },
      {
        que: "What is Support Vector Machine (SVM)?",
        ans: "SVM is a supervised learning algorithm that finds the optimal hyperplane to separate classes in high-dimensional space.",
      },
      {
        que: "What is K-Means Clustering?",
        ans: "K-means is an unsupervised learning algorithm that partitions data into K clusters by minimizing the distance between points and cluster centroids.",
      },
      {
        que: "What is the Confusion Matrix?",
        ans: "A confusion matrix is a table used to evaluate classification model performance, showing true positives, true negatives, false positives, and false negatives.",
      },
      {
        que: "What are Precision and Recall?",
        ans: "Precision is the ratio of true positives to predicted positives. Recall is the ratio of true positives to actual positives.",
      },
      {
        que: "What is the F1 Score?",
        ans: "The F1 score is the harmonic mean of precision and recall, providing a single metric for model evaluation.",
      },
      {
        que: "What is Transfer Learning?",
        ans: "Transfer learning is a technique where a model trained on one task is adapted for a different but related task, leveraging learned features.",
      },
      {
        que: "What is a Hyperparameter?",
        ans: "A hyperparameter is a configuration setting external to the model that controls the learning process, such as learning rate or number of epochs.",
      },
      {
        que: "What is Model Deployment?",
        ans: "Model deployment is the process of integrating a trained machine learning model into a production environment to make predictions on new data.",
      },
    ],
  },
  // Vue.js Interview Questions
  {
    id: "12",
    slug: "vue",
    data: [
      {
        que: "What is Vue.js?",
        ans: "Vue.js is a progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable and focuses on the view layer.",
      },
      {
        que: "What are the key features of Vue.js?",
        ans: "Key features include reactive data binding, component-based architecture, virtual DOM, directives, computed properties, and watchers.",
      },
      {
        que: "What is the Vue instance?",
        ans: "A Vue instance is the root of a Vue application, created with the Vue constructor. It serves as the entry point for your application.",
      },
      {
        que: "What are Vue directives?",
        ans: "Directives are special tokens in markup that tell Vue.js to do something to a DOM element. Examples include v-if, v-for, v-bind, and v-on.",
      },
      {
        que: "What is v-model?",
        ans: "v-model is a directive that creates two-way data binding between form input elements and Vue instance data, automatically syncing values.",
      },
      {
        que: "What are Vue components?",
        ans: "Vue components are reusable Vue instances with a name. They allow you to build large applications composed of small, self-contained components.",
      },
      {
        que: "What is the difference between v-if and v-show?",
        ans: "v-if conditionally renders elements, removing them from the DOM when false. v-show toggles the CSS display property, keeping elements in the DOM.",
      },
      {
        que: "What are computed properties?",
        ans: "Computed properties are cached based on their reactive dependencies. They only re-evaluate when dependencies change, making them more efficient than methods.",
      },
      {
        que: "What are watchers in Vue.js?",
        ans: "Watchers allow you to perform custom logic when data changes. They're useful for performing asynchronous operations or expensive operations.",
      },
      {
        que: "What is Vuex?",
        ans: "Vuex is a state management library for Vue.js applications. It provides a centralized store for all components in an application.",
      },
      {
        que: "What are Vue lifecycle hooks?",
        ans: "Lifecycle hooks are functions that allow you to execute code at specific stages of a component's lifecycle, such as created, mounted, updated, and destroyed.",
      },
      {
        que: "What is the difference between created and mounted?",
        ans: "created is called after the instance is created but before DOM mounting. mounted is called after the component has been mounted to the DOM.",
      },
      {
        que: "What are props in Vue.js?",
        ans: "Props are custom attributes you can register on a component. They allow parent components to pass data down to child components.",
      },
      {
        que: "What is the difference between props and data?",
        ans: "Props are passed from parent components and should not be mutated. Data is local component state that can be modified within the component.",
      },
      {
        que: "What is Vue Router?",
        ans: "Vue Router is the official router for Vue.js. It enables building single-page applications with client-side routing.",
      },
      {
        que: "What are Vue mixins?",
        ans: "Mixins are a flexible way to distribute reusable functionality for Vue components. They can contain any component options.",
      },
      {
        que: "What is the Composition API?",
        ans: "The Composition API is a new way to write Vue components using imported functions instead of declaring options. It provides better TypeScript support and code organization.",
      },
      {
        que: "What is the difference between Options API and Composition API?",
        ans: "Options API organizes code by options (data, methods, computed). Composition API organizes code by logical concerns using setup() function.",
      },
      {
        que: "What are slots in Vue.js?",
        ans: "Slots allow you to compose components by passing template fragments to child components, enabling flexible component composition.",
      },
      {
        que: "What is scoped slots?",
        ans: "Scoped slots allow child components to pass data back to parent components through slots, enabling more flexible component communication.",
      },
      {
        que: "What is Vue CLI?",
        ans: "Vue CLI is a full system for rapid Vue.js development. It provides project scaffolding, development server, and build tools.",
      },
      {
        que: "What is Nuxt.js?",
        ans: "Nuxt.js is a framework built on top of Vue.js that provides server-side rendering, static site generation, and other advanced features.",
      },
      {
        que: "What is the Virtual DOM in Vue?",
        ans: "Vue uses a virtual DOM to optimize rendering. It creates a JavaScript representation of the DOM and updates only the parts that changed.",
      },
      {
        que: "What are filters in Vue.js?",
        ans: "Filters are functions used for common text formatting. They can be used in mustache interpolations and v-bind expressions.",
      },
      {
        que: "What is the key attribute in v-for?",
        ans: "The key attribute helps Vue track each node's identity for efficient re-rendering. It should be unique and stable.",
      },
      {
        que: "What is event handling in Vue?",
        ans: "Event handling in Vue uses the v-on directive (or @ shorthand) to listen to DOM events and execute JavaScript when they're triggered.",
      },
      {
        que: "What are refs in Vue.js?",
        ans: "Refs provide a way to access child component instances or DOM elements directly. They're accessed via the $refs property.",
      },
      {
        que: "What is the provide/inject pattern?",
        ans: "Provide/inject allows ancestor components to serve as dependency injectors for descendant components, regardless of component hierarchy depth.",
      },
      {
        que: "What is Vue's reactivity system?",
        ans: "Vue's reactivity system automatically tracks dependencies and updates the DOM when data changes, using getters and setters for properties.",
      },
      {
        que: "What is the difference between v-bind and v-model?",
        ans: "v-bind creates one-way data binding from data to template. v-model creates two-way data binding for form inputs.",
      },
    ],
  },
  // Angular Interview Questions
  {
    id: "13",
    slug: "angular",
    data: [
      {
        que: "What is Angular?",
        ans: "Angular is a TypeScript-based open-source web application framework developed by Google for building single-page applications.",
      },
      {
        que: "What are the key features of Angular?",
        ans: "Key features include two-way data binding, dependency injection, component-based architecture, TypeScript support, and a comprehensive CLI.",
      },
      {
        que: "What is a component in Angular?",
        ans: "A component is a TypeScript class decorated with @Component that defines a view with its associated template and styles.",
      },
      {
        que: "What is a module in Angular?",
        ans: "A module is a mechanism to group components, directives, pipes, and services that are related. The root module is AppModule.",
      },
      {
        que: "What is dependency injection in Angular?",
        ans: "Dependency injection is a design pattern where classes receive dependencies from external sources rather than creating them internally.",
      },
      {
        que: "What are Angular services?",
        ans: "Services are singleton objects that provide functionality across the application. They're used for data sharing, API calls, and business logic.",
      },
      {
        que: "What is the difference between constructor and ngOnInit?",
        ans: "Constructor is called when the class is instantiated. ngOnInit is called after Angular has finished initializing the component's data-bound properties.",
      },
      {
        que: "What are Angular directives?",
        ans: "Directives are classes that add behavior to elements. There are three types: components, structural directives, and attribute directives.",
      },
      {
        que: "What are structural directives?",
        ans: "Structural directives change the DOM layout by adding or removing elements. Examples include *ngIf, *ngFor, and *ngSwitch.",
      },
      {
        que: "What is data binding in Angular?",
        ans: "Data binding is the automatic synchronization of data between the model and view. Types include interpolation, property binding, event binding, and two-way binding.",
      },
      {
        que: "What is the difference between one-way and two-way binding?",
        ans: "One-way binding flows data from component to view or view to component. Two-way binding uses [(ngModel)] to bind in both directions.",
      },
      {
        que: "What is RxJS?",
        ans: "RxJS is a library for reactive programming using Observables. Angular uses it extensively for handling asynchronous operations.",
      },
      {
        que: "What is an Observable?",
        ans: "An Observable is a stream of data that can be observed over time. It's used for handling asynchronous operations and events.",
      },
      {
        que: "What is the difference between Promise and Observable?",
        ans: "Promises handle a single value asynchronously. Observables handle multiple values over time and can be cancelled.",
      },
      {
        que: "What is Angular Router?",
        ans: "Angular Router enables navigation between views in a single-page application by interpreting URL changes and mapping them to components.",
      },
      {
        que: "What are Angular pipes?",
        ans: "Pipes are functions used in templates to transform data for display. Examples include date, currency, uppercase, and custom pipes.",
      },
      {
        que: "What is the difference between pure and impure pipes?",
        ans: "Pure pipes are only executed when input values change. Impure pipes are executed on every change detection cycle.",
      },
      {
        que: "What is change detection in Angular?",
        ans: "Change detection is the process by which Angular checks for changes in component data and updates the DOM accordingly.",
      },
      {
        que: "What is Zone.js?",
        ans: "Zone.js is a library that patches async operations to trigger Angular's change detection automatically.",
      },
      {
        que: "What are Angular guards?",
        ans: "Guards are interfaces that control navigation. Types include CanActivate, CanDeactivate, CanLoad, and Resolve.",
      },
      {
        que: "What is lazy loading?",
        ans: "Lazy loading loads modules on-demand rather than at application startup, improving initial load time and performance.",
      },
      {
        que: "What is Angular CLI?",
        ans: "Angular CLI is a command-line interface tool for initializing, developing, and maintaining Angular applications.",
      },
      {
        que: "What is the difference between @Component and @Directive?",
        ans: "@Component requires a view (template). @Directive adds behavior to existing elements without requiring a view.",
      },
      {
        que: "What are Angular interceptors?",
        ans: "Interceptors are services that can intercept HTTP requests and responses, useful for adding headers, logging, or error handling.",
      },
      {
        que: "What is the difference between declarations, imports, and providers?",
        ans: "Declarations are components, directives, and pipes. Imports are other modules. Providers are services available to the module.",
      },
      {
        que: "What is ViewChild and ContentChild?",
        ans: "ViewChild accesses child components/elements in the component's view. ContentChild accesses content projected from parent.",
      },
      {
        que: "What is Angular Universal?",
        ans: "Angular Universal enables server-side rendering of Angular applications, improving initial load time and SEO.",
      },
      {
        que: "What is the difference between ngIf and hidden?",
        ans: "ngIf removes elements from the DOM when false. hidden uses CSS display:none, keeping elements in the DOM.",
      },
      {
        que: "What are Angular forms?",
        ans: "Angular provides two approaches: template-driven forms and reactive forms for handling user input and validation.",
      },
      {
        que: "What is the difference between template-driven and reactive forms?",
        ans: "Template-driven forms use directives in templates. Reactive forms use FormBuilder and FormControl classes programmatically.",
      },
      {
        que: "What is Angular Material?",
        ans: "Angular Material is a UI component library that implements Google's Material Design specification for Angular applications.",
      },
    ],
  },
  // Java Interview Questions
  {
    id: "14",
    slug: "java",
    data: [
      {
        que: "What is Java?",
        ans: "Java is a high-level, object-oriented programming language that is platform-independent and follows the 'write once, run anywhere' principle.",
      },
      {
        que: "What are the main features of Java?",
        ans: "Main features include platform independence, object-oriented programming, automatic memory management, multithreading, and security.",
      },
      {
        que: "What is the difference between JDK, JRE, and JVM?",
        ans: "JVM (Java Virtual Machine) executes bytecode. JRE (Java Runtime Environment) includes JVM and libraries. JDK (Java Development Kit) includes JRE plus development tools.",
      },
      {
        que: "What is the difference between == and equals()?",
        ans: "== compares references for objects and values for primitives. equals() compares the actual content/value of objects.",
      },
      {
        que: "What are the OOP principles in Java?",
        ans: "The four main OOP principles are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      },
      {
        que: "What is inheritance?",
        ans: "Inheritance allows a class to inherit properties and methods from another class. It promotes code reusability and establishes an 'is-a' relationship.",
      },
      {
        que: "What is polymorphism?",
        ans: "Polymorphism allows objects of different types to be accessed through the same interface. It includes method overriding and method overloading.",
      },
      {
        que: "What is the difference between method overloading and overriding?",
        ans: "Overloading has multiple methods with the same name but different parameters. Overriding has a subclass method replacing a superclass method.",
      },
      {
        que: "What is encapsulation?",
        ans: "Encapsulation is the bundling of data and methods that operate on that data within a single unit, hiding internal details from outside access.",
      },
      {
        que: "What is abstraction?",
        ans: "Abstraction hides complex implementation details and shows only essential features. It's achieved through abstract classes and interfaces.",
      },
      {
        que: "What is the difference between abstract class and interface?",
        ans: "Abstract classes can have both abstract and concrete methods. Interfaces can only have abstract methods (before Java 8). A class can implement multiple interfaces but extend only one class.",
      },
      {
        que: "What are access modifiers in Java?",
        ans: "Access modifiers control visibility: private (same class), default (same package), protected (same package + subclasses), public (everywhere).",
      },
      {
        que: "What is a constructor?",
        ans: "A constructor is a special method that initializes objects. It has the same name as the class and is called when an object is created.",
      },
      {
        que: "What is the difference between String, StringBuffer, and StringBuilder?",
        ans: "String is immutable. StringBuffer is mutable and thread-safe. StringBuilder is mutable but not thread-safe, making it faster.",
      },
      {
        que: "What are Java collections?",
        ans: "Collections framework provides classes and interfaces for storing and manipulating groups of objects. Main interfaces include List, Set, and Map.",
      },
      {
        que: "What is the difference between ArrayList and LinkedList?",
        ans: "ArrayList uses dynamic array, good for random access. LinkedList uses doubly-linked list, good for frequent insertions/deletions.",
      },
      {
        que: "What is the difference between HashSet and TreeSet?",
        ans: "HashSet stores elements in hash table, no ordering. TreeSet stores elements in sorted order using a tree structure.",
      },
      {
        que: "What is HashMap?",
        ans: "HashMap stores key-value pairs using hashing. It allows null keys and values and doesn't maintain insertion order.",
      },
      {
        que: "What is the difference between HashMap and Hashtable?",
        ans: "HashMap is not synchronized and allows nulls. Hashtable is synchronized and doesn't allow null keys or values.",
      },
      {
        que: "What are exceptions in Java?",
        ans: "Exceptions are events that disrupt normal program flow. Types include checked exceptions (compile-time) and unchecked exceptions (runtime).",
      },
      {
        que: "What is the difference between checked and unchecked exceptions?",
        ans: "Checked exceptions must be handled at compile time (IOException, SQLException). Unchecked exceptions occur at runtime (NullPointerException, ArrayIndexOutOfBoundsException).",
      },
      {
        que: "What is the finally block?",
        ans: "The finally block always executes after try-catch, regardless of whether an exception occurs. It's used for cleanup code.",
      },
      {
        que: "What is multithreading?",
        ans: "Multithreading allows multiple threads to execute concurrently within a single program, improving performance and responsiveness.",
      },
      {
        que: "What is the difference between Thread and Runnable?",
        ans: "Thread is a class that extends Thread. Runnable is an interface. Implementing Runnable is preferred as Java doesn't support multiple inheritance.",
      },
      {
        que: "What is synchronization?",
        ans: "Synchronization ensures only one thread can access a resource at a time, preventing race conditions and data inconsistency.",
      },
      {
        que: "What is the difference between wait() and sleep()?",
        ans: "wait() releases the lock and is called on an object. sleep() doesn't release the lock and is called on a thread.",
      },
      {
        que: "What are Java 8 features?",
        ans: "Key features include Lambda expressions, Stream API, Optional class, default methods in interfaces, and the new Date/Time API.",
      },
      {
        que: "What are Lambda expressions?",
        ans: "Lambda expressions provide a way to represent anonymous functions, enabling functional programming in Java.",
      },
      {
        que: "What is the Stream API?",
        ans: "Stream API provides a functional approach to processing collections, enabling declarative operations like filter, map, and reduce.",
      },
      {
        que: "What is Spring Framework?",
        ans: "Spring is a comprehensive framework for building enterprise Java applications, providing dependency injection, AOP, and various modules.",
      },
      {
        que: "What is dependency injection in Spring?",
        ans: "Dependency injection is a design pattern where Spring container injects dependencies into objects, promoting loose coupling and testability.",
      },
    ],
  },
  // Go (Golang) Interview Questions
  {
    id: "15",
    slug: "golang",
    data: [
      {
        que: "What is Go (Golang)?",
        ans: "Go is an open-source programming language developed by Google. It's statically typed, compiled, and designed for simplicity and efficiency.",
      },
      {
        que: "What are the key features of Go?",
        ans: "Key features include goroutines for concurrency, garbage collection, fast compilation, static typing, and a simple syntax.",
      },
      {
        que: "What are goroutines?",
        ans: "Goroutines are lightweight threads managed by the Go runtime. They enable concurrent execution with minimal overhead.",
      },
      {
        que: "What are channels in Go?",
        ans: "Channels are typed conduits for communication between goroutines. They allow safe data sharing and synchronization.",
      },
      {
        que: "What is the difference between buffered and unbuffered channels?",
        ans: "Unbuffered channels block until sender and receiver are ready. Buffered channels can hold a specified number of values without blocking.",
      },
      {
        que: "What is the difference between make and new?",
        ans: "make allocates and initializes slices, maps, and channels. new allocates memory for types and returns a pointer to zero value.",
      },
      {
        que: "What are interfaces in Go?",
        ans: "Interfaces define a set of method signatures. Types implicitly implement interfaces by having all required methods.",
      },
      {
        que: "What is the difference between var and :=?",
        ans: "var declares variables with explicit type. := declares and initializes variables with type inference (short variable declaration).",
      },
      {
        que: "What are slices in Go?",
        ans: "Slices are dynamic arrays built on top of arrays. They provide more flexibility than arrays with variable length.",
      },
      {
        que: "What is the difference between arrays and slices?",
        ans: "Arrays have fixed size defined at compile time. Slices are dynamic and can grow or shrink, built on top of arrays.",
      },
      {
        que: "What are maps in Go?",
        ans: "Maps are key-value data structures, similar to dictionaries or hash tables in other languages. They're unordered collections.",
      },
      {
        que: "What is defer in Go?",
        ans: "defer schedules a function call to run after the surrounding function returns, useful for cleanup operations like closing files.",
      },
      {
        que: "What is the order of execution for multiple defer statements?",
        ans: "Multiple defer statements execute in LIFO (Last In First Out) order - the last defer executes first.",
      },
      {
        que: "What are pointers in Go?",
        ans: "Pointers store the memory address of a value. They allow direct memory access and can improve performance by avoiding copying.",
      },
      {
        que: "What is the difference between value and pointer receivers?",
        ans: "Value receivers operate on a copy of the value. Pointer receivers operate on the actual value, allowing modifications.",
      },
      {
        que: "What is the select statement?",
        ans: "select allows a goroutine to wait on multiple channel operations, choosing the first one that's ready.",
      },
      {
        que: "What are Go packages?",
        ans: "Packages are collections of Go source files in the same directory. They provide code organization and namespace management.",
      },
      {
        que: "What is the difference between exported and unexported names?",
        ans: "Exported names start with uppercase and are accessible from other packages. Unexported names start with lowercase and are package-private.",
      },
      {
        que: "What is the init function?",
        ans: "init is a special function that runs automatically before main, used for package initialization.",
      },
      {
        que: "What is error handling in Go?",
        ans: "Go uses explicit error returns rather than exceptions. Functions return errors as the last return value.",
      },
      {
        que: "What is panic and recover?",
        ans: "panic stops normal execution and starts panicking. recover can catch panics and restore control, allowing graceful error handling.",
      },
      {
        que: "What are structs in Go?",
        ans: "Structs are composite types that group together zero or more values with different types into a single entity.",
      },
      {
        que: "What are methods in Go?",
        ans: "Methods are functions with a special receiver argument. They can be defined on any type, not just structs.",
      },
      {
        que: "What is the difference between concurrency and parallelism?",
        ans: "Concurrency is dealing with multiple things at once. Parallelism is doing multiple things at the same time. Go excels at concurrency.",
      },
      {
        que: "What is the GOMAXPROCS?",
        ans: "GOMAXPROCS sets the maximum number of OS threads that can execute user-level Go code simultaneously.",
      },
      {
        que: "What is the Go workspace?",
        ans: "A Go workspace is a directory hierarchy with src, bin, and pkg directories where Go code is organized.",
      },
      {
        que: "What is go mod?",
        ans: "go mod is Go's dependency management system, introduced in Go 1.11. It manages module dependencies and versions.",
      },
      {
        que: "What is the difference between sync.Mutex and sync.RWMutex?",
        ans: "Mutex allows exclusive access. RWMutex allows multiple readers or one writer, providing better performance for read-heavy scenarios.",
      },
      {
        que: "What are context packages used for?",
        ans: "Context provides request-scoped values, cancellation signals, and deadlines across API boundaries and goroutines.",
      },
      {
        que: "What is the difference between var, const, and :=?",
        ans: "var declares variables, const declares constants, and := is short variable declaration with type inference.",
      },
    ],
  },
  // AWS Cloud Interview Questions
  {
    id: "16",
    slug: "aws",
    data: [
      {
        que: "What is AWS?",
        ans: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering computing power, storage, databases, and other services.",
      },
      {
        que: "What is EC2?",
        ans: "EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud, allowing you to launch virtual servers on demand.",
      },
      {
        que: "What is S3?",
        ans: "S3 (Simple Storage Service) is object storage for storing and retrieving any amount of data from anywhere on the web.",
      },
      {
        que: "What are the S3 storage classes?",
        ans: "S3 storage classes include Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, and Deep Archive, each optimized for different access patterns.",
      },
      {
        que: "What is Lambda?",
        ans: "AWS Lambda is a serverless compute service that runs code in response to events without provisioning or managing servers.",
      },
      {
        que: "What is VPC?",
        ans: "VPC (Virtual Private Cloud) lets you provision a logically isolated section of AWS cloud where you can launch AWS resources.",
      },
      {
        que: "What is CloudFront?",
        ans: "CloudFront is a content delivery network (CDN) that delivers data, videos, applications, and APIs to users with low latency.",
      },
      {
        que: "What is RDS?",
        ans: "RDS (Relational Database Service) makes it easy to set up, operate, and scale relational databases in the cloud.",
      },
      {
        que: "What is DynamoDB?",
        ans: "DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
      },
      {
        que: "What is IAM?",
        ans: "IAM (Identity and Access Management) enables you to manage access to AWS services and resources securely.",
      },
      {
        que: "What is the difference between IAM user and role?",
        ans: "IAM users are identities with long-term credentials. IAM roles are identities with temporary credentials that can be assumed by users or services.",
      },
      {
        que: "What is CloudWatch?",
        ans: "CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources and applications.",
      },
      {
        que: "What is SNS?",
        ans: "SNS (Simple Notification Service) is a fully managed messaging service for both application-to-application and application-to-person communication.",
      },
      {
        que: "What is SQS?",
        ans: "SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling and scaling of microservices.",
      },
      {
        que: "What is the difference between SNS and SQS?",
        ans: "SNS is a pub/sub messaging service for fan-out messaging. SQS is a message queue service for point-to-point messaging.",
      },
      {
        que: "What is Route 53?",
        ans: "Route 53 is a scalable Domain Name System (DNS) web service designed to give developers a reliable way to route users to applications.",
      },
      {
        que: "What is Elastic Beanstalk?",
        ans: "Elastic Beanstalk is a platform-as-a-service that makes it easy to deploy and scale web applications and services.",
      },
      {
        que: "What is CloudFormation?",
        ans: "CloudFormation allows you to model and provision AWS resources using templates, enabling infrastructure as code.",
      },
      {
        que: "What is ECS?",
        ans: "ECS (Elastic Container Service) is a fully managed container orchestration service that supports Docker containers.",
      },
      {
        que: "What is EKS?",
        ans: "EKS (Elastic Kubernetes Service) is a managed Kubernetes service for running Kubernetes on AWS without needing to install and operate Kubernetes.",
      },
      {
        que: "What is API Gateway?",
        ans: "API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs.",
      },
      {
        que: "What is the difference between availability zone and region?",
        ans: "A region is a geographic area with multiple availability zones. Availability zones are isolated locations within a region.",
      },
      {
        que: "What is auto-scaling?",
        ans: "Auto-scaling automatically adjusts the number of EC2 instances based on demand, ensuring optimal performance and cost efficiency.",
      },
      {
        que: "What is ELB?",
        ans: "ELB (Elastic Load Balancing) automatically distributes incoming application traffic across multiple targets, such as EC2 instances.",
      },
      {
        que: "What are the types of load balancers in AWS?",
        ans: "AWS offers Application Load Balancer (ALB), Network Load Balancer (NLB), and Classic Load Balancer (CLB).",
      },
      {
        que: "What is CloudTrail?",
        ans: "CloudTrail enables governance, compliance, and auditing by logging API calls and user activity in your AWS account.",
      },
      {
        que: "What is KMS?",
        ans: "KMS (Key Management Service) makes it easy to create and manage cryptographic keys for encrypting your data.",
      },
      {
        que: "What is the difference between S3 and EBS?",
        ans: "S3 is object storage for files and backups. EBS is block storage volumes for use with EC2 instances.",
      },
      {
        que: "What is the shared responsibility model?",
        ans: "AWS is responsible for security of the cloud (infrastructure). Customers are responsible for security in the cloud (data, applications).",
      },
      {
        que: "What is the Well-Architected Framework?",
        ans: "The Well-Architected Framework provides best practices across five pillars: operational excellence, security, reliability, performance, and cost optimization.",
      },
      {
        que: "What is serverless architecture?",
        ans: "Serverless architecture allows you to build and run applications without managing servers, using services like Lambda, API Gateway, and DynamoDB.",
      },
    ],
  },
  // Docker Interview Questions
  {
    id: "17",
    slug: "docker",
    data: [
      {
        que: "What is Docker?",
        ans: "Docker is a platform for developing, shipping, and running applications using containerization technology.",
      },
      {
        que: "What is a container?",
        ans: "A container is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, libraries, and settings.",
      },
      {
        que: "What is the difference between a container and a virtual machine?",
        ans: "Containers share the host OS kernel and are more lightweight. VMs include a full OS and are more isolated but heavier.",
      },
      {
        que: "What is a Docker image?",
        ans: "A Docker image is a read-only template used to create containers. It contains the application code, dependencies, and runtime.",
      },
      {
        que: "What is a Dockerfile?",
        ans: "A Dockerfile is a text file containing instructions for building a Docker image, including base image, dependencies, and commands.",
      },
      {
        que: "What is a Docker container?",
        ans: "A Docker container is a running instance of a Docker image. Multiple containers can run from the same image.",
      },
      {
        que: "What is Docker Hub?",
        ans: "Docker Hub is a cloud-based registry service for storing and sharing Docker images, similar to GitHub for code.",
      },
      {
        que: "What are Docker volumes?",
        ans: "Docker volumes are persistent storage mechanisms that allow data to persist even after containers are stopped or removed.",
      },
      {
        que: "What is the difference between COPY and ADD in Dockerfile?",
        ans: "COPY copies files from host to image. ADD can also extract tar files and fetch from URLs, but COPY is preferred for simplicity.",
      },
      {
        que: "What is Docker Compose?",
        ans: "Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.",
      },
      {
        que: "What is the difference between CMD and ENTRYPOINT?",
        ans: "CMD provides default commands that can be overridden. ENTRYPOINT sets commands that always run and cannot be overridden.",
      },
      {
        que: "What are Docker layers?",
        ans: "Docker images are built in layers. Each instruction in a Dockerfile creates a new layer, enabling caching and efficient storage.",
      },
      {
        que: "What is multi-stage build?",
        ans: "Multi-stage builds allow you to use multiple FROM statements to create smaller final images by discarding intermediate build artifacts.",
      },
      {
        que: "What is Docker networking?",
        ans: "Docker networking enables containers to communicate with each other and with external networks through various network drivers.",
      },
      {
        que: "What are Docker network types?",
        ans: "Docker network types include bridge (default), host, none, and overlay networks for different use cases.",
      },
      {
        que: "What is the difference between docker run and docker start?",
        ans: "docker run creates and starts a new container. docker start starts an existing stopped container.",
      },
      {
        que: "What is docker exec?",
        ans: "docker exec runs a command in a running container, useful for debugging and accessing container internals.",
      },
      {
        que: "What is the difference between docker stop and docker kill?",
        ans: "docker stop gracefully stops a container (SIGTERM then SIGKILL). docker kill immediately terminates a container (SIGKILL).",
      },
      {
        que: "What is .dockerignore?",
        ans: ".dockerignore is a file that specifies files and directories to exclude from the Docker build context, similar to .gitignore.",
      },
      {
        que: "What is Docker Swarm?",
        ans: "Docker Swarm is Docker's native clustering and orchestration tool for managing a cluster of Docker hosts.",
      },
      {
        que: "What is the difference between Docker and Kubernetes?",
        ans: "Docker is a containerization platform. Kubernetes is an orchestration platform for managing containerized applications at scale.",
      },
      {
        que: "What are Docker health checks?",
        ans: "Health checks allow Docker to verify that a container is still working correctly by running a command periodically.",
      },
      {
        que: "What is Docker registry?",
        ans: "A Docker registry stores Docker images. Docker Hub is the public registry, but you can also run private registries.",
      },
      {
        que: "What is the difference between docker build and docker commit?",
        ans: "docker build creates images from Dockerfiles. docker commit creates images from container changes, but Dockerfile is preferred.",
      },
      {
        que: "What are Docker secrets?",
        ans: "Docker secrets provide a secure way to store and manage sensitive data like passwords, tokens, and keys in Docker Swarm.",
      },
      {
        que: "What is Dockerfile best practice?",
        ans: "Best practices include using specific base images, minimizing layers, using .dockerignore, avoiding running as root, and using multi-stage builds.",
      },
      {
        que: "What is container orchestration?",
        ans: "Container orchestration automates deployment, scaling, and management of containerized applications across multiple hosts.",
      },
      {
        que: "What is the difference between image and container?",
        ans: "An image is a template/blueprint. A container is a running instance of an image. You can have multiple containers from one image.",
      },
      {
        que: "What is Docker daemon?",
        ans: "Docker daemon (dockerd) is a background service that manages Docker objects like images, containers, networks, and volumes.",
      },
    ],
  },
  // Kubernetes Interview Questions
  {
    id: "18",
    slug: "kubernetes",
    data: [
      {
        que: "What is Kubernetes?",
        ans: "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
      },
      {
        que: "What are the main components of Kubernetes?",
        ans: "Main components include Master (API server, etcd, controller manager, scheduler) and Worker nodes (kubelet, kube-proxy, container runtime).",
      },
      {
        que: "What is a Pod?",
        ans: "A Pod is the smallest deployable unit in Kubernetes, containing one or more containers that share storage and network resources.",
      },
      {
        que: "What is a Node?",
        ans: "A Node is a worker machine in Kubernetes that runs pods. It can be a physical or virtual machine.",
      },
      {
        que: "What is a Deployment?",
        ans: "A Deployment provides declarative updates for Pods and ReplicaSets, managing the desired state of your application.",
      },
      {
        que: "What is a Service?",
        ans: "A Service is an abstraction that defines a logical set of Pods and a policy to access them, providing stable networking.",
      },
      {
        que: "What are the types of Services?",
        ans: "Service types include ClusterIP (internal), NodePort (expose on node IP), LoadBalancer (cloud provider), and ExternalName (external service).",
      },
      {
        que: "What is a ReplicaSet?",
        ans: "A ReplicaSet ensures a specified number of pod replicas are running at any given time, maintaining desired state.",
      },
      {
        que: "What is the difference between Deployment and ReplicaSet?",
        ans: "Deployment manages ReplicaSets and provides rolling updates and rollback capabilities. ReplicaSet only ensures pod count.",
      },
      {
        que: "What is a Namespace?",
        ans: "A Namespace provides a way to divide cluster resources between multiple users or teams, creating virtual clusters.",
      },
      {
        que: "What is ConfigMap?",
        ans: "ConfigMap stores non-confidential data in key-value pairs, allowing you to decouple configuration from container images.",
      },
      {
        que: "What is a Secret?",
        ans: "A Secret stores sensitive information like passwords, tokens, or keys, encoded in base64 for security.",
      },
      {
        que: "What is Ingress?",
        ans: "Ingress manages external HTTP/HTTPS access to services, providing load balancing, SSL termination, and name-based virtual hosting.",
      },
      {
        que: "What is a PersistentVolume?",
        ans: "A PersistentVolume (PV) is a cluster-wide storage resource provisioned by an administrator or dynamically via StorageClass.",
      },
      {
        que: "What is a PersistentVolumeClaim?",
        ans: "A PersistentVolumeClaim (PVC) is a request for storage by a user, binding to a PersistentVolume.",
      },
      {
        que: "What is a StatefulSet?",
        ans: "StatefulSet manages stateful applications, providing stable network identities and persistent storage for pods.",
      },
      {
        que: "What is the difference between StatefulSet and Deployment?",
        ans: "StatefulSet provides stable identities and ordered deployment for stateful apps. Deployment is for stateless applications.",
      },
      {
        que: "What is a DaemonSet?",
        ans: "A DaemonSet ensures all nodes run a copy of a pod, useful for system-level services like logging or monitoring.",
      },
      {
        que: "What is a Job?",
        ans: "A Job creates one or more pods and ensures they complete successfully, useful for batch processing or one-time tasks.",
      },
      {
        que: "What is a CronJob?",
        ans: "A CronJob creates Jobs on a time-based schedule, similar to cron in Linux, for periodic tasks.",
      },
      {
        que: "What is kubelet?",
        ans: "kubelet is an agent that runs on each node, ensuring containers are running in pods and communicating with the master.",
      },
      {
        que: "What is kube-proxy?",
        ans: "kube-proxy maintains network rules on nodes, enabling service abstraction and load balancing.",
      },
      {
        que: "What is etcd?",
        ans: "etcd is a distributed key-value store that stores all cluster data, serving as Kubernetes' backing store.",
      },
      {
        que: "What is the API server?",
        ans: "The API server is the front-end for the Kubernetes control plane, exposing the Kubernetes API and validating requests.",
      },
      {
        que: "What is the Controller Manager?",
        ans: "The Controller Manager runs controller processes that regulate the state of the cluster, such as ReplicationController and NodeController.",
      },
      {
        que: "What is the Scheduler?",
        ans: "The Scheduler assigns pods to nodes based on resource requirements, constraints, and policies.",
      },
      {
        que: "What are Labels and Selectors?",
        ans: "Labels are key-value pairs attached to objects. Selectors are used to identify a set of objects based on their labels.",
      },
      {
        que: "What is Horizontal Pod Autoscaler (HPA)?",
        ans: "HPA automatically scales the number of pods based on observed CPU utilization or custom metrics.",
      },
      {
        que: "What is a Liveness Probe?",
        ans: "A Liveness Probe determines if a container is running. If it fails, Kubernetes restarts the container.",
      },
      {
        que: "What is a Readiness Probe?",
        ans: "A Readiness Probe determines if a container is ready to accept traffic. If it fails, the pod is removed from service endpoints.",
      },
      {
        que: "What is the difference between Liveness and Readiness probes?",
        ans: "Liveness determines if container should be restarted. Readiness determines if container can receive traffic.",
      },
      {
        que: "What is kubectl?",
        ans: "kubectl is the command-line tool for interacting with Kubernetes clusters, used to deploy, inspect, and manage applications.",
      },
    ],
  },
  // Git & GitHub Interview Questions
  {
    id: "19",
    slug: "git",
    data: [
      {
        que: "What is Git?",
        ans: "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      },
      {
        que: "What is the difference between Git and GitHub?",
        ans: "Git is the version control system. GitHub is a cloud-based hosting service for Git repositories with collaboration features.",
      },
      {
        que: "What is a repository?",
        ans: "A repository (repo) is a directory that contains your project files and the entire history of changes tracked by Git.",
      },
      {
        que: "What is the difference between git pull and git fetch?",
        ans: "git fetch downloads changes without merging. git pull downloads and merges changes in one step.",
      },
      {
        que: "What is a commit?",
        ans: "A commit is a snapshot of your repository at a specific point in time, with a message describing the changes.",
      },
      {
        que: "What is a branch?",
        ans: "A branch is a parallel version of your repository, allowing you to work on features without affecting the main codebase.",
      },
      {
        que: "What is the difference between git merge and git rebase?",
        ans: "git merge creates a merge commit combining branches. git rebase replays commits on top of another branch, creating a linear history.",
      },
      {
        que: "What is a remote?",
        ans: "A remote is a reference to a remote repository, typically on GitHub or another server, allowing you to push and pull changes.",
      },
      {
        que: "What is the difference between git clone and git fork?",
        ans: "git clone creates a local copy of a repository. Fork creates a copy on GitHub that you can modify independently.",
      },
      {
        que: "What is HEAD?",
        ans: "HEAD is a pointer to the current branch and commit you're working on. It points to the latest commit in your current branch.",
      },
      {
        que: "What is the staging area?",
        ans: "The staging area (index) is where you prepare changes before committing. git add moves changes to staging area.",
      },
      {
        que: "What is the difference between git add . and git add -A?",
        ans: "git add . adds files in current directory. git add -A adds all changes in the entire repository.",
      },
      {
        que: "What is git stash?",
        ans: "git stash temporarily saves uncommitted changes, allowing you to switch branches or pull updates without committing.",
      },
      {
        que: "What is a conflict in Git?",
        ans: "A conflict occurs when Git cannot automatically merge changes. You must manually resolve conflicts by editing the conflicted files.",
      },
      {
        que: "What is the difference between git reset and git revert?",
        ans: "git reset moves HEAD to a previous commit, potentially losing history. git revert creates a new commit that undoes changes, preserving history.",
      },
      {
        que: "What are the types of git reset?",
        ans: "git reset --soft keeps changes staged. --mixed (default) keeps changes unstaged. --hard discards all changes.",
      },
      {
        que: "What is .gitignore?",
        ans: ".gitignore is a file that specifies files and directories Git should ignore, preventing them from being tracked.",
      },
      {
        que: "What is a pull request?",
        ans: "A pull request (PR) is a request to merge changes from one branch into another, allowing code review and discussion.",
      },
      {
        que: "What is the difference between git push and git pull?",
        ans: "git push uploads local commits to remote repository. git pull downloads and merges remote changes to local repository.",
      },
      {
        que: "What is cherry-pick?",
        ans: "git cherry-pick applies a specific commit from one branch to another, useful for backporting fixes.",
      },
      {
        que: "What is git bisect?",
        ans: "git bisect uses binary search to find the commit that introduced a bug, helping identify problematic changes.",
      },
      {
        que: "What is a tag in Git?",
        ans: "A tag is a reference to a specific commit, typically used to mark release points (v1.0, v2.0, etc.).",
      },
      {
        que: "What is the difference between lightweight and annotated tags?",
        ans: "Lightweight tags are just pointers to commits. Annotated tags store metadata like author, date, and message.",
      },
      {
        que: "What is git reflog?",
        ans: "git reflog records all changes to HEAD, allowing you to recover lost commits or branches.",
      },
      {
        que: "What is a submodule?",
        ans: "A submodule allows you to include one Git repository as a subdirectory of another repository, useful for managing dependencies.",
      },
      {
        que: "What is the difference between git fetch and git pull --rebase?",
        ans: "git fetch only downloads. git pull --rebase downloads and rebases your local commits on top of remote changes.",
      },
      {
        que: "What is git blame?",
        ans: "git blame shows who last modified each line of a file and when, useful for tracking code ownership.",
      },
      {
        que: "What is git log?",
        ans: "git log displays the commit history, showing commits, authors, dates, and messages in reverse chronological order.",
      },
      {
        que: "What is the difference between git diff and git show?",
        ans: "git diff shows differences between commits, branches, or working directory. git show displays a specific commit's changes.",
      },
      {
        que: "What is a fast-forward merge?",
        ans: "A fast-forward merge occurs when the target branch hasn't diverged, simply moving the branch pointer forward.",
      },
      {
        que: "What is git clean?",
        ans: "git clean removes untracked files from the working directory, useful for cleaning up build artifacts.",
      },
      {
        que: "What is GitHub Actions?",
        ans: "GitHub Actions is a CI/CD platform that automates workflows, allowing you to build, test, and deploy code directly from GitHub.",
      },
    ],
  },
  // Redis Interview Questions
  {
    id: "20",
    slug: "redis",
    data: [
      {
        que: "What is Redis?",
        ans: "Redis (Remote Dictionary Server) is an in-memory data structure store used as a database, cache, and message broker.",
      },
      {
        que: "What are the key features of Redis?",
        ans: "Key features include in-memory storage, data persistence, multiple data structures, replication, high performance, and pub/sub messaging.",
      },
      {
        que: "What data structures does Redis support?",
        ans: "Redis supports strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, streams, and geospatial indexes.",
      },
      {
        que: "What is the difference between Redis and Memcached?",
        ans: "Redis supports more data structures, persistence, replication, and pub/sub. Memcached is simpler and focused on caching.",
      },
      {
        que: "What is Redis persistence?",
        ans: "Redis persistence allows data to survive restarts through RDB (snapshots) and AOF (append-only file) mechanisms.",
      },
      {
        que: "What is the difference between RDB and AOF?",
        ans: "RDB creates point-in-time snapshots. AOF logs every write operation. RDB is faster, AOF is more durable.",
      },
      {
        que: "What is Redis replication?",
        ans: "Redis replication allows master-slave setup where slaves replicate data from master, providing redundancy and read scaling.",
      },
      {
        que: "What is Redis Sentinel?",
        ans: "Redis Sentinel provides high availability by monitoring masters and automatically promoting slaves to masters if master fails.",
      },
      {
        que: "What is Redis Cluster?",
        ans: "Redis Cluster provides automatic sharding across multiple nodes, enabling horizontal scaling and high availability.",
      },
      {
        que: "What are Redis commands?",
        ans: "Redis commands include SET/GET for strings, HSET/HGET for hashes, LPUSH/RPOP for lists, SADD/SMEMBERS for sets, and ZADD/ZRANGE for sorted sets.",
      },
      {
        que: "What is Redis pub/sub?",
        ans: "Redis pub/sub enables messaging where publishers send messages to channels and subscribers receive messages from subscribed channels.",
      },
      {
        que: "What is the difference between Redis keyspace and keyspace notifications?",
        ans: "Keyspace is the collection of all keys. Keyspace notifications are events published when keys are modified.",
      },
      {
        que: "What is Redis pipelining?",
        ans: "Redis pipelining allows sending multiple commands without waiting for responses, improving performance by reducing round-trip time.",
      },
      {
        que: "What is Redis transaction?",
        ans: "Redis transactions allow executing multiple commands atomically using MULTI, EXEC, and DISCARD commands.",
      },
      {
        que: "What is the difference between Redis WATCH and MULTI?",
        ans: "WATCH monitors keys for changes. MULTI starts a transaction. If watched keys change, EXEC fails, ensuring optimistic locking.",
      },
      {
        que: "What is Redis expiration?",
        ans: "Redis expiration allows setting TTL (time-to-live) on keys, automatically deleting them after the specified time.",
      },
      {
        que: "What are Redis Lua scripts?",
        ans: "Redis Lua scripts allow executing complex operations atomically on the server, reducing network round-trips.",
      },
      {
        que: "What is Redis memory management?",
        ans: "Redis memory management includes eviction policies (LRU, LFU, etc.) to remove keys when memory limits are reached.",
      },
      {
        que: "What is the difference between Redis SET and SETEX?",
        ans: "SET stores a key-value pair. SETEX stores a key-value pair with expiration time in seconds.",
      },
      {
        que: "What is Redis sorted set?",
        ans: "Redis sorted sets are sets where each member has a score, allowing range queries and ranking operations.",
      },
      {
        que: "What is Redis hash?",
        ans: "Redis hash is a map of field-value pairs, useful for storing objects with multiple attributes efficiently.",
      },
      {
        que: "What is Redis list?",
        ans: "Redis list is a collection of ordered strings, supporting operations like push, pop, and range queries.",
      },
      {
        que: "What is the difference between LPUSH and RPUSH?",
        ans: "LPUSH adds elements to the left (beginning) of the list. RPUSH adds elements to the right (end) of the list.",
      },
      {
        que: "What is Redis bitmap?",
        ans: "Redis bitmap is a string type that treats string as a bit array, useful for efficient boolean operations and analytics.",
      },
      {
        que: "What is Redis HyperLogLog?",
        ans: "HyperLogLog is a probabilistic data structure for estimating the cardinality of a set with minimal memory usage.",
      },
      {
        que: "What is Redis Stream?",
        ans: "Redis Stream is a log-like data structure for storing and consuming messages, similar to Kafka, introduced in Redis 5.0.",
      },
      {
        que: "What is Redis geospatial?",
        ans: "Redis geospatial indexes allow storing and querying geographic coordinates, useful for location-based applications.",
      },
      {
        que: "What is Redis performance optimization?",
        ans: "Performance optimization includes using appropriate data structures, pipelining, connection pooling, and avoiding blocking commands.",
      },
      {
        que: "What is Redis security?",
        ans: "Redis security includes authentication (AUTH), SSL/TLS encryption, disabling dangerous commands, and network isolation.",
      },
      {
        que: "What is the difference between Redis and MongoDB?",
        ans: "Redis is in-memory with simple data structures, best for caching. MongoDB is disk-based document database, best for complex queries.",
      },
      {
        que: "What is Redis use case?",
        ans: "Common use cases include caching, session storage, real-time analytics, leaderboards, pub/sub messaging, and rate limiting.",
      },
    ],
  },
  // C++ Interview Questions
  {
    id: "21",
    slug: "cpp-lang",
    data: [
      {
        que: "What is C++?",
        ans: "C++ is a general-purpose programming language that extends C with object-oriented programming, templates, and other modern features.",
      },
      {
        que: "What are the key features of C++?",
        ans: "Key features include OOP, templates, STL, memory management, operator overloading, multiple inheritance, and exception handling.",
      },
      {
        que: "What is the difference between C and C++?",
        ans: "C++ adds OOP features, templates, exception handling, and STL. C is procedural, while C++ supports both procedural and OOP paradigms.",
      },
      {
        que: "What are pointers?",
        ans: "Pointers are variables that store memory addresses. They allow direct memory manipulation and dynamic memory allocation.",
      },
      {
        que: "What is the difference between pointer and reference?",
        ans: "Pointers can be reassigned and can be null. References must be initialized and cannot be reassigned after initialization.",
      },
      {
        que: "What is the difference between new and malloc?",
        ans: "new is a C++ operator that calls constructors and returns typed pointer. malloc is a C function that only allocates memory.",
      },
      {
        que: "What is the difference between delete and free?",
        ans: "delete is a C++ operator that calls destructors and deallocates memory. free is a C function that only deallocates memory.",
      },
      {
        que: "What is OOP in C++?",
        ans: "OOP in C++ includes classes, objects, encapsulation, inheritance, polymorphism, and abstraction.",
      },
      {
        que: "What is the difference between class and struct?",
        ans: "In C++, the only difference is default access: class members are private by default, struct members are public by default.",
      },
      {
        que: "What is inheritance?",
        ans: "Inheritance allows a class to inherit properties and methods from another class, promoting code reusability.",
      },
      {
        que: "What are access specifiers?",
        ans: "Access specifiers (public, private, protected) control the visibility of class members from outside the class.",
      },
      {
        que: "What is polymorphism?",
        ans: "Polymorphism allows objects of different types to be accessed through the same interface, achieved through virtual functions.",
      },
      {
        que: "What is a virtual function?",
        ans: "A virtual function is a member function that can be overridden in derived classes, enabling runtime polymorphism.",
      },
      {
        que: "What is the difference between virtual function and pure virtual function?",
        ans: "Virtual function has implementation and can be overridden. Pure virtual function has no implementation and must be overridden.",
      },
      {
        que: "What is an abstract class?",
        ans: "An abstract class contains at least one pure virtual function and cannot be instantiated directly.",
      },
      {
        que: "What is operator overloading?",
        ans: "Operator overloading allows you to define custom behavior for operators when used with user-defined types.",
      },
      {
        que: "What is function overloading?",
        ans: "Function overloading allows multiple functions with the same name but different parameters in the same scope.",
      },
      {
        que: "What is the STL?",
        ans: "STL (Standard Template Library) provides containers, iterators, algorithms, and function objects for common programming tasks.",
      },
      {
        que: "What are STL containers?",
        ans: "STL containers include vector, list, deque, set, map, stack, queue, and priority_queue for storing data.",
      },
      {
        que: "What is the difference between vector and array?",
        ans: "Vector is dynamic and can resize. Array has fixed size. Vector provides more methods and automatic memory management.",
      },
      {
        que: "What is the difference between list and vector?",
        ans: "List is a doubly-linked list, good for insertions/deletions. Vector is a dynamic array, good for random access.",
      },
      {
        que: "What is the difference between map and unordered_map?",
        ans: "Map is ordered (tree-based) with O(log n) operations. Unordered_map is hash-based with O(1) average operations.",
      },
      {
        que: "What are iterators?",
        ans: "Iterators are objects that provide a way to access elements in containers sequentially, similar to pointers.",
      },
      {
        que: "What is a template?",
        ans: "Templates allow writing generic code that works with different data types, enabling code reusability.",
      },
      {
        que: "What is the difference between function template and class template?",
        ans: "Function template creates generic functions. Class template creates generic classes that can work with different types.",
      },
      {
        que: "What is exception handling?",
        ans: "Exception handling uses try, catch, and throw to handle runtime errors gracefully and maintain program flow.",
      },
      {
        que: "What is RAII?",
        ans: "RAII (Resource Acquisition Is Initialization) ensures resources are acquired in constructor and released in destructor.",
      },
      {
        que: "What is a smart pointer?",
        ans: "Smart pointers are wrapper classes that manage memory automatically, including unique_ptr, shared_ptr, and weak_ptr.",
      },
      {
        que: "What is the difference between unique_ptr and shared_ptr?",
        ans: "unique_ptr has exclusive ownership. shared_ptr has shared ownership with reference counting.",
      },
      {
        que: "What is move semantics?",
        ans: "Move semantics allows transferring resources from one object to another without copying, improving performance.",
      },
      {
        que: "What is a lambda function?",
        ans: "Lambda functions are anonymous functions that can capture variables from surrounding scope and be used inline.",
      },
    ],
  },
  // C# Interview Questions
  {
    id: "22",
    slug: "csharp",
    data: [
      {
        que: "What is C#?",
        ans: "C# is a modern, object-oriented programming language developed by Microsoft, part of the .NET framework.",
      },
      {
        que: "What are the key features of C#?",
        ans: "Key features include type safety, garbage collection, LINQ, async/await, properties, events, delegates, and generics.",
      },
      {
        que: "What is .NET?",
        ans: ".NET is a free, cross-platform framework for building various types of applications, including web, desktop, and mobile.",
      },
      {
        que: "What is the difference between .NET Framework and .NET Core?",
        ans: ".NET Framework is Windows-only. .NET Core (now .NET 5+) is cross-platform and open-source with better performance.",
      },
      {
        que: "What is the difference between value types and reference types?",
        ans: "Value types store data directly (int, struct). Reference types store references to data (class, string, array).",
      },
      {
        que: "What is boxing and unboxing?",
        ans: "Boxing converts value type to object (reference type). Unboxing converts object back to value type.",
      },
      {
        que: "What are access modifiers?",
        ans: "Access modifiers (public, private, protected, internal) control the visibility and accessibility of class members.",
      },
      {
        que: "What is the difference between abstract class and interface?",
        ans: "Abstract class can have implementation and fields. Interface can only have method signatures (before C# 8.0).",
      },
      {
        que: "What is LINQ?",
        ans: "LINQ (Language Integrated Query) provides query capabilities directly in C# for querying collections, databases, and XML.",
      },
      {
        que: "What is async/await?",
        ans: "async/await enables asynchronous programming, allowing methods to perform non-blocking operations without blocking threads.",
      },
      {
        que: "What is the difference between async and sync methods?",
        ans: "Async methods can perform non-blocking operations and return Task. Sync methods block until completion.",
      },
      {
        que: "What is a delegate?",
        ans: "A delegate is a type-safe function pointer that references methods, enabling event handling and callbacks.",
      },
      {
        que: "What is the difference between delegate and event?",
        ans: "Delegate is a type. Event is a special delegate that can only be invoked from the declaring class.",
      },
      {
        que: "What is a property?",
        ans: "Properties provide a way to access private fields through get and set accessors, enabling encapsulation.",
      },
      {
        que: "What is the difference between property and field?",
        ans: "Properties use get/set accessors and can have logic. Fields are direct data members without accessor methods.",
      },
      {
        que: "What is garbage collection?",
        ans: "Garbage collection automatically manages memory by reclaiming objects that are no longer referenced.",
      },
      {
        que: "What are generics?",
        ans: "Generics allow writing code that works with different types while maintaining type safety at compile time.",
      },
      {
        que: "What is the difference between List and ArrayList?",
        ans: "List<T> is generic and type-safe. ArrayList is non-generic and stores objects, requiring casting.",
      },
      {
        que: "What is reflection?",
        ans: "Reflection allows inspecting and manipulating types, methods, and properties at runtime, enabling dynamic code execution.",
      },
      {
        que: "What is dependency injection?",
        ans: "Dependency injection is a design pattern where dependencies are provided to a class rather than created internally.",
      },
      {
        que: "What is Entity Framework?",
        ans: "Entity Framework is an ORM (Object-Relational Mapping) framework that simplifies database operations in .NET.",
      },
      {
        que: "What is ASP.NET?",
        ans: "ASP.NET is a web framework for building web applications and APIs using C# and .NET.",
      },
      {
        que: "What is the difference between ASP.NET MVC and Web API?",
        ans: "MVC returns views (HTML). Web API returns data (JSON/XML) for building RESTful services.",
      },
      {
        que: "What is middleware?",
        ans: "Middleware are components that form a pipeline to handle requests and responses in ASP.NET Core applications.",
      },
      {
        que: "What is dependency injection container?",
        ans: "DI container manages object creation and lifetime, automatically resolving dependencies in .NET applications.",
      },
      {
        que: "What is the difference between IEnumerable and IQueryable?",
        ans: "IEnumerable executes queries in memory. IQueryable builds queries that execute on the database server.",
      },
      {
        que: "What is a namespace?",
        ans: "Namespaces organize code into logical groups, preventing naming conflicts and improving code organization.",
      },
      {
        que: "What is the using statement?",
        ans: "The using statement ensures proper disposal of resources by calling Dispose() when the object goes out of scope.",
      },
      {
        que: "What is the difference between string and StringBuilder?",
        ans: "String is immutable. StringBuilder is mutable and more efficient for multiple string concatenations.",
      },
      {
        que: "What is a nullable type?",
        ans: "Nullable types allow value types to have null values, useful for database fields and optional values.",
      },
      {
        que: "What is the difference between == and Equals()?",
        ans: "== compares references for reference types and values for value types. Equals() compares actual content.",
      },
    ],
  },
  // Express.js Interview Questions
  {
    id: "23",
    slug: "express",
    data: [
      {
        que: "What is Express.js?",
        ans: "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.",
      },
      {
        que: "What are the key features of Express.js?",
        ans: "Key features include routing, middleware support, template engines, error handling, and integration with various databases.",
      },
      {
        que: "What is middleware?",
        ans: "Middleware functions have access to request, response, and next function. They can execute code, modify request/response, and call next middleware.",
      },
      {
        que: "What is the difference between app.use() and app.get()?",
        ans: "app.use() mounts middleware for all HTTP methods. app.get() handles only GET requests for specific routes.",
      },
      {
        que: "What is routing?",
        ans: "Routing determines how an application responds to client requests to particular endpoints (URIs) and HTTP methods.",
      },
      {
        que: "What is the difference between app.get() and app.post()?",
        ans: "app.get() handles GET requests (retrieving data). app.post() handles POST requests (creating/submitting data).",
      },
      {
        que: "What is req and res?",
        ans: "req (request) contains request data. res (response) is used to send responses back to the client.",
      },
      {
        que: "What is next()?",
        ans: "next() passes control to the next middleware function. If not called, the request-response cycle stops.",
      },
      {
        que: "What are route parameters?",
        ans: "Route parameters are named URL segments used to capture values at specific positions in the URL (e.g., /users/:id).",
      },
      {
        que: "What is query string?",
        ans: "Query string is the part of URL after '?' containing key-value pairs, accessible via req.query.",
      },
      {
        que: "What is the difference between req.params and req.query?",
        ans: "req.params captures route parameters from URL path. req.query captures query string parameters.",
      },
      {
        que: "What is body-parser?",
        ans: "body-parser is middleware that parses incoming request bodies, making data available in req.body.",
      },
      {
        que: "What is CORS?",
        ans: "CORS (Cross-Origin Resource Sharing) allows web pages to make requests to different domains. Use cors middleware to enable it.",
      },
      {
        que: "What is static file serving?",
        ans: "Static file serving delivers static assets (CSS, images, JS) using express.static() middleware.",
      },
      {
        que: "What is error handling middleware?",
        ans: "Error handling middleware has four parameters (err, req, res, next) and handles errors in the application.",
      },
      {
        que: "What is the difference between app.listen() and server.listen()?",
        ans: "app.listen() is a convenience method that creates HTTP server and calls listen(). server.listen() is the underlying method.",
      },
      {
        que: "What is Express Router?",
        ans: "Express Router creates modular, mountable route handlers. It's like a mini Express application with its own routes and middleware.",
      },
      {
        que: "What is template engine?",
        ans: "Template engines (EJS, Pug, Handlebars) render dynamic HTML by injecting data into templates.",
      },
      {
        que: "What is session management?",
        ans: "Session management stores user data on the server between requests, typically using express-session middleware.",
      },
      {
        que: "What is the difference between session and cookie?",
        ans: "Sessions store data on server, cookies store data on client. Sessions are more secure but require server storage.",
      },
      {
        que: "What is authentication middleware?",
        ans: "Authentication middleware verifies user identity before allowing access to protected routes, often using JWT or sessions.",
      },
      {
        que: "What is JWT?",
        ans: "JWT (JSON Web Token) is a compact token format for securely transmitting information between parties, commonly used for authentication.",
      },
      {
        que: "What is rate limiting?",
        ans: "Rate limiting restricts the number of requests a client can make within a time period, preventing abuse and DoS attacks.",
      },
      {
        que: "What is helmet?",
        ans: "Helmet is middleware that sets various HTTP headers to help secure Express applications.",
      },
      {
        que: "What is the difference between development and production mode?",
        ans: "Development mode shows detailed error messages. Production mode hides errors and optimizes performance.",
      },
      {
        que: "What is environment variable?",
        ans: "Environment variables store configuration outside code, accessible via process.env, useful for different environments.",
      },
      {
        que: "What is the difference between app.set() and app.use()?",
        ans: "app.set() stores application settings. app.use() mounts middleware functions.",
      },
      {
        que: "What is RESTful API?",
        ans: "RESTful API follows REST principles: stateless, uses HTTP methods (GET, POST, PUT, DELETE), and returns JSON/XML.",
      },
      {
        que: "What is the difference between PUT and PATCH?",
        ans: "PUT replaces entire resource. PATCH updates partial resource. Both are used for updating data.",
      },
      {
        que: "What is async error handling?",
        ans: "Async error handling requires wrapping async route handlers or using async error handling middleware to catch promise rejections.",
      },
      {
        que: "What is Express best practice?",
        ans: "Best practices include using environment variables, error handling, security middleware, code organization, and proper logging.",
      },
    ],
  },
  // MongoDB Interview Questions
  {
    id: "24",
    slug: "mongodb",
    data: [
      {
        que: "What is MongoDB?",
        ans: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents called BSON.",
      },
      {
        que: "What are the key features of MongoDB?",
        ans: "Key features include document-based storage, horizontal scaling, rich queries, indexing, replication, and sharding.",
      },
      {
        que: "What is a document?",
        ans: "A document is a record in MongoDB, stored in BSON format, similar to a row in relational databases but more flexible.",
      },
      {
        que: "What is a collection?",
        ans: "A collection is a group of documents, similar to a table in relational databases but without a fixed schema.",
      },
      {
        que: "What is the difference between MongoDB and SQL databases?",
        ans: "MongoDB is NoSQL, schema-less, and document-based. SQL databases are relational, schema-based, and table-based.",
      },
      {
        que: "What is _id in MongoDB?",
        ans: "_id is a unique identifier field automatically created for each document. It's an ObjectId by default.",
      },
      {
        que: "What is ObjectId?",
        ans: "ObjectId is a 12-byte unique identifier consisting of timestamp, machine ID, process ID, and counter.",
      },
      {
        que: "What are MongoDB data types?",
        ans: "Data types include String, Integer, Boolean, Double, Array, Object, Date, Null, ObjectId, Binary Data, and more.",
      },
      {
        que: "What is embedding vs referencing?",
        ans: "Embedding stores related data in the same document. Referencing stores references to other documents. Embedding is for one-to-few, referencing for one-to-many.",
      },
      {
        que: "What is indexing?",
        ans: "Indexes improve query performance by creating data structures that allow faster data retrieval, similar to book indexes.",
      },
      {
        que: "What are the types of indexes?",
        ans: "Index types include single field, compound, multikey (arrays), text, geospatial, and hashed indexes.",
      },
      {
        que: "What is aggregation?",
        ans: "Aggregation processes data records and returns computed results, similar to SQL GROUP BY and aggregate functions.",
      },
      {
        que: "What are aggregation pipeline stages?",
        ans: "Pipeline stages include $match, $group, $project, $sort, $limit, $skip, $unwind, and $lookup for data transformation.",
      },
      {
        que: "What is $lookup?",
        ans: "$lookup performs a left outer join between collections, similar to SQL JOIN, combining data from multiple collections.",
      },
      {
        que: "What is replication?",
        ans: "Replication maintains multiple copies of data across servers, providing redundancy and high availability.",
      },
      {
        que: "What is a replica set?",
        ans: "A replica set is a group of MongoDB servers that maintain the same data set, with one primary and multiple secondaries.",
      },
      {
        que: "What is sharding?",
        ans: "Sharding distributes data across multiple machines (shards) to support horizontal scaling and handle large datasets.",
      },
      {
        que: "What is the difference between find() and findOne()?",
        ans: "find() returns a cursor with multiple documents. findOne() returns a single document or null.",
      },
      {
        que: "What is the difference between update() and save()?",
        ans: "update() modifies existing documents. save() inserts if _id doesn't exist, updates if it does.",
      },
      {
        que: "What is the difference between updateOne() and updateMany()?",
        ans: "updateOne() updates the first matching document. updateMany() updates all matching documents.",
      },
      {
        que: "What are MongoDB operators?",
        ans: "Operators include $set, $unset, $inc, $push, $pull, $gt, $lt, $in, $or, $and, and many more for queries and updates.",
      },
      {
        que: "What is $set operator?",
        ans: "$set sets the value of a field, creating the field if it doesn't exist, used in update operations.",
      },
      {
        que: "What is $push and $pull?",
        ans: "$push adds elements to an array. $pull removes elements from an array matching specified conditions.",
      },
      {
        que: "What is text search?",
        ans: "Text search allows searching for text content in documents using text indexes and $text operator.",
      },
      {
        que: "What is TTL index?",
        ans: "TTL (Time To Live) index automatically removes documents after a specified time period, useful for session data.",
      },
      {
        que: "What is MongoDB Atlas?",
        ans: "MongoDB Atlas is a fully managed cloud database service that handles deployment, scaling, and management of MongoDB.",
      },
      {
        que: "What is Mongoose?",
        ans: "Mongoose is an ODM (Object Document Mapper) for MongoDB and Node.js, providing schema validation and modeling.",
      },
      {
        que: "What is the difference between MongoDB and Mongoose?",
        ans: "MongoDB is the database. Mongoose is a library that provides schema, validation, and easier interaction with MongoDB.",
      },
      {
        que: "What is schema in Mongoose?",
        ans: "Schema defines the structure of documents, including field types, validation rules, and default values.",
      },
      {
        que: "What is a model in Mongoose?",
        ans: "A model is a class compiled from a schema, providing methods to interact with MongoDB collections.",
      },
      {
        que: "What is connection pooling?",
        ans: "Connection pooling maintains a cache of database connections that can be reused, improving performance and reducing overhead.",
      },
    ],
  },
  // PostgreSQL Interview Questions
  {
    id: "25",
    slug: "postgresql",
    data: [
      {
        que: "What is PostgreSQL?",
        ans: "PostgreSQL is an advanced, open-source relational database management system known for reliability and feature richness.",
      },
      {
        que: "What are the key features of PostgreSQL?",
        ans: "Key features include ACID compliance, complex queries, foreign keys, triggers, views, stored procedures, and extensibility.",
      },
      {
        que: "What is the difference between PostgreSQL and MySQL?",
        ans: "PostgreSQL is more feature-rich, supports complex data types, and is ACID compliant. MySQL is simpler and faster for simple queries.",
      },
      {
        que: "What are PostgreSQL data types?",
        ans: "Data types include INTEGER, VARCHAR, TEXT, BOOLEAN, DATE, TIMESTAMP, JSON, JSONB, ARRAY, and custom types.",
      },
      {
        que: "What is the difference between CHAR and VARCHAR?",
        ans: "CHAR is fixed-length, padding with spaces. VARCHAR is variable-length, storing only actual data.",
      },
      {
        que: "What is the difference between TEXT and VARCHAR?",
        ans: "TEXT has no length limit. VARCHAR has a length limit. TEXT is preferred for long strings.",
      },
      {
        que: "What is the difference between JSON and JSONB?",
        ans: "JSON stores exact text. JSONB stores binary format, is faster for queries, and supports indexing.",
      },
      {
        que: "What is a primary key?",
        ans: "A primary key uniquely identifies each row in a table. It cannot be NULL and must be unique.",
      },
      {
        que: "What is a foreign key?",
        ans: "A foreign key is a column that references the primary key of another table, establishing relationships between tables.",
      },
      {
        que: "What is the difference between INNER JOIN and LEFT JOIN?",
        ans: "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from left table and matching rows from right table.",
      },
      {
        que: "What is an index?",
        ans: "An index is a data structure that improves query performance by allowing faster data retrieval, similar to a book index.",
      },
      {
        que: "What are the types of indexes?",
        ans: "Index types include B-tree (default), Hash, GiST, GIN, and BRIN indexes for different use cases.",
      },
      {
        que: "What is a unique index?",
        ans: "A unique index ensures that no two rows have the same value in the indexed column(s), enforcing uniqueness.",
      },
      {
        que: "What is a composite index?",
        ans: "A composite index is an index on multiple columns, useful for queries filtering on multiple columns.",
      },
      {
        que: "What is a view?",
        ans: "A view is a virtual table based on the result of a SQL query, providing a way to simplify complex queries.",
      },
      {
        que: "What is the difference between view and table?",
        ans: "A table stores actual data. A view is a saved query that doesn't store data but presents data from tables.",
      },
      {
        que: "What is a stored procedure?",
        ans: "A stored procedure is a set of SQL statements stored in the database that can be executed repeatedly.",
      },
      {
        que: "What is a trigger?",
        ans: "A trigger is a function that automatically executes when certain events occur (INSERT, UPDATE, DELETE) on a table.",
      },
      {
        que: "What is a transaction?",
        ans: "A transaction is a sequence of operations that are executed as a single unit, following ACID properties.",
      },
      {
        que: "What are ACID properties?",
        ans: "ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (persistent changes).",
      },
      {
        que: "What is the difference between COMMIT and ROLLBACK?",
        ans: "COMMIT saves all changes in a transaction. ROLLBACK undoes all changes in a transaction.",
      },
      {
        que: "What is a subquery?",
        ans: "A subquery is a query nested inside another query, used to return data for the main query.",
      },
      {
        que: "What is the difference between WHERE and HAVING?",
        ans: "WHERE filters rows before grouping. HAVING filters groups after GROUP BY clause.",
      },
      {
        que: "What is GROUP BY?",
        ans: "GROUP BY groups rows with the same values in specified columns, often used with aggregate functions.",
      },
      {
        que: "What are aggregate functions?",
        ans: "Aggregate functions (COUNT, SUM, AVG, MAX, MIN) perform calculations on a set of rows and return a single value.",
      },
      {
        que: "What is the difference between UNION and UNION ALL?",
        ans: "UNION combines results and removes duplicates. UNION ALL combines results including duplicates, which is faster.",
      },
      {
        que: "What is EXPLAIN?",
        ans: "EXPLAIN shows the execution plan of a query, helping to understand performance and optimize queries.",
      },
      {
        que: "What is connection pooling?",
        ans: "Connection pooling maintains a cache of database connections that can be reused, improving performance.",
      },
      {
        que: "What is a sequence?",
        ans: "A sequence is a database object that generates a sequence of numbers, commonly used for auto-incrementing IDs.",
      },
      {
        que: "What is the difference between DELETE and TRUNCATE?",
        ans: "DELETE removes rows one by one and can be rolled back. TRUNCATE removes all rows quickly and cannot be rolled back.",
      },
      {
        que: "What is normalization?",
        ans: "Normalization is the process of organizing data to reduce redundancy and improve data integrity in relational databases.",
      },
    ],
  },
  // GraphQL Interview Questions
  {
    id: "26",
    slug: "graphql",
    data: [
      {
        que: "What is GraphQL?",
        ans: "GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need.",
      },
      {
        que: "What are the key features of GraphQL?",
        ans: "Key features include single endpoint, client-specified queries, strong typing, introspection, and real-time subscriptions.",
      },
      {
        que: "What is the difference between GraphQL and REST?",
        ans: "GraphQL uses a single endpoint with flexible queries. REST uses multiple endpoints with fixed responses. GraphQL reduces over-fetching.",
      },
      {
        que: "What is a schema?",
        ans: "A schema defines the structure of data available in the API, including types, fields, and relationships.",
      },
      {
        que: "What is SDL?",
        ans: "SDL (Schema Definition Language) is the syntax for defining GraphQL schemas using a simple, readable format.",
      },
      {
        que: "What are the three main operations in GraphQL?",
        ans: "The three operations are Query (read data), Mutation (modify data), and Subscription (real-time updates).",
      },
      {
        que: "What is a query?",
        ans: "A query is a read-only operation that fetches data from the server, allowing clients to specify exactly what fields they need.",
      },
      {
        que: "What is a mutation?",
        ans: "A mutation is an operation that modifies data on the server, such as creating, updating, or deleting records.",
      },
      {
        que: "What is a subscription?",
        ans: "A subscription enables real-time updates by maintaining a persistent connection and pushing data to clients when events occur.",
      },
      {
        que: "What is a resolver?",
        ans: "A resolver is a function that handles fetching data for a specific field in the schema, connecting queries to data sources.",
      },
      {
        que: "What is the difference between query and mutation?",
        ans: "Queries are for reading data and are idempotent. Mutations are for modifying data and may have side effects.",
      },
      {
        que: "What are GraphQL types?",
        ans: "Types define the shape of data, including Scalar types (String, Int, Boolean), Object types, and special types (Query, Mutation).",
      },
      {
        que: "What is the difference between scalar and object types?",
        ans: "Scalar types represent leaf values (String, Int). Object types represent objects with fields that can be queried.",
      },
      {
        que: "What is an input type?",
        ans: "An input type is used for passing complex objects as arguments to mutations, similar to object types but for input only.",
      },
      {
        que: "What is introspection?",
        ans: "Introspection allows querying the schema itself, enabling tools to discover available types, fields, and operations.",
      },
      {
        que: "What is the difference between interface and union?",
        ans: "Interface defines common fields that implementing types must have. Union represents one of several possible types.",
      },
      {
        que: "What is field selection?",
        ans: "Field selection allows clients to specify exactly which fields they want in the response, preventing over-fetching.",
      },
      {
        que: "What is N+1 problem?",
        ans: "N+1 problem occurs when a query makes one query plus N additional queries for related data, causing performance issues.",
      },
      {
        que: "What is DataLoader?",
        ans: "DataLoader is a utility for batching and caching database requests, solving the N+1 problem in GraphQL.",
      },
      {
        que: "What is GraphQL fragment?",
        ans: "A fragment is a reusable set of fields that can be included in queries to avoid repetition and improve maintainability.",
      },
      {
        que: "What is alias in GraphQL?",
        ans: "An alias allows renaming the result of a field, useful for querying the same field multiple times with different arguments.",
      },
      {
        que: "What is directive?",
        ans: "Directives modify the execution of queries, such as @include, @skip, and @deprecated for conditional fields.",
      },
      {
        que: "What is Apollo Server?",
        ans: "Apollo Server is a GraphQL server implementation that works with various Node.js frameworks and provides production-ready features.",
      },
      {
        que: "What is GraphQL Playground?",
        ans: "GraphQL Playground is an interactive IDE for exploring GraphQL APIs, allowing you to write queries and see results.",
      },
      {
        que: "What is schema stitching?",
        ans: "Schema stitching combines multiple GraphQL schemas into a single schema, enabling microservices architecture.",
      },
      {
        que: "What is federation?",
        ans: "Federation allows composing a single GraphQL API from multiple GraphQL services, each managing its own schema.",
      },
      {
        que: "What is the difference between schema stitching and federation?",
        ans: "Schema stitching merges schemas at build time. Federation composes schemas at runtime with better separation of concerns.",
      },
      {
        que: "What is error handling in GraphQL?",
        ans: "GraphQL returns errors in a standardized format alongside data, allowing partial success and detailed error information.",
      },
      {
        que: "What is query complexity?",
        ans: "Query complexity measures the computational cost of a query, used to prevent expensive queries and DoS attacks.",
      },
      {
        que: "What is GraphQL best practice?",
        ans: "Best practices include using DataLoader, implementing proper error handling, setting query depth limits, and using fragments.",
      },
    ],
  },
  // Flutter Interview Questions
  {
    id: "27",
    slug: "flutter",
    data: [
      {
        que: "What is Flutter?",
        ans: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      },
      {
        que: "What is Dart?",
        ans: "Dart is the programming language used by Flutter. It's object-oriented, supports both JIT and AOT compilation.",
      },
      {
        que: "What are the key features of Flutter?",
        ans: "Key features include hot reload, single codebase for multiple platforms, rich widgets, excellent performance, and native compilation.",
      },
      {
        que: "What is a widget?",
        ans: "A widget is a building block of Flutter UI. Everything in Flutter is a widget, including layout, styling, and functionality.",
      },
      {
        que: "What is the difference between StatelessWidget and StatefulWidget?",
        ans: "StatelessWidget is immutable and doesn't change. StatefulWidget can change over time and maintains state.",
      },
      {
        que: "What is setState()?",
        ans: "setState() notifies Flutter that the state has changed and triggers a rebuild of the widget tree.",
      },
      {
        que: "What is the widget tree?",
        ans: "The widget tree is the hierarchy of widgets that compose the UI, with parent-child relationships.",
      },
      {
        que: "What is hot reload?",
        ans: "Hot reload allows you to see code changes instantly without losing app state, dramatically improving development speed.",
      },
      {
        que: "What is the difference between hot reload and hot restart?",
        ans: "Hot reload updates code while preserving state. Hot restart restarts the app, losing state but applying all changes.",
      },
      {
        que: "What are Flutter packages?",
        ans: "Packages are reusable code libraries that can be added to Flutter projects via pub.dev, extending functionality.",
      },
      {
        que: "What is pubspec.yaml?",
        ans: "pubspec.yaml is the configuration file that defines project dependencies, assets, and metadata.",
      },
      {
        que: "What is BuildContext?",
        ans: "BuildContext is a handle to the location of a widget in the widget tree, used for accessing theme, media queries, and navigation.",
      },
      {
        que: "What is the difference between const and final?",
        ans: "const is compile-time constant. final is runtime constant. const is more efficient as it's evaluated at compile time.",
      },
      {
        que: "What are Flutter layouts?",
        ans: "Layout widgets (Row, Column, Stack, Container) arrange child widgets in different ways to create UI structure.",
      },
      {
        que: "What is the difference between Row and Column?",
        ans: "Row arranges children horizontally. Column arranges children vertically. Both use main and cross axes.",
      },
      {
        que: "What is Expanded?",
        ans: "Expanded is a widget that takes up available space in a Row or Column, allowing flexible layouts.",
      },
      {
        que: "What is Flexible?",
        ans: "Flexible is similar to Expanded but allows a child to take less than available space, while Expanded takes all available space.",
      },
      {
        que: "What is Navigator?",
        ans: "Navigator manages a stack of routes, enabling navigation between screens using push, pop, and replace operations.",
      },
      {
        que: "What is the difference between Navigator.push() and Navigator.pushReplacement()?",
        ans: "push() adds a new route to the stack. pushReplacement() replaces the current route, preventing back navigation.",
      },
      {
        que: "What is async/await in Dart?",
        ans: "async/await enables asynchronous programming, allowing non-blocking operations using Future and async functions.",
      },
      {
        que: "What is Future?",
        ans: "Future represents a value that will be available later, used for asynchronous operations like API calls.",
      },
      {
        que: "What is Stream?",
        ans: "Stream provides a sequence of asynchronous events over time, useful for handling continuous data like user input or network data.",
      },
      {
        que: "What is State Management?",
        ans: "State management handles app state across widgets. Popular solutions include Provider, Riverpod, Bloc, and GetX.",
      },
      {
        que: "What is Provider?",
        ans: "Provider is a state management solution that uses InheritedWidget to share state across the widget tree efficiently.",
      },
      {
        que: "What is BLoC pattern?",
        ans: "BLoC (Business Logic Component) separates business logic from UI, using streams to handle state changes.",
      },
      {
        que: "What is the difference between StatelessWidget and StatefulWidget performance?",
        ans: "StatelessWidget is more performant as it doesn't rebuild. StatefulWidget rebuilds when setState() is called.",
      },
      {
        que: "What is ListView?",
        ans: "ListView displays a scrollable list of widgets, efficiently rendering only visible items for performance.",
      },
      {
        que: "What is the difference between ListView and ListView.builder?",
        ans: "ListView creates all children at once. ListView.builder creates children lazily, only building visible items.",
      },
      {
        que: "What is GestureDetector?",
        ans: "GestureDetector detects gestures like taps, drags, and swipes, enabling user interaction with widgets.",
      },
      {
        que: "What is the difference between MaterialApp and CupertinoApp?",
        ans: "MaterialApp uses Material Design (Android style). CupertinoApp uses Cupertino design (iOS style).",
      },
      {
        que: "What is Flutter performance optimization?",
        ans: "Optimization includes using const widgets, ListView.builder, Image caching, avoiding unnecessary rebuilds, and profiling with DevTools.",
      },
    ],
  },
  // React Native Interview Questions
  {
    id: "28",
    slug: "react-native",
    data: [
      {
        que: "What is React Native?",
        ans: "React Native is a framework for building native mobile applications using React and JavaScript, sharing code between iOS and Android.",
      },
      {
        que: "What are the key features of React Native?",
        ans: "Key features include cross-platform development, hot reloading, native performance, large ecosystem, and code reusability.",
      },
      {
        que: "What is the difference between React and React Native?",
        ans: "React is for web (uses DOM). React Native is for mobile (uses native components). Both share the same component model.",
      },
      {
        que: "What are React Native components?",
        ans: "Components include View (div), Text (span), Image, ScrollView, FlatList, and many more that map to native UI elements.",
      },
      {
        que: "What is the difference between View and div?",
        ans: "View is React Native's container component (like div in web). It uses Flexbox for layout by default.",
      },
      {
        que: "What is StyleSheet?",
        ans: "StyleSheet creates optimized style objects, similar to CSS but using JavaScript objects with camelCase properties.",
      },
      {
        que: "What is the difference between StyleSheet.create() and inline styles?",
        ans: "StyleSheet.create() validates styles and optimizes performance. Inline styles work but are less performant.",
      },
      {
        que: "What is Flexbox in React Native?",
        ans: "Flexbox is the default layout system in React Native, similar to CSS Flexbox but with some differences (flexDirection defaults to column).",
      },
      {
        que: "What is the difference between ScrollView and FlatList?",
        ans: "ScrollView renders all children at once. FlatList renders items lazily, only showing visible items for better performance.",
      },
      {
        que: "What is navigation in React Native?",
        ans: "Navigation libraries like React Navigation provide routing and navigation between screens, similar to React Router for web.",
      },
      {
        que: "What is React Navigation?",
        ans: "React Navigation is the most popular navigation library for React Native, providing stack, tab, and drawer navigators.",
      },
      {
        que: "What is the difference between Stack Navigator and Tab Navigator?",
        ans: "Stack Navigator provides screen transitions with a stack. Tab Navigator shows multiple screens with tabs at the bottom or top.",
      },
      {
        que: "What is AsyncStorage?",
        ans: "AsyncStorage is a simple, asynchronous, persistent key-value storage system for React Native apps.",
      },
      {
        que: "What is the difference between AsyncStorage and SecureStore?",
        ans: "AsyncStorage stores data in plain text. SecureStore encrypts data, suitable for sensitive information like tokens.",
      },
      {
        que: "What is a bridge in React Native?",
        ans: "The bridge is the communication layer between JavaScript and native code, allowing JavaScript to call native modules.",
      },
      {
        que: "What is the difference between native modules and JavaScript modules?",
        ans: "Native modules are written in native code (Java/Kotlin, Objective-C/Swift). JavaScript modules are written in JavaScript.",
      },
      {
        que: "What is Metro bundler?",
        ans: "Metro is React Native's JavaScript bundler that transforms and bundles your code for development and production.",
      },
      {
        que: "What is hot reloading?",
        ans: "Hot reloading injects new code while keeping app state, allowing you to see changes instantly during development.",
      },
      {
        que: "What is the difference between hot reload and fast refresh?",
        ans: "Fast refresh (React Native 0.61+) is an improved version of hot reload that preserves state and handles errors better.",
      },
      {
        que: "What is the difference between iOS and Android development?",
        ans: "iOS uses Xcode and Swift/Objective-C. Android uses Android Studio and Java/Kotlin. React Native allows writing once for both.",
      },
      {
        que: "What is a native module?",
        ans: "A native module is a bridge between JavaScript and native code, allowing access to platform-specific APIs.",
      },
      {
        que: "What is the difference between Expo and React Native CLI?",
        ans: "Expo provides managed workflow with pre-built native modules. CLI provides bare workflow with full native access.",
      },
      {
        que: "What is Redux in React Native?",
        ans: "Redux is a state management library that maintains application state in a single store, accessible throughout the app.",
      },
      {
        que: "What is Context API?",
        ans: "Context API provides a way to pass data through the component tree without prop drilling, useful for global state.",
      },
      {
        que: "What is the difference between Redux and Context API?",
        ans: "Redux provides more features (middleware, devtools, time-travel). Context API is simpler and built into React.",
      },
      {
        que: "What is React Native performance optimization?",
        ans: "Optimization includes using FlatList, avoiding unnecessary re-renders, using shouldComponentUpdate, and optimizing images.",
      },
      {
        que: "What is the difference between Image and ImageBackground?",
        ans: "Image displays an image. ImageBackground displays an image as a background with child components on top.",
      },
      {
        que: "What is Animated API?",
        ans: "Animated API provides a way to create smooth animations using native driver, improving performance over JavaScript animations.",
      },
      {
        que: "What is the difference between Animated and LayoutAnimation?",
        ans: "Animated provides fine-grained control. LayoutAnimation automatically animates layout changes when state updates.",
      },
      {
        que: "What is React Native debugging?",
        ans: "Debugging tools include React Native Debugger, Flipper, Chrome DevTools, and console.log for troubleshooting.",
      },
      {
        que: "What is code push?",
        ans: "Code push allows updating JavaScript code without releasing a new app version, enabling over-the-air updates.",
      },
    ],
  },
];
