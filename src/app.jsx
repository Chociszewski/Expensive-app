class Indecision extends React.Component {
  constructor() {
    super();
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }
  handleAddOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  handlePick() {
    let random = Math.random() * this.state.options.length;
    let choice = Math.floor(random);
    alert(this.state.options[choice]);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>remove all</button>
        {this.props.options.map(option => (
          <Option option={option} key={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>add option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));
