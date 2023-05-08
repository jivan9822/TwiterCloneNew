import classes from './PostDeleteIcon.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

const PostDeleteEdit = (props) => {
  return (
    <div className={classes.editDeleteBtn}>
      <FaTrash fill='black' className={classes.delBtn} />
      <FaEdit fill='black' className={classes.edtBtn} />
    </div>
  );
};
export default PostDeleteEdit;
