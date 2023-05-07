import { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
const UserLoginOrRegister = () => {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div>
      {isRegister ? (
        <LoginPage onRegClick={setIsRegister} />
      ) : (
        <RegisterPage onLoginClick={setIsRegister} />
      )}
    </div>
  );
};
export default UserLoginOrRegister;
