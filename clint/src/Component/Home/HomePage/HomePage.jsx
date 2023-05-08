import { useEffect, useState } from 'react';
import HomePageIcon from '../HomePageIcons/HomePageIcons';
import classes from './HomePage.module.css';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DisplayPost from '../../Posts/Post/DisplayPost/DisplayPost';
import PostForm from '../../Posts/Post/PostForm/PostFort';

const HomePage = (props) => {
  const user = useSelector((state) => state.user.loginUser);
  const [showIcon, setShowIcon] = useState(false);

  return (
    user && (
      <div className={classes.homePageCont}>
        {!showIcon && (
          <FaUser
            className={classes.userIcon}
            onClick={() => setShowIcon(true)}
          />
        )}
        <p className={classes.welcomeText}>
          <span className={classes.welcomeSpan}>
            <span> Welcome-{user?.fname} </span>
            <img src={user?.profilePic} alt='User Profile Pic' />
          </span>
        </p>
        {showIcon && <HomePageIcon setShowIcon={setShowIcon} />}
        <PostForm />
        <DisplayPost />
      </div>
    )
  );
};

export default HomePage;
