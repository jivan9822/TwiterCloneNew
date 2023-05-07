import { useState } from 'react';
import classes from './LoginRegister.module.css';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../../ApiCalls/UserLoginRegistration';

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [userInputs, setUserInput] = useState({
    lname: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: null,
  });
  const handleInputChange = (e) => {
    let { name, type, files, value } = e.target;
    value = type === 'file' ? files[0] : value;
    setUserInput((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(userInputs).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(userInputs);
    dispatch(userRegistration(formData));
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onLoginClick(true);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.inputDiv}>
        <label htmlFor='fname'>FirstName: </label>
        <input type='text' name='fname' required onChange={handleInputChange} />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='lname'>LastName: </label>
        <input type='text' name='lname' onChange={handleInputChange} />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='userName'>UserName: </label>
        <input type='text' name='userName' onChange={handleInputChange} />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='email'>Email Id: </label>
        <input type='email' name='email' onChange={handleInputChange} />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' onChange={handleInputChange} />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input
          type='password'
          name='confirmPassword'
          pattern={`^${userInputs.password}$`}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.inputDiv}>
        <label className={classes.fileLabel}>
          <span>📤Upload Picture</span>
          <input type='file' name='profilePic' onChange={handleInputChange} />
        </label>
      </div>

      <button type='submit' className={classes.btn}>
        Register
      </button>
      <p className={classes.regBtn} onClick={onClickHandler}>
        Already Register?
      </p>
    </form>
  );
};

export default RegisterPage;
