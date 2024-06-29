import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + "Child Contructor");
  }

  componentDidMount() {
    console.log(this.props.name + "ComponentDidMount");
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();

      console.log(data);
    }, 3000);
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h4>Bardoli</h4>
        <h5>Akprajapati03</h5>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default User;
