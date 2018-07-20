import React, { Component } from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgb(255, 255, 255);
  display: inline-block;
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px grey;
`;

export const Name = styled.div`
  font-size: 1.1em;
`;

export const TeacherWhoCreatedIt = styled.div`
  color: rgb(60,60,60);
  font-size: 0.9em;
  margin-bottom: 5px;
`;

export const Composer = styled.div`
  color: rgb(60,60,60);
  font-size: 0.9em;
  margin-bottom: 5px;
`;
