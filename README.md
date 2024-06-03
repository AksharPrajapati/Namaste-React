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


