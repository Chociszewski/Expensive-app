import React from "react";
import AddOption from "./AddOption.jsx";
import Action from "./Action.jsx";
import Header from "./Header.jsx";
import Options from "./Options.jsx";
import OptionModal from "./OptionModal.jsx";

class Indecision extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing at all
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      return this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    }
  };

  handleCloseOptionModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handlePick = () => {
    const random = Math.random() * this.state.options.length;
    const choice = Math.floor(random);
    const option = this.state.options[choice];
    console.log(option);

    this.setState(() => ({
      selectedOption: option
    }));
  };

  render() {
    const subtitle = "Put your life in the hands";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeOptionModal={this.handleCloseOptionModal}
        />
      </div>
    );
  }
}

export default Indecision;
