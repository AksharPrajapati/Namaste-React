# ---------------- Episode 02 -------------------- #

# NPM
- It manages packages that we use in our JS applications, but it does not stand for Node Package Manager. We can install any package using npm as it holds a large number of packages.

# Parcel/Webpack
- Parcel is a package that can bundle our application and prepare it for production builds. It creates `dist` and `.parcel-cache` directories to manage the build process and enable fast reloading. It is used to make our application faster.

# .parcel-cache
- It caches the files at build time and then uses them during hot reloading.

# npx
- It is used to execute packages. For example, `npx parcel index.html`.

# Tree Shaking
- It removes unnecessary or unused parts of the code.

# HMR
- Hot Module Reloading. It immediately reflects changes in the UI.

# .gitignore
- Files that we don't need to push to Git can be added to this file.

# package.json / package-lock.json
- `package.json` is a configuration file for npm that lists all the packages we use in our application.
- `package-lock.json` has the exact versions and detailed information about those packages.

# node_modules
- It contains the source code of packages and their dependencies.

# dist 
- The build folder.

# browserslist
- We can add a list of browsers on which we need to ensure our application runs.

# ^ - caret 
- Automatically upgrades minor package versions.

# ~ - tilde 
- Automatically upgrades patch versions. Not recommended to use for major versions.

# Parcel Benefits:

- Dev build
- Hot Reloading (HMR)
- File Watching Algorithm (C++)
- Image Optimization
- Code Splitting
- Minification
- Local server
- Multi-build according to browsers
- Diagnostics
- Bundling
- Production build
- HTTPS
- Tree Shaking
- Compression

# ------------------------- Episode 03 ----------------------- #


# JSX
- It's a combination of HTML-like syntax and JavaScript, which allows you to create elements within components with some logic. However, it's not HTML and not part of React.

# React.createElement
- We can create React elements using this method, and at the end, it gives us a normal JS object. JSX, on the other hand, returns a list of React elements.

# How JSX Works
- JSX => React Elements => Object Representation => HTML 

# Babel
- It's a JavaScript compiler that can transpile JSX code into React elements which the JS engine or browser can understand.

# Functional Components
- It's a normal function that can return JSX elements.

# Composing Components
- It's the practice of using one component inside another component.
 
 # --------------- Episode 04 -------------- #

# Is JSX Mandatory for React?
- JSX is not mandatory for React as we can create React elements using `React.createElement`. However, JSX ultimately returns React elements and significantly reduces the development burden. It makes our code more readable and allows us to embed JavaScript within HTML-like elements. Thus, while not mandatory, it is recommended to use JSX in React functional components.

# Is ES6 Mandatory for React?
- ECMAScript defines different versions of JavaScript. It is beneficial to use the latest versions like ES6 to take advantage of improvements and enhancements in the code and its outcomes.

# How Can I Write Comments in JSX?
- Single-line comments can be written with `//` and multi-line comments with `/* */`.

# What is `<React.Fragment></React.Fragment>` and `<> </>`?
- When we need to wrap multiple components or elements without adding an extra parent element, we can use `React.Fragment` or the shorthand `<> </>`. React recommends using fragments to avoid unnecessary HTML elements.

# What is the Virtual DOM?
- The Virtual DOM is a concept implemented by React. It is a lightweight copy of the real DOM. When changes occur in React, the virtual DOM updates only the specific parts that need to be re-rendered, improving performance and efficiency.

# What is Reconciliation in React?
- Reconciliation is the process by which React updates the virtual DOM and synchronizes it with the real DOM, ensuring that only the necessary changes are applied.

# What is React Fiber?
- React Fiber is the reimplementation of React's core algorithm. It improves the rendering performance and responsiveness of complex applications by breaking rendering work into smaller units and prioritizing updates.

# Why Do We Need Keys in React? When Do We Need Keys in React?
- Keys are needed in React when rendering lists of elements, especially when using `map` or loops. Keys help React identify which items have changed, been added, or removed, allowing efficient re-rendering of only the changed parts rather than the entire list.

# Can We Use Index as Keys in React?
- Yes, we can use indexes as keys, but it is not recommended. Using unique and stable keys (like unique IDs) is a better practice as it helps React optimize re-renders more effectively.

