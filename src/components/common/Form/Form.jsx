import React, { Component } from 'react';
import DateTime from 'react-datetime';
import Select from 'react-select';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars

import { FIELD_TYPES, generateInitialState, createNewEntityObject } from './helpers';
import { Label } from '../styledComponents';
import ScoreInput from './ScoreInput';

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
    const newEntity = createNewEntityObject(this.state);
    this.props.addEntityRequest(newEntity);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.fields.map(field => {
          if (field.shouldDisplay && !field.shouldDisplay(this.state)) return undefined;
          let fieldComponent;
          switch (field.type) {
            case FIELD_TYPES.TEXT: {
              fieldComponent = (
                <input
                  type="text"
                  name={field.name}
                  value={this.state[field.name]}
                  onChange={this.handleHTMLElementChange}
                />
              );
              break;
            }
            case FIELD_TYPES.SELECT: {
              fieldComponent = (
                <Select
                  value={this.state[field.name]}
                  onChange={this.handleCustomComponentChange(field.name)}
                  options={field.options}
                />
              );
              break;
            }
            case FIELD_TYPES.DATE: {
              fieldComponent = (
                <DateTime
                  timeFormat={false}
                  value={this.state[field.name]}
                  onChange={this.handleCustomComponentChange(field.name)}
                />
              );
              break;
            }
            case FIELD_TYPES.DATETIME: {
              fieldComponent = (
                <DateTime
                  value={this.state[field.name]}
                  onChange={this.handleCustomComponentChange(field.name)}
                />
              );
              break;
            }
            case FIELD_TYPES.SCORE: {
              fieldComponent = (
                <ScoreInput
                  name={field.name}
                  value={this.state[field.name]}
                  onChange={this.handleHTMLElementChange}
                />
              );
              break;
            }
            default:
              return undefined;
          }
          const label = typeof field.label === 'string' ? field.label : field.label(this.state);
          return (
            <Label key={field.name}>
              {label}:
              {fieldComponent}
            </Label>
          )
        })}
        {this.props.isCreatingFlag ? (
          <div>{this.props.loadingMessage}</div>
        ) : (
          <input type="submit" value={this.props.submitButtonText} />
        )}
      </form>
    );
  }
}
