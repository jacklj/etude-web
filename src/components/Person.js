import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import personPlaceholderImage from '../assets/personPlaceholderImage.png'

const Avatar = styled.img`
  width:50px;
  height: 50px;
  border-radius: 25px;
  display: block;
`;

class Person extends Component {
  render() {
    return (
      <div>
        <b>People</b>
        <Avatar src={personPlaceholderImage} />
        <div>{this.props.firstName} {this.props.surname}</div>
        <div>{this.props.role}</div>
      </div>
    );
  }
}

Person.defaultProps = {
  role: undefined,
};

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default Person;
