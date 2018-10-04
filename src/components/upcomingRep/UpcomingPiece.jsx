import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import { selectPiece } from '../../redux/reduxOrm/selectors/repertoire.selectors';
import { Name, Composer } from '../common/styledComponents';

const Card = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px grey;
  display: inline-flex;
  flex-direction: row;
`;

const Date = styled.div`
  padding-right: 10px;
`;

const UpcomingPiece = ({ deadline, piece }) => {
  const { composer, larger_work: largerWork, name } = piece;
  const { first_name: firstName, surname } = composer;
  return (
    <div>
      <Card>
        <Date>{moment(deadline).format('dddd Do MMMM YYYY')}</Date>
        <div>
          <Name>{name}</Name>
          <Composer>{`${largerWork} - ${firstName} ${surname}`}</Composer>
        </div>
      </Card>
    </div>
  );
};

UpcomingPiece.propTypes = {
  deadline: PropTypes.string.isRequired,
  piece: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, ownProps) => ({
  piece: selectPiece(state, ownProps),
});

export default connect(mapStateToProps)(UpcomingPiece);
