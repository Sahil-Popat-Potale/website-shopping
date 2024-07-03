import React, { useState, useEffect } from 'react';
import ExpandableList from './components/ExpandableList';
import categoriesData from './categories.json';
import { TextField } from '@mui/material';

function App() {
  const [categories, setCategories] = useState(categoriesData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCategories = (categories, term) => {
    return categories
      .filter(category => category.name.toLowerCase().includes(term) || (category.subcategories && filteredCategories(category.subcategories, term).length > 0))
      .map(category => ({
        ...category,
        subcategories: category.subcategories ? filteredCategories(category.subcategories, term) : []
      }));
  };

  useEffect(() => {
    setCategories(filteredCategories(categoriesData, searchTerm));
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <TextField
        label="Search Categories"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ExpandableList items={categories} />
    </div>
  );
}

export default App;
