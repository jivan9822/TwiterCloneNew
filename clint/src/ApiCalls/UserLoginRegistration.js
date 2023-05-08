import axios from 'axios';
import { userAction } from '../Store/Slices/User-Slice';
const PROXY = import.meta.env.VITE_PROXY;

export const userRegistration = (formData, fun) => {
  axios
    .post(`${PROXY}/user/registration`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      fun(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userLogin = (data) => {
  return (dispatch) => {
    axios
      .post(
        `${PROXY}/user/login`,
        { data },
        { withCredentials: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        const user = res.data.data.user;
        dispatch(userAction.setLoginUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const isLogin = () => {
  return (dispatch) => {
    axios
      .get(`${PROXY}/user/isLogin`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        const user = res.data.data.user;
        dispatch(userAction.setLoginUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    axios
      .get(`${PROXY}/user/logOut`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        dispatch(userAction.setUserLogout());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
