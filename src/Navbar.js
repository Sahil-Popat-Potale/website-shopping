import React from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import categories from './categories.json';

const Navbar = () => {
  const [open, setOpen] = React.useState({});

  const handleClick = (category) => {
    setOpen((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const renderSubcategories = (subcategories) => (
    <List component="div" disablePadding>
      {subcategories.map((sub, index) => (
        <ListItem button key={index} sx={{ pl: 4 }}>
          <ListItemText primary={sub} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <List>
      {categories.map((category, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleClick(category.name)}>
            <ListItemText primary={category.name} />
            {open[category.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[category.name]} timeout="auto" unmountOnExit>
            {category.subcategories.map((sub, subIndex) => (
              <div key={subIndex}>
                <ListItem button onClick={() => handleClick(sub.name)} sx={{ pl: 4 }}>
                  <ListItemText primary={sub.name} />
                  {open[sub.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open[sub.name]} timeout="auto" unmountOnExit>
                  {renderSubcategories(sub.subcategories)}
                </Collapse>
              </div>
            ))}
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Navbar;
