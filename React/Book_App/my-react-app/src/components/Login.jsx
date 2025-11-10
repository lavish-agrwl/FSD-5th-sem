import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{textAlign:"center", marginTop:"80px"}}>
      <h2>Login</h2>
      <input type="text" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
