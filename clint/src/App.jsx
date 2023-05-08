import HomePage from './Component/Home/HomePage/HomePage';
import classes from './App.module.css';
import UserLoginOrRegister from './Component/UserLoginRegister/UserLoginOrRegister';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLogin } from './ApiCalls/UserLoginRegistration';

function App() {
  const user = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogin());
  }, []);

  return (
    <div className={classes.container}>
      <HomePage />
      {!user && <UserLoginOrRegister />}
    </div>
  );
}

export default App;
