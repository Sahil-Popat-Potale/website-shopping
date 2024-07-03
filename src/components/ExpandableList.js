import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ExpandableList = ({ items }) => {
  const [open, setOpen] = useState({});

  const handleClick = (name) => {
    setOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <List>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleClick(item.name)}>
            <ListItemText primary={item.name} />
            {open[item.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {item.subcategories && (
            <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
              <ExpandableList items={item.subcategories} />
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

export default ExpandableList;
