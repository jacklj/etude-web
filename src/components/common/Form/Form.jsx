import React, { Component } from 'react';

import TextInputSection from './TextInputSection';

const generateInitialState = fields => fields.reduce((initialState, field) => ({
  ...initialState,
  [field.name]: '',
}), {});

export default class Form extends Component {
  constructor(props) {
    super(props);
    // NB all state is assumed to be newlocation fields, so its all dispatched
    // in the addNewLocationRequest action. If you add anything else to the state,
    // change this!
    this.state = generateInitialState(this.props.fields);

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHTMLElementChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleCustomComponentChange(name) {
    return value => this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newEntity = { ...this.state };
    this.props.addEntityRequest(newEntity);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.fields.map(field => (
          <TextInputSection
            key={field.name}
            label={field.label}
            name={field.name}
            value={this.state[field.name]}
            onChange={this.handleHTMLElementChange}
          />
        ))}
        {this.props.isCreatingFlag ? (
          <div>{this.props.loadingMessage}</div>
        ) : (
          <input type="submit" value={this.props.submitButtonText} />
        )}
      </form>
    );
  }
}
