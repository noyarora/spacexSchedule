import React, { useState } from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";
import classes from './Filter.module.css';
import { CLEAR_FILTER } from '../constants';

const Filter = ({filterHeading, filters, onFilterChange, filterId}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const onFilterSelectHandler = (optionSelected) => {
    setSelectedOption(optionSelected);
  };

  const filterList = filters.map((filter) => (
    <Button
      btnName={filter}
      btnGroup={filterId}
      key={filter}
      changeFilter={(event) => { 
          onFilterChange(event, filterId); 
          onFilterSelectHandler(event); 
        }}
      selectedFilter={selectedOption}
    />
  ));

  return (
    <div className={classes.FilterBox}>
      <header>
        <h3>{filterHeading}</h3>
      </header>
      {selectedOption && selectedOption !== CLEAR_FILTER
        ? (
          <div className={classes.ClearButton}>
            <Button
                btnName="clear"
                changeFilter={() => { 
                  onFilterChange(CLEAR_FILTER, filterId); 
                  onFilterSelectHandler(CLEAR_FILTER); 
                }}
            />
          </div>
        )
        : null}
      <div className={classes.FilterList}>
        {filterList}
      </div>
    </div>
  );
};

Filter.propTypes = {
  filterHeading: PropTypes.string,
  filterId: PropTypes.string,
  filters: PropTypes.array
};

export default Filter;
