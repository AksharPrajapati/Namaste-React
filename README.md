# ---------------- Episode 02 -------------------- #

## NPM
- **NPM** stands for **Node Package Manager**. It manages packages for our JavaScript applications and holds a large number of packages. We can install any package using `npm`.

## Parcel/Webpack
- **Parcel** is a package bundler that prepares our application for production. It creates `dist` and `.parcel-cache` directories to manage the build process and enable fast reloading, making our application faster.
- **Webpack** is another popular module bundler that can bundle JavaScript files for usage in a browser.

## .parcel-cache
- The `.parcel-cache` directory caches files during the build process and uses them for hot reloading.

## npx
- `npx` is used to execute packages, for example, `npx parcel index.html`.

## Tree Shaking
- Tree shaking is a technique that removes unnecessary or unused parts of the code.

## HMR (Hot Module Replacement)
- **Hot Module Replacement (HMR)** immediately reflects changes in the UI without requiring a full page reload.

## .gitignore
- The `.gitignore` file is used to specify which files and directories should be ignored by Git and not pushed to a repository.

## package.json / package-lock.json
- `package.json` is a configuration file for npm that lists all the dependencies and scripts for our application.
- `package-lock.json` records the exact versions of dependencies and their sub-dependencies used in the project.

## node_modules
- The `node_modules` directory contains the source code of packages and their dependencies.

## dist
- The `dist` directory is the build folder where production-ready code is placed.

## browserslist
- The `browserslist` configuration allows us to specify the list of browsers on which we need to ensure our application runs.

## ^ - caret
- The caret `^` symbol in package versions allows automatic upgrades for minor and patch versions.

## ~ - tilde
- The tilde `~` symbol allows automatic upgrades for patch versions. It is not recommended for major versions.

### Benefits of Parcel:
- **Development Build**: Efficient builds during development.
- **Hot Reloading (HMR)**: Instant reflection of changes.
- **File Watching Algorithm**: Uses a fast file-watching mechanism written in C++.
- **Image Optimization**: Optimizes images for performance.
- **Code Splitting**: Divides code into chunks for better performance.
- **Minification**: Reduces file sizes by removing unnecessary code.
- **Local Server**: Serves the application locally for development.
- **Multi-Build for Browsers**: Builds optimized versions for different browsers.
- **Diagnostics**: Provides helpful build diagnostics.
- **Bundling**: Combines multiple files into a single bundle.
- **Production Build**: Optimized for deployment.
- **HTTPS**: Supports HTTPS for secure local development.
- **Tree Shaking**: Removes unused code.
- **Compression**: Reduces the size of files for faster load times.

# ------------------------- Episode 03 ----------------------- #

## JSX
- **JSX** is a combination of HTML-like syntax and JavaScript, allowing you to create elements within components. It is not HTML and is not inherently part of React.

## React.createElement
- `React.createElement` is used to create React elements, returning a normal JavaScript object. JSX ultimately compiles down to `React.createElement` calls.

## How JSX Works
- JSX is transpiled to React elements, which are then converted to an object representation, and finally rendered as HTML.

## Babel
- **Babel** is a JavaScript compiler that transpiles JSX into JavaScript that browsers can understand.

## Functional Components
- Functional components are simple functions that return JSX elements.

## Composing Components
- Composing components involves using one component inside another to build complex UIs.

# --------------- Episode 04 -------------- #

## Is JSX Mandatory for React?
- JSX is not mandatory for React. We can use `React.createElement` to create React elements directly. However, JSX makes the code more readable and allows embedding JavaScript within HTML-like syntax, reducing development effort. While not required, it is recommended for its readability and ease of use in React components.

## Is ES6 Mandatory for React?
- ES6 (ECMAScript 2015) and newer versions are not mandatory for React, but they offer improved syntax and features that simplify code and enhance performance.

## How Can I Write Comments in JSX?
- Single-line comments in JSX can be written using `//` and multi-line comments using `/* */` within curly braces `{}`.

## What is `<React.Fragment></React.Fragment>` and `<> </>`?
- `React.Fragment` or the shorthand `<> </>` allows us to group multiple elements without adding extra nodes to the DOM. It's useful for avoiding unnecessary HTML elements.

## What is the Virtual DOM?
- The **Virtual DOM** is a lightweight, in-memory representation of the real DOM. React updates the virtual DOM and efficiently reconciles it with the real DOM, minimizing the number of direct manipulations required and improving performance.

## What is Reconciliation in React?
- **Reconciliation** is the process by which React updates the virtual DOM and synchronizes changes with the real DOM, ensuring that only the necessary updates are made.

## What is React Fiber?
- **React Fiber** is a reimplementation of React's core algorithm designed to improve the rendering performance and responsiveness of complex applications by breaking rendering work into smaller, manageable units and prioritizing updates.

## Why Do We Need Keys in React? When Do We Need Keys in React?
- Keys are essential in React for identifying which items have changed, been added, or removed when rendering lists of elements. They help React optimize re-rendering by identifying which items need updates.

