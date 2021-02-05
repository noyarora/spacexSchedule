import React from 'react';
import Filter from '../filter/Filter';
import filterData from '../filterData';
import classes from './SideBar.module.css';

const SideBar = ({ onFilterSelect }) => {
  const renderFilterCards = filterData.map((filter) => (
    <Filter
      filterHeading={filter.name}
      filters={filter.filters}
      filterId={filter.id}
      key={filter.name}
      onFilterChange={(event, filterId) => onFilterSelect(event, filterId)}
    />
  ));

  return (
    <aside className={classes.SideBar}>
      <header>
        <h2>Filters</h2>
      </header>
      {renderFilterCards}
    </aside>
  );
};

export default SideBar;
