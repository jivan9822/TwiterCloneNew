import HomePage from './Component/Home/HomePage/HomePage';
import classes from './App.module.css';
import UserLoginOrRegister from './Component/UserLoginRegister/UserLoginOrRegister';

function App() {
  return (
    <div className={classes.container}>
      <HomePage />
      <UserLoginOrRegister />
    </div>
  );
}

export default App;
