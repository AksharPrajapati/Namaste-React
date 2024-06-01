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



