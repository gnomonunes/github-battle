import React from "react";
import PropTypes from "prop-types";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState({
      username: value
    })
  }

  handleSumit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSumit.bind(this)}>
        <label htmlFor="username" className="header">
          {this.props.label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          onChange={this.handleChange.bind(this)} />
        <button className="button" type="submit">submit</button>
      </form>
    )
  }
}

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default PlayerForm;
