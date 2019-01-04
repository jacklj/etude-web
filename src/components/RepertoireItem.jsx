import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Name, Composer } from './common/styledComponents';
import { selectRepItemForRepItemPage } from '../redux/repertoire/repertoire.selectors';
import { getRepertoireRequest } from '../redux/repertoire/repertoire.actions';

class RepertoireItem extends Component {
  componentDidMount() {
    // getRepertoireItemRequest to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific repItem page, so all repItems aren't already in the
    // store)
    console.log("props", this.props)
    this.props.getRepertoireRequest(this.props.repertoireId);
  }

  render() {
    const { repItem } = this.props;

    if (!repItem) return null;
    const {
      larger_work: largerWork,
      name,
      composer,
      composition_date: compositionDate,
      character_that_sings_it: characterThatSingsIt,
      created_at: createdAt,
      updated_at: updatedAt,
      type,
    } = repItem;
    const { first_name: firstName, surname } = composer;
    return (
      <div>
        <Name>{name}</Name>
        {composer && <Composer>{`${largerWork} - ${firstName} ${surname}`}</Composer>}
        <div>{compositionDate}</div>
        <div>{characterThatSingsIt}</div>
        <div>{createdAt}</div>
        <div>{updatedAt}</div>
        <div>{type}</div>
      </div>
    );
  }
}

RepertoireItem.defaultProps = {
  repItem: undefined,
};

RepertoireItem.propTypes = {
  repertoireId: PropTypes.number.isRequired,
  repItem: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  getRepertoireRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // N.B. ownProps isn't recursive - just props supplied from 'above'
  repertoireId: Number(ownProps.match.params.id),
  repItem: selectRepItemForRepItemPage(state, ownProps),
});

const mapDispatchToProps = {
  getRepertoireRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepertoireItem);
