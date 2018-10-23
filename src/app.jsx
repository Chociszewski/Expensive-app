class Indecision extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <p>put your life in the hands</p>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>option 1</p>
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return <div>add options</div>;
  }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));