# What are Props in React?
- Props are arguments passed into React components. They allow data to be passed from parent to child components, facilitating component reuse and dynamic rendering.

# What is a Config Driven UI?
- A config-driven UI is one that renders based on configuration data, typically obtained from an API. It allows the UI to be dynamically built and updated based on the provided data.


# --------------- Episode 05 -------------- #

## What is the difference between Named Exports, Default Exports, and * as export?

- **Named Exports:** When you want to export multiple components, use named exports. You import them using curly braces (`{}`).

- **Default Export:** When you want to export a single default component, use the default export syntax. You can only have one default export per module.

- **`* as export`:** This imports everything from a library or package. Use this with caution, as it can lead to naming conflicts and make your code harder to understand.

## What is the importance of the `config.js` file?

- The `config.js` file is used to store static content, such as configuration settings, API keys, or other data that doesn't change frequently. This helps to:

    - Improve code readability by separating data from logic.
    - Make configuration easier to manage and maintain.
    - Organize related data for better maintainability.

## What are React Hooks?

React Hooks are functions that let you "hook into" React state and lifecycle features from functional components. Hooks allow you to manage state, perform side effects, and access context without using class components.

Here's a breakdown of some key concepts:

- **State Management:** Hooks are often used for state management in React. When you update state using a hook like `useState`, React compares the previous virtual DOM with the current one and efficiently updates only the necessary parts of the real DOM.

- **Virtual DOM:** The virtual DOM is a lightweight representation of the actual DOM. React uses a diffing algorithm to compare changes between the previous and current virtual DOMs. This allows for efficient updates to the real DOM, improving performance.

## Why do we need the `useState` Hook?

The `useState` hook is a fundamental React Hook that allows you to manage component state in functional components. It returns an array containing the current state value and a function to update it. This is essential for responding to user interactions and dynamically updating the UI based on data changes.

# -------------- Episode 06 -------------- #

## What is a Microservice Architecture?

Microservices architecture involves dividing a large application into smaller, independent services. These services can focus on specific functionalities, such as frontend, backend, SMS, email, or any other domain-specific task. Here's an analogy: Imagine a restaurant kitchen. The chef (backend) prepares the main course, while other stations handle appetizers (frontend), drinks (SMS service), and desserts (email service). Each station works independently but contributes to the overall dining experience.

## What is Monolithic Architecture?

A monolithic architecture, in contrast, refers to a single, self-contained application. It houses all functionalities within one codebase and deployment unit. This approach can be simpler initially, but as the application grows, it can become difficult to manage, maintain, and scale. Think of a fast-food restaurant where everything is prepared by a single cook—it might be efficient for a small operation, but not so much for a large chain.

## Monolith vs. Microservices: Key Differences

| Feature                    | Monolith                                         | Microservices                                    |
|----------------------------|----------------------------------------------------|--------------------------------------------------|
| Codebase                   | Single, centralized codebase                        | Separate codebases for each service               |
| Deployment                  | Deployed as a whole unit                          | Independently deployable services                 |
| Scalability                  | Challenging to scale individual functionalities     | Easy to scale individual services                 |
| Maintainability              | Difficult to manage and maintain a large codebase | Easier to maintain smaller, focused codebases     |
| Fault Tolerance             | Failure in one part can affect the entire application | Isolated failures have less impact on other services|
| Development Complexity      | Complex development process due to large codebase | Simpler development due to smaller codebases      |

## Why Use the `useEffect` Hook?

The `useEffect` hook is a React hook that allows you to perform side effects in functional components. This includes fetching data from APIs, subscribing to events, or performing any other actions that require state changes or interactions outside the component itself. Think of it as a way to manage the lifecycle of your components and execute code after rendering or during specific phases like cleanup.

## What is Optional Chaining?

Optional chaining, introduced in ES6 (ECMAScript 2015), provides a safe way to access nested properties or call methods on objects that might be undefined or null. This helps avoid errors when working with potentially missing data. For example:

```javascript
const user = { profile: { name: "John" } };
const fullName = user?.profile?.name; // Safe way to access name, avoiding errors if profile or name is undefined