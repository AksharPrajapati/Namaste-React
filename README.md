# ---------------- Episode 02 --------------------

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

# ------------------------- Episode 03 -----------------------

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

# --------------- Episode 04 --------------

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

# --------------- Episode 05 --------------

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

# -------------- Episode 06 --------------

## What is a Microservice Architecture?

- **Microservice architecture** involves dividing a large application into smaller, independent services, each focusing on specific functionalities like frontend, backend, SMS, or email. It allows for independent deployment and scaling of each service.

## What is Monolithic Architecture?

- **Monolithic architecture** refers to a single, self-contained application housing all functionalities in one codebase. It can be simpler initially but becomes harder to manage, maintain, and scale as the application grows.

## Monolith vs. Microservices: Key Differences

| Feature                | Monolithic                                      | Microservices                                 |
| ---------------------- | ----------------------------------------------- | --------------------------------------------- |
| Codebase               | Single, centralized codebase                    | Separate codebases for each service           |
| Deployment             | Deployed as a whole unit                        | Independently deployable services             |
| Scalability            | Challenging to scale individual functionalities | Easy to scale individual services             |
| Maintainability        | Difficult to manage and maintain                | Easier to maintain smaller, focused codebases |
| Fault Tolerance        | Failure affects the entire application          | Isolated failures have less impact            |
| Development Complexity | Complex due to a large codebase                 | Simpler due to smaller, focused codebases     |

## Why Use the `useEffect` Hook?

- The `useEffect` hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or performing actions that interact with state changes or external components. It manages the lifecycle of components and executes code after rendering or during specific phases like cleanup.

## What is Optional Chaining?

- **Optional chaining** allows safe access to nested properties or methods on objects that might be

`undefined` or `null`. This avoids errors when dealing with potentially missing data. Example:

```javascript
const user = { profile: { name: "John" } };
const fullName = user?.profile?.name; // Safely accesses 'name', avoiding errors if 'profile' or 'name' is undefined
```

# -------------- Episode 07 --------------

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

# -------------- Episode 08 --------------

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

# -------------- Episode 09 --------------

## When and why do we need lazy()?

- lazy() is used to load components lazily, which helps reduce the initial bundle size and improve performance, especially in large-scale applications like Make My Trip. It loads components only when needed, enhancing efficiency.

## What is suspense?

- Suspense is a component that provides a boundary for lazy-loaded components, showing a fallback content (e.g., a loading spinner) while the lazy component is loading.

## Why do we get this error: "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition"? How does suspense fix this error?

- This error occurs because React tries to load a lazy component that is not rendered during the initial rendering. The component takes time to load, and React shows a loading indicator in the meantime. Using suspense allows React to wait for the component to load without blocking the entire UI, preventing this error and providing a better user experience.

## Advantages and disadvantages of using this code-splitting pattern?

- Advantages:

Reduced Initial Load Time: Loads only necessary components initially, speeding up initial rendering.
Improved Performance: Decreases the amount of code that needs to be downloaded and parsed.
Better User Experience: Provides faster and more responsive UI interactions.

- Disadvantages:

Initial Setup Complexity: Requires additional setup and configuration.
Potential Loading Delays: May introduce delays when loading components for the first time.
Debugging Challenges: Can complicate debugging due to the asynchronous loading of components.

## When and why do we need suspense?

- Suspense is needed when we are using lazy() to load components. It provides a fallback UI while the component is loading, improving the user experience by preventing a blank or incomplete UI during the load time.

# -------------- Episode 10 --------------

## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

- content: Specifies paths to files where Tailwind should look for class names.
  theme: Contains the default design system (colors, fonts, etc.).
  extend: Allows extending the default theme with custom values.
  plugins: Lists custom plugins to add or modify functionality.

## Why do we have .postcssrc file?

- The .postcssrc file is used to configure PostCSS, which processes your CSS. It specifies plugins and settings for transforming CSS, enabling features like autoprefixing, minification, and Tailwind integration.

# -------------- Episode 11 --------------

## What is prop drilling?

- Prop drilling in React is the process of passing data from a parent component to deeply nested child components through multiple levels of intermediary components.

## What is lifting the state up?

- Lifting state up in React refers to moving the shared state to the closest common ancestor component of the components that need to access the state, allowing them to share and update the state efficiently. (pass setState to child component)

## What is Context Provider and Context Consumer?

- In React, a Context Provider is a component that supplies a context value to its descendants, while a Context Consumer is a component that subscribes to and uses the context value provided.

## If you don’t pass a value to the provider does it take the default value?

- Yes, if you don't pass a value to the Context Provider, it will use the default value defined in the createContext function.

# -------------- Episode 12 --------------

## useContext vs Redux

- useContext provides a way to pass data through the component tree without prop drilling, while Redux is a state management library for managing global state in a predictable manner.

## Advantage of using Redux Toolkit over Redux.

- Redux Toolkit simplifies Redux development with pre-configured tools, reducing boilerplate code and improving developer productivity.

## Explain Dispatcher.

- In Redux, the dispatcher is responsible for sending actions to the store, which then updates the state based on the action's type and payload.

## Explain Reducer.

- In Redux, a reducer is a pure function that takes the current state and an action as arguments and returns a new state based on the action type.

## Explain slice.

- In Redux Toolkit, a slice is a collection of Redux reducer logic and actions for a specific feature of your application, defined using the createSlice function.

## Explain selector.

- In Redux, a selector is a function that extracts and returns a specific piece of state from the Redux store.

## Explain createSlice and the configuration it takes.

- In Redux Toolkit, createSlice is a function that generates a slice of the Redux state, along with the actions and reducers. It takes a configuration object with the following properties:

name: A string that names the slice.
initialState: The initial state for the slice.
reducers: An object containing reducer functions for handling actions.
extraReducers (optional): An object or callback function for handling actions defined outside of the slice.

# -------------- Episode 13 --------------

## What are different types for testing?

- The different types of testing include unit testing, integration testing, system testing, acceptance testing, performance testing, and security testing.

## What is Enzyme?

- Enzyme is a JavaScript testing utility for React that makes it easier to test the output of React components by providing a consistent API for traversing and manipulating the rendered component trees.

## Enzyme vs React Testing Library

- Enzyme and React Testing Library are both tools for testing React components, but they have different philosophies and approaches:

- Enzyme:

- Created by Airbnb.
- Allows for shallow, mount, and render methods to test React components.
- Provides extensive APIs to manipulate and assert the rendered component tree.
- Focuses on testing component internals and implementation details.

- React Testing Library:

- Created by Kent C. Dodds.
- Emphasizes testing the component's behavior from the user's perspective.
- Encourages writing tests that focus on how users interact with the application.
- Provides simple and lightweight utilities for querying the DOM in a way similar to how a user would.
- Discourages testing implementation details, promoting maintainable tests that are less brittle.

## What is Jest and why do we use it?

- Jest is a JavaScript testing framework developed by Facebook. It is commonly used for testing JavaScript applications, especially those built with React.
