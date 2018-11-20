import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectComposersForDropdown } from '../../redux/people/people.selectors';
import { addNewRepertoireRequest } from '../../redux/repertoire/repertoire.actions';
import { repertoireTypesForSelectInput, renderLargerWorkLabel, isOperaFromState } from '../../services/display';
import { FIELD_TYPES } from '../common/Form/helpers';
import Form from '../common/Form/Form';

const AddNewRepertoire = props => (
  <div>
    <h2>Add new repertoire</h2>
    <Form
      fields={[
        {
          label: 'name',
          name: 'name',
          type: FIELD_TYPES.TEXT,
        },
        {
          label: 'larger work',
          name: 'larger_work',
          type: FIELD_TYPES.TEXT,
        },
        {
          label: 'composer',
          name: 'composer_id',
          type: FIELD_TYPES.SELECT,
          options: props.composers,
        },
        {
          label: 'composition date',
          name: 'composition_date',
          type: FIELD_TYPES.DATE,
        },
        {
          label: 'character that sings it',
          name: 'character_that_sings_it',
          type: FIELD_TYPES.TEXT,
          shouldDisplay: isOperaFromState,
        },
        {
          label: renderLargerWorkLabel,
          name: 'type',
          type: FIELD_TYPES.SELECT,
          options: repertoireTypesForSelectInput,
        },
      ]}
      addEntityRequest={props.addNewRepertoireRequest}
      isCreatingFlag={props.isCreatingRepertoire}
      loadingMessage="Adding repertoire..."
      submitButtonText="Add repertoire"
    />
  </div>
);


AddNewRepertoire.defaultProps = {};

AddNewRepertoire.propTypes = {
  addNewRepertoireRequest: PropTypes.func.isRequired,
  composers: PropTypes.array.isRequired, // eslint-disable-line  react/forbid-prop-types
  isCreatingRepertoire: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  composers: selectComposersForDropdown(state),
  isCreatingRepertoire: state.flags.repertoire.isCreatingRepertoire,
});

const mapDispatchToProps = {
  addNewRepertoireRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewRepertoire);
