import React from 'react';
import Lazyload from 'react-lazyload';
import PropTypes from "prop-types";
import SatelliteCard from '../satelliteCard/SatelliteCard';
import classes from './SatelliteList.module.css';

const SatelliteList = ({ satellites }) => {
  const listUpdate = satellites.map((val) => (
    <Lazyload className={classes.SatelliteContainer} key={val.mission_name}>
      <SatelliteCard satelliteInfo={val} key={val.mission_name} />
    </Lazyload>
  ));

  return (
    <div className={classes.SatelliteContainer}>
      {listUpdate}
    </div>
  );
};

SatelliteList.propTypes = {
  satellites: PropTypes.array
}

export default SatelliteList;
