import { FaFacebookMessenger, FaRetweet, FaHeart } from 'react-icons/fa';
import classes from './DisplayPost.module.css';

const PostIcons = (props) => {
  return (
    <div className={classes.IconDiv}>
      <FaFacebookMessenger className={classes.icon} />
      <FaRetweet className={classes.icon} />
      <FaHeart className={classes.icon} />
      <p className={classes.showReply}>ShowReply</p>
    </div>
  );
};

export default PostIcons;
