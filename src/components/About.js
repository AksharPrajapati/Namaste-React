import React from "react";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);

    this.interval = setInterval(() => {
      console.log("Interval");
    }, 1000);

    console.log("Parent ComponentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Content Of About Us</h2>
        <User name="AK" />
        <User name="PK" />
      </div>
    );
  }
}

export default About;
