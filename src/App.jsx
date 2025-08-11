/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useState } from 'react';

import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { Table } from './Components/Table';
import { FilterPanel } from './Components/FilterPanel';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(c => c.id === product.categoryId);

  const user = usersFromServer.find(u => u.id === category.ownerId);

  return {
    ...product,
    categoryName: category.title,
    categoryTitle: `${category.icon} - ${category.title}`,
    userName: user.name,
    userSex: user.sex,
  };
});

function preparedProducts(data, sortFilterdName, selectedCategories, query) {
  let readyDataOfProducts = [...data];

  if (selectedCategories.length > 0) {
    readyDataOfProducts = readyDataOfProducts.filter(product =>
      selectedCategories.includes(product.categoryName),
    );
  }

  if (query.trim() !== '') {
    const lowerQuery = query.toLowerCase();

    readyDataOfProducts = readyDataOfProducts.filter(
      product =>
        product.categoryName.toLowerCase().includes(lowerQuery) ||
        product.userName.toLowerCase().includes(lowerQuery),
    );
  }

  return readyDataOfProducts;
}

export const App = () => {
  const [sortFilterdName, setFilterName] = useState('All');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState('');

  const visibleProducts = preparedProducts(
    products,
    sortFilterdName,
    selectedCategories,
    query,
  );

const handlerClickGroupBy = (categoryName) => {
  if (categoryName === "All") {
    setSelectedCategories([]);
    return;
  }

  setSelectedCategories(prev => {
    if (prev.includes(categoryName)) {
      return prev.filter(c => c !== categoryName);
    } else {
      return [...prev, categoryName];
    }
  });
};



  const handlerClickName = value => {
    setFilterName(value);
  };

  const handlerQuery = value => {
    setQuery(value);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <FilterPanel
          categories={categoriesFromServer}
          handlerClickGroupBy={handlerClickGroupBy}
          selectedCategories={selectedCategories}
          query={query}
          handlerQuery={handlerQuery}
          handlerClickName={handlerClickName}
          sortFilterdName={sortFilterdName}
        />

        <div className="box table-container">
          {visibleProducts.length === 0 && (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          )}
          <Table visibleProducts={visibleProducts} />
        </div>
      </div>
    </div>
  );
};
