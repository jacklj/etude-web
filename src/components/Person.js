import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import personPlaceholderImage from '../assets/personPlaceholderImage.png'

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: block;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Role = styled.div`
  font-size: 0.9em;
  color: rgb(70,70,70);
`;

class Person extends Component {
  render() {
    return (
      <Container>
        <Avatar src={personPlaceholderImage} />
        <div>{this.props.firstName} {this.props.surname}</div>
        <Role>{this.props.role}</Role>
      </Container>
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
