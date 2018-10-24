class Visible extends React.Component {
  constructor() {
    super();
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      visible: false,
      text: "some text"
    };
  }
  handleButton() {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  }
  render() {
    return (
      <div>
        <h1>Vidibility toggle</h1>
        <button onClick={this.handleButton}>
          {this.state.visible ? "hide details" : "show details"}
        </button>
        {this.state.visible && <p>{this.state.text}</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById("app"));

// Raw method without react class

// console.log("siema");

// const appRoot = document.getElementById("app");

// let visible = false;
// let text = "cos do pokazania";

// const showDetails = () => {
//   visible = !visible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility toggle</h1>
//       <button onClick={showDetails}>
//         {!visible ? "show details" : "hide details"}
//       </button>
//       {visible && <p>{text}</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
