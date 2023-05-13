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
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    user && (
      <div className={classes.homePageCont}>
        {!showIcon && (
          <div className={classes.addDiv}>
            <span
              onClick={() => setShowIcon(true)}
              className={`${classes.userIcon} material-symbols-sharp`}
            >
              account_circle
            </span>
            <div className={classes.addPostDiv}>
              <h1>ADD-POST</h1>
              <span className={classes.welcomeSpan}>
                <span> Welcome-{user?.fname} </span>
                <img src={user?.profilePic} alt='User Profile Pic' />
              </span>
            </div>
          </div>
        )}
        {showIcon && <HomePageIcon setShowIcon={setShowIcon} />}
        {showPostForm && <PostForm />}
        <DisplayPost />
      </div>
    )
  );
};

export default HomePage;
