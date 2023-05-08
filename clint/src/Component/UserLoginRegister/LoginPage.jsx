import React, { useState } from 'react';
import classes from './LoginRegister.module.css';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../ApiCalls/UserLoginRegistration';

function LoginPage(props) {
  const dispatch = useDispatch();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setUserPass] = useState('');
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onRegClick(false);
  };
  const onUserInputHandler = (e) => {
    const { name, value } = e.target;
    name === 'password' ? setUserPass(value) : setUserName(value);
    if (userName.length > 2 && password.length > 2) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin({ userName, password }));
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <h1 className={classes.heading}>Login</h1>
      <div className={classes.inputDiv}>
        <label className={classes.label} htmlFor='userName'>
          USERNAME
        </label>
        <input
          type='text'
          name='userName'
          value={userName}
          onChange={onUserInputHandler}
        />
      </div>
      <div className={classes.inputDiv}>
        <label className={classes.label} htmlFor='password'>
          PASSWORD
        </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onUserInputHandler}
        />
      </div>
      <button
        type='submit'
        disabled={btnDisabled}
        className={btnDisabled ? classes.btnDis : classes.btn}
      >
        Login
      </button>
      <p className={classes.regBtn} onClick={onClickHandler}>
        Register?
      </p>
    </form>
  );
}

export default LoginPage;
