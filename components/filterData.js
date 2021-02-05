import {
  FILTER_LAUNCH_YEAR,
  FILTER_LAUNCH_SUCCESSFUL,
  FILTER_LANDING_SUCCESSFUL,
} from './constants';

const filterData = [
  {
    name: 'launch year',
    filters: [
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    id: FILTER_LAUNCH_YEAR,
  },
  {
    name: 'successful launch',
    filters: ['true', 'false'],
    id: FILTER_LAUNCH_SUCCESSFUL,
  },
  {
    name: 'successful landing',
    filters: ['true', 'false'],
    id: FILTER_LANDING_SUCCESSFUL,
  },
];

export default filterData;
