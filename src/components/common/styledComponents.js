import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
`;

export const ItemsOrNotesContainer = styled.div`
  max-width: 600px;
`;

export const Card = styled.div`
  background-color: rgb(255, 255, 255);
  display: block;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px 0px grey;
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

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  font-size: 1.2em;
`;