## Can We Use Index as Keys in React?
- Using indexes as keys in React is possible but not recommended. Using unique and stable keys, such as unique IDs, is a better practice, helping React efficiently track item changes.

## What are Props in React?
- **Props** are arguments passed into React components. They allow data to flow from parent to child components, enabling component reuse and dynamic rendering.

## What is a Config-Driven UI?
- A config-driven UI is one that renders based on configuration data, often obtained from an API, allowing dynamic updates and rendering based on provided data.

# --------------- Episode 05 -------------- #

## What is the difference between Named Exports, Default Exports, and `* as export`?
- **Named Exports**: Use named exports to export multiple components or values. They are imported using curly braces `{}`.
- **Default Export**: Use a default export for a single, primary component or value. Only one default export is allowed per module.
- **`* as export`**: Imports everything from a module. Use with caution to avoid naming conflicts and maintain code clarity.

## What is the importance of the `config.js` file?
- The `config.js` file stores static content, such as configuration settings, API keys, or data that doesn't change frequently. It improves code readability, eases configuration management, and helps organize related data for better maintainability.

## What are React Hooks?
- **React Hooks** are functions that let you "hook into" React state and lifecycle features from functional components. Hooks allow you to manage state, perform side effects, and access context without using class components.

### Key Concepts of Hooks:
- **State Management**: Hooks like `useState` are used for managing state. React updates only the necessary parts of the DOM when state changes.
- **Virtual DOM**: Hooks work with the virtual DOM to efficiently update the real DOM by comparing changes between previous and current states.

## Why do we need the `useState` Hook?
- The `useState` hook is fundamental for managing state in functional components. It returns an array containing the current state value and a function to update it, allowing components to respond to user interactions and update the UI dynamically.

# -------------- Episode 06 -------------- #

## What is a Microservice Architecture?
- **Microservice architecture** involves dividing a large application into smaller, independent services, each focusing on specific functionalities like frontend, backend, SMS, or email. It allows for independent deployment and scaling of each service.

## What is Monolithic Architecture?
- **Monolithic architecture** refers to a single, self-contained application housing all functionalities in one codebase. It can be simpler initially but becomes harder to manage, maintain, and scale as the application grows.

## Monolith vs. Microservices: Key Differences

| Feature                    | Monolithic                                      | Microservices                                    |
|----------------------------|-------------------------------------------------|--------------------------------------------------|
| Codebase                   | Single, centralized codebase                    | Separate codebases for each service              |
| Deployment                 | Deployed as a whole unit                        | Independently deployable services                |
| Scalability                | Challenging to scale individual functionalities | Easy to scale individual services                |
| Maintainability            | Difficult to manage and maintain                | Easier to maintain smaller, focused codebases    |
| Fault Tolerance            | Failure affects the entire application          | Isolated failures have less impact               |
| Development Complexity     | Complex due to a large codebase                 | Simpler due to smaller, focused codebases        |

## Why Use the `useEffect` Hook?
- The `useEffect` hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or performing actions that interact with state changes or external components. It manages the lifecycle of components and executes code after rendering or during specific phases like cleanup.

## What is Optional Chaining?
- **Optional chaining** allows safe access to nested properties or methods on objects that might be

 `undefined` or `null`. This avoids errors when dealing with potentially missing data. Example:

```javascript
const user = { profile: { name: "John" } };
const fullName = user?.profile?.name; // Safely accesses 'name', avoiding errors if 'profile' or 'name' is undefined
```

# -------------- Episode 07 -------------- #

## What are various ways to add images into our App?
- Using the `<img src="" alt="">` HTML tag.
- Using CSS with `background-image: url('path')`.

## What would happen if we do `console.log(useState())`?
- It returns an array with an `undefined` value at the 0th index and a function to update the state at the 1st index.

## How will `useEffect` behave if we don't add a dependency array?
- If no dependency array is provided, `useEffect` runs continuously on every render, potentially causing an infinite loop.

## What is SPA?
- A **Single Page Application (SPA)** loads a single HTML page and dynamically updates content as the user interacts with the app, rendering different components without reloading the entire page.

## What is the difference between Client-Side Routing and Server-Side Routing?
- **Client-Side Routing**: Routes are handled on the client side, enabling instant updates without reloading the page.
- **Server-Side Routing**: Routes are fetched from the server, requiring a full page reload for navigation.


# -------------- Episode 08 -------------- #

## How do you create Nested Routes react-router-dom cofiguration ?
- Using child routing

## What is the order of life cycle method calls in Class Based Components ?
- Constructor -> Rendering -> ComponentDidMount() -> ComponentDidUpdate() -> ComponentWillUnMount()
- First Render all UI and then only call ComponentDidMount() as it's taking time to load data.

## Why do we use componentDidMount? 
- Called after Mounting/Rendering. We will use it to handle APIs and it calls once when we insatnce is created.

## Why do we use componentWillUnmount?
- To cleanup the code or unmount the component.

## Why do we use super(props) in constructor?
- it allows us to use this keyword from parent class of React.

