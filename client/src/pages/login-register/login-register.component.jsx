import React from 'react';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './login-register.styles.scss';

const LoginRegister = () => (
  <div className="login-register">
    <Login />
    <SignUp />
  </div>
);

export default LoginRegister;
