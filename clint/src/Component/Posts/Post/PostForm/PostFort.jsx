import { useRef } from 'react';
import classes from './postform.module.css';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const user = useSelector((state) => state.user.loginUser);
  const postRef = useRef();
  const onEnterHandler = (e) => {
    if (e.key === 'Enter') submitHandler(e);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const post = postRef.current.value;
    if (post.length > 1) {
      console.log(post);
    }
    postRef.current.value = '';
  };
  return (
    <div className={classes.postFormContainer}>
      <div className={classes.postForm}>
        <div className={classes.container}>
          <img src={user.profilePic} className={classes.img} />
          <textarea
            className={classes.textarea}
            autoFocus
            ref={postRef}
            placeholder='Write your post here'
            onKeyUp={onEnterHandler}
          />
        </div>
        <button onClick={submitHandler}>Tweet</button>
      </div>
    </div>
  );
};

export default PostForm;
