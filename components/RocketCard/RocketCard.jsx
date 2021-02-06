import React from 'react';
import classes from './RocketCard.module.css';
import PropTypes from "prop-types";

const RocketCard = ({ rocketInfo }) => {
  const {
    missionName, flightNumber, missionId, launchYear, launchSuccess, tbd, rocketImage,
  } = rocketInfo;

  return (
    <div className={classes.RocketContainer}>
      <div className={classes.RocketImageBox}>
        <img src={rocketImage} alt={missionName} />
      </div>
      <div className={classes.RocketDetails}>
        <h3>{`${missionName} #${flightNumber}`}</h3>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">misson ids:</span>
          </strong>
          {
            missionId.length === 0
              ? <span className={classes.DetailText}>NA</span>
              : (
                <ul style={{ paddingLeft: '20px' }}>
                  {
                    missionId.map((missionId) => (
                      <li 
                        className={classes.DetailText} 
                        key={missionId}>{missionId}
                      </li>
                    ))
                  }
                </ul>
              )
          }
        </div>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">launch year:</span>
          </strong>
          <span className={classes.DetailText}>{launchYear}</span>
        </div>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">successful launch:</span>
          </strong>
          <span className={classes.DetailText}>{String(launchSuccess)}</span>
        </div>
        <div className={classes.InfoList}>
          <strong>
            <span className="text-capitalize">successful landing:</span>
          </strong>
          <span className={classes.DetailText}>{String(tbd)}</span>
        </div>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketInfo: PropTypes.object
}

export default RocketCard;
