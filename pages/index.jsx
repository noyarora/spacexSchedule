import classes from '../styles/Home.module.css';
import Home from '../containers/Home/Home';
import { formatSpacexData } from '../util/util';

const App = ({ spacexData, errorInfo }) => {
  return (
    <div className={classes.App}>
      <div className={classes.MainBody}>
        <header className={classes.AppHeader}>
          <h1>spaceX launch programs</h1>
        </header>
        <Home rocketList={spacexData} apiError={errorInfo} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const req = await fetch('https://api.spacexdata.com/v3/launches?limit=100');
    const data = await req.json();
    const spacexData = await formatSpacexData(data);

    return {
      props: {
        spacexData,
      },
    };
  } catch (error) {
    return {
      props: {
        spacexData: [],
        errorInfo: error.message,
      },
    };
  }
};

export default App;
