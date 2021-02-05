import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import SideBar from '../../components/SideBar/SideBar';
import Loader from '../../components/Loader/Loader';
import MetaHead from '../../components/MetaHead';
import SatelliteList from '../../components/SatelliteList/SatelliteList';
import { createSearchString, fetchData, formatSpacexData } from '../../util/util';
import classes from './Home.module.css';
import {
  FILTER_LAUNCH_YEAR,
  FILTER_LAUNCH_SUCCESSFUL,
  FILTER_LANDING_SUCCESSFUL,
} from '../../components/constants';

const Home = ({ rocketList, router, apiError }) => {
  const [satelliteData, setSatelliteData] = useState([]);
  const [yearFilter, setYearFilter] = useState('');
  const [launchFilter, setLaunchFilter] = useState('');
  const [landFilter, setLandFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const errorMsg = 'An unexpected error occured. Please try again';

  const fetchRocketData = (queryString) => {
    setIsLoading(true);
    fetchData(queryString)
      .then((data) => {
        const fomattedData = formatSpacexData(data);
        setSatelliteData(fomattedData);
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage(errorMsg);
      });
  };

  const setFilters = (filterId, optionSelected) => {
    switch (filterId) {
      case FILTER_LAUNCH_YEAR:
        setYearFilter(optionSelected);
        break;
      case FILTER_LAUNCH_SUCCESSFUL:
        setLaunchFilter(optionSelected);
        break;
      case FILTER_LANDING_SUCCESSFUL:
        setLandFilter(optionSelected);
        break;
      default:
    }
  };

  const filterChangeHandler = (optionSelected, filterId) => {
    setFilters(filterId, optionSelected);
  };

  useEffect(() => {
    if (yearFilter || landFilter || launchFilter) {
      const searchString = createSearchString(yearFilter, launchFilter, landFilter);
      router.replace(searchString);
      fetchRocketData(searchString);
    }
  }, [yearFilter, launchFilter, landFilter]);

  useEffect(() => {
    router.replace('');
    setSatelliteData(rocketList);
    apiError ? setErrorMessage(errorMsg) : undefined;
    setIsLoading(false);
  }, []);

  return (
    <div className={classes.MainContainer}>
      <MetaHead />
      <div className={classes.SideBarBox}>
        <SideBar onFilterSelect={filterChangeHandler} />
      </div>
      <div className={`${classes.SatelliteListBox} ${isLoading || satelliteData.length === 0 ? classes.NoData : ''}`}>
        {isLoading
          ? <Loader />
          : satelliteData.length === 0
            ? <p>{errorMessage || 'There are no records for your selected query'}</p>
            : <SatelliteList satellites={satelliteData} />}
      </div>
    </div>
  );
};

export default withRouter(Home);
