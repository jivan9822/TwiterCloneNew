import PostDeleteEdit from '../PostDeletEdit/PostDeleteIcon';
import classes from './DisplayPost.module.css';
import PostIcons from './PostIcons';

const DisplayPostHelper = ({ post }) => {
  let content =
    post.content.length > 100
      ? post.content.substring(0, 100) + '...'
      : post.content;
  return (
    <div className={classes.postDisplayCont} key={post.id}>
      <div className={classes.imgDelDiv}>
        <div className={classes.imgPostedBy}>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/twiterimg.appspot.com/o/imagesNew%2Fj_jivanJivan%20-%20Copy.jpg?alt=media&token=48364459-8496-4251-b4c0-0a2d3105fa7a'
            alt='User Profile Pic'
          />
          <p>@{post.postedBy}</p>
        </div>
      </div>
      <div className={classes.delEdtCont}>
        <div className={classes.contentTitle}>
          <h2 className={classes.title}> {post.title.toUpperCase()}</h2>
          <p className={classes.content}>{content}</p>
        </div>
      </div>
      <div className={classes.line}></div>
      <PostIcons />
    </div>
  );
};

export default DisplayPostHelper;
