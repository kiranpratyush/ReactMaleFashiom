import React from 'react';
import "./Signin.css"
export function SignIn() {
  return (
    <div className='sign-in'>
      <h2>SIGN IN</h2>
      <form class="form-signin">
        <label for="Email" >Email</label>
        <input type="email" id="Email" class="input" placeholder='xyz@gmail.com' required />
        <label for="Password">Password</label>
        <input type="password" id="Password" class="input" placeholder='Enter your password here' required />
        <button className="btn btn-primary">SIGN IN</button>
      </form>
    </div>
  );
}
