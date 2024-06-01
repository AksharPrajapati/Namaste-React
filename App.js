import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "H1"),
  React.createElement("h2", {}, "H2"),
  React.createElement("h3", {}, "H3"),
]);

const HeaderJSX = (
  <div className="title">
    <h1>H1 JSX</h1>
    <h2>H2 JSX</h2>
    <h3>H3 JSX</h3>
  </div>
);

const HeaderComponent = () => (
  <div className="title">
    {header}
    {HeaderJSX}
    <h1>H1 Component</h1>
    <h2>H2 Component</h2>
    <h3>H3 Component</h3>
  </div>
);

const heading = <h1>Namaste React from JSX!</h1>;

const Title = () => <h1>Functional Title</h1>;

const Title1 = () => <h1>Functional Title1</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      {heading}
      {Title1()}
      <Title />
      <h1>Namaste from Functional Component </h1>
    </div>
  );
};

const HeaderComponent1 = () => {
  return (
    <div className="container">
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717261200&semt=sph"
        alt="logo"
        height={100}
        width={100}
      />
      <input
        className="search-bar"
        width={100}
        name="searchbar"
        placeholder="searchbar"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
        alt="icon"
        width={100}
        height={100}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent1 />);
