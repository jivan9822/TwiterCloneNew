import { useEffect, useState } from 'react';
import HomePageIcon from '../HomePageIcons/HomePageIcons';
import classes from './HomePage.module.css';
import { FaUser } from 'react-icons/fa';

const HomePage = (props) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className={classes.homePageCont}>
      {!showIcon && (
        <FaUser
          className={classes.userIcon}
          onClick={() => setShowIcon(true)}
        />
      )}
      <p className={classes.welcomeText}>Welcome-Jivan</p>
      {showIcon && <HomePageIcon setShowIcon={setShowIcon} />}
    </div>
  );
};

export default HomePage;
