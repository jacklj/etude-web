import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

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

const UpcomingPiece = ({
  composerFirstName, composerSurname, largerWork, name, deadline,
}) => (
  <div>
    <Card>
      <Date>{moment(deadline).format('dddd Do MMMM YYYY')}</Date>
      <div>
        <Name>{name}</Name>
        <Composer>{`${largerWork} - ${composerFirstName} ${composerSurname}`}</Composer>
      </div>
    </Card>
  </div>
);

UpcomingPiece.defaultProps = {
  largerWork: undefined,
  deadline: undefined,
};

UpcomingPiece.propTypes = {
  name: PropTypes.string.isRequired,
  composerFirstName: PropTypes.string.isRequired,
  composerSurname: PropTypes.string.isRequired,
  largerWork: PropTypes.string,
  deadline: PropTypes.string,
};

export default UpcomingPiece;
