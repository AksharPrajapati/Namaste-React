{
  /* <div id="parent">
        <div id="child">
            <h1>H1</h1>
            <h2>H2</h2>
        </div>
         <div id="child1">
            <h1>H1</h1>
            <h2>H2</h2>
        </div>
    </div> */
}

// const heading = React.createElement("h1", {}, "Hello World from React!");

const nestetdDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "H1"),
    React.createElement("h2", {}, "H2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1"),
    React.createElement("h2", {}, "H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestetdDiv);
