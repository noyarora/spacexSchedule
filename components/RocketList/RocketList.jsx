import React from 'react';
import Lazyload from 'react-lazyload';
import PropTypes from "prop-types";
import RocketCard from '../RocketCard/RocketCard';
import Loader from '../Loader/Loader';
import classes from './RocketList.module.css';

const RocketList = ({ rockets }) => {
  const listUpdate = rockets.map((val) => (
    <Lazyload 
      className={classes.RocketContainer} 
      key={val.rocketId + val.flightNumber}
      offset={-100}
      placeholder={<Loader />}>
      <RocketCard rocketInfo={val} />
    </Lazyload>
  ));

  return (
    <div className={classes.RocketContainer}>
      {listUpdate}
    </div>
  );
};

RocketList.propTypes = {
  rockets: PropTypes.array
}

export default RocketList;
