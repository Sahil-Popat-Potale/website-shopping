import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const CategoryItem = ({ category, onClick }) => {
  return (
    <ListItem button onClick={() => onClick(category.name)}>
      <ListItemText primary={category.name} />
    </ListItem>
  );
};

export default CategoryItem;
