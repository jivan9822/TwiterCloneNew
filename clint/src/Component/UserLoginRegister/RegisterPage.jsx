import classes from './LoginRegister.module.css';

const RegisterPage = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onLoginClick(true);
  };
  return (
    <form className={classes.form}>
      <div className={classes.inputDiv}>
        <label htmlFor='fname'>FirstName: </label>
        <input type='text' name='fname' required />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='lname'>LastName: </label>
        <input type='text' name='lname' required />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='userName'>UserName: </label>
        <input type='text' name='userName' required />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='email'>Email Id: </label>
        <input type='email' name='email' required />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' required />
      </div>
      <div className={classes.inputDiv}>
        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input type='password' name='confirmPassword' required />
      </div>
      <div className={classes.inputDiv}>
        <label>
          Profile Picture:
          <input type='file' />
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
