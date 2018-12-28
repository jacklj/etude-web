import React from 'react';

import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const NavigationItem = ({ link, onClick, icon, text }) => {
  let jsx;
  if (link) {
    jsx = (
      <Link to={link}>
        <ListItem button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    );
  } else if (onClick) {
    jsx = (
      <ListItem button onClick={onClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  }
  return jsx;
};

export default NavigationItem;
