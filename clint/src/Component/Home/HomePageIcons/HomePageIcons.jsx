import {
  FaHome,
  FaTwitter,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';
import classes from './HomePageIcons.module.css';

const HomePageIcon = (props) => {
  return (
    <div className={classes.Icons}>
      <FaTwitter
        className={classes.icon}
        fill='blue'
        size={40}
        onClick={() => props.setShowIcon(false)}
      />
      <FaHome
        className={classes.icon}
        size={40}
        onClick={() => props.setShowIcon(false)}
      />
      <FaSearch className={classes.icon} size={40} />
      <FaBell className={classes.icon} size={40} />
      <FaEnvelope className={classes.icon} size={40} />
      <FaUser className={classes.icon} size={40} />
      <FaSignOutAlt className={classes.icon} size={40} />
    </div>
  );
};
export default HomePageIcon;
