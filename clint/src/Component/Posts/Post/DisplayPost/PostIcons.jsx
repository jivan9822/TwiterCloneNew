import { FaRetweet } from 'react-icons/fa';
import classes from './DisplayPost.module.css';
import PostDeleteEdit from '../PostDeletEdit/PostDeleteIcon';

const PostIcons = (props) => {
  return (
    <div className={classes.IconDiv}>
      <div className={classes.thumbnail}>
        <span className={`material-symbols-sharp ${classes.icon}`}>
          comment
        </span>
        <div className={classes.overlay}>
          <p className={classes.text}>reply</p>
        </div>
      </div>
      <div className={`${classes.thumbnail}`}>
        <FaRetweet
          className={`material-symbols-sharp ${classes.icon} ${classes.retweet}`}
        />
        <div className={classes.overlay}>
          <p className={classes.text}>Not available</p>
        </div>
      </div>
      <div className={classes.thumbnail}>
        <span className={`material-symbols-sharp ${classes.icon}`}>
          thumb_up
        </span>
        <div className={classes.overlay}>
          <p className={classes.text}>like</p>
        </div>
      </div>
      <div className={classes.thumbnail}>
        <span className={`material-symbols-sharp ${classes.icon}`}>
          thumb_down
        </span>
        <div className={classes.overlay}>
          <p className={classes.text}>disLike</p>
        </div>
      </div>
      <div className={classes.thumbnail}>
        <div className={classes.showReply}>
          <span className={`material-symbols-sharp ${classes.icon}`}>
            expand_more
          </span>
          <p> 0 replies</p>
        </div>
        <div className={classes.overlay}>
          <p className={classes.text}>ShowReply</p>
        </div>
      </div>
      <PostDeleteEdit />
    </div>
  );
};

export default PostIcons;
