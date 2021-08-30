import React from 'react';

const LoginForm = () => (
  <div>
    <h2>Login</h2>
    <input type="text" placeholder="Enter email here"/>
    <input type="password" placeholder="******"/>
    <button>Login</button>
    <p>Dont have an account?</p>
    <a href="./signup">Sign Up</a>
    <p>Enter as a guest</p>
  </div>
);

export default LoginForm;