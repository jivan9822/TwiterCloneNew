import classes from './PostDeleteIcon.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

const PostDeleteEdit = (props) => {
  return (
    <div className={classes.editDeleteBtn}>
      <div className={classes.thumbnail}>
        <span className={`material-symbols-sharp ${classes.iconDelE}`}>
          delete
        </span>
        <div className={classes.overlay}>
          <p className={classes.text}>Delete</p>
        </div>
      </div>
      <div className={classes.thumbnail}>
        <span className={`material-symbols-sharp ${classes.iconDelE}`}>
          edit
        </span>
        <div className={classes.overlay}>
          <p className={classes.text}>Edit</p>
        </div>
      </div>
    </div>
  );
};
export default PostDeleteEdit;
