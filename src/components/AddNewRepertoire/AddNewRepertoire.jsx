import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import Select from 'react-select';

import { Label } from '../common/styledComponents';
import { selectComposersForDropdown } from '../../redux/people/people.selectors';
import { addNewRepertoireRequest } from '../../redux/repertoire/repertoire.actions';
import { getAllPeopleRequest } from '../../redux/people/people.actions';
import { repertoireTypesForSelectInput } from '../../services/display';

class AddNewRepertoire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      largerWork: '',
      composer: undefined,
      compositionDate: undefined,
      characterThatSingsIt: '',
      type: undefined,
    };

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllPeopleRequest();
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

    const newRepertoire = {
      name: this.state.name,
      largerWork: this.state.largerWork,
      composer: this.state.composer.value,
      compositionDate: this.state.compositionDate,
      characterThatSingsIt: this.state.characterThatSingsIt,
      type: this.state.type.value,
    };
    this.props.addNewRepertoireRequest(newRepertoire);
  }

  render() {
    const { name, largerWork, composer, compositionDate, characterThatSingsIt, type } = this.state;
    return (
      <div>
        <h2>Add new repertoire</h2>
        <form onSubmit={this.handleSubmit}>
          <Label>
            name:
            <input type="text" name="name" value={name} onChange={this.handleHTMLElementChange} />
          </Label>
          <Label>
            composer:
            <Select
              value={composer}
              onChange={this.handleCustomComponentChange('composer')}
              options={this.props.composers}
            />
          </Label>
          <Label>
            type:
            <Select
              value={type}
              onChange={this.handleCustomComponentChange('type')}
              options={repertoireTypesForSelectInput}
            />
          </Label>
          <Label>
            character that sings it:
            <input
              type="text"
              name="characterThatSingsIt"
              value={characterThatSingsIt}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          <Label>
            larger work:
            <input
              type="text"
              name="largerWork"
              value={largerWork}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          <Label>
            composition date:
            <DateTime
              timeFormat={false}
              value={compositionDate}
              onChange={this.handleCustomComponentChange('compositionDate')}
            />
          </Label>

          {this.props.isCreatingRepertoire ? (
            <div>Adding repertoire...</div>
          ) : (
            <input type="submit" value="Add repertoire" />
          )}
        </form>
      </div>
    );
  }
}

AddNewRepertoire.defaultProps = {};

AddNewRepertoire.propTypes = {
  addNewRepertoireRequest: PropTypes.func.isRequired,
  getAllPeopleRequest: PropTypes.func.isRequired,
  composers: PropTypes.array.isRequired, // eslint-disable-line  react/forbid-prop-types
  isCreatingRepertoire: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  composers: selectComposersForDropdown(state),
  isCreatingRepertoire: state.flags.repertoire.isCreatingRepertoire,
});

const mapDispatchToProps = {
  addNewRepertoireRequest,
  getAllPeopleRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewRepertoire);
