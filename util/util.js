import { CLEAR_FILTER } from '../components/constants';

export const  createSearchString = (yearFilter, launchSuccessFilter, landSuccessFilter,) => {
    let string = "?";
    if (yearFilter && yearFilter !== CLEAR_FILTER) {
        string += `&launch_year=${ yearFilter }`;
    }
    if (launchSuccessFilter && launchSuccessFilter !== CLEAR_FILTER) {
        string += `&launch_success=${ launchSuccessFilter }`;
    }
    if (landSuccessFilter && landSuccessFilter !== CLEAR_FILTER) {
        string += `&land_success=${ landSuccessFilter }`;
    }

    return string;
}

export const fetchData = (queryString) => {
    return fetch(`https://api.spacexdata.com/v3/launches?limit=100${queryString}`)
            .then(req => req.json())
}

export const formatSpacexData = (data) => {
    return data.map(rocket => {
        return {
            missionName: rocket.mission_name, 
            flightNumber: rocket.flight_number, 
            missionId: rocket.mission_id, 
            launchYear: rocket.launch_year, 
            launchSuccess: rocket.launch_success, 
            tbd: rocket.tbd, 
            rocketImage: rocket.links.mission_patch_small
        }
    });
}