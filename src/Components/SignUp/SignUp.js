import React from 'react';
import './Signup.css';
export function SignUp() {
  return (
    <div class="sign-up">
      <h2>SIGN UP</h2>
      <form class="form-signup">
        <label for="Name">Name</label>
        <input type="text" id="Name" class="input" placeholder='Enter your name here' required />
        <label for="Email">Email</label>
        <input type="email" id="Email" class="input" placeholder ="xyz@gmail.com" required />
        <label for="Password">Password</label>
        <input type="password" id="Password" class="input" placeholder='Enter your password here' required />
        <label for="confirm">confirm password</label>
        <input type="password" id="confirm" class="input" placeholder='Confirm your password' required />
        <button className="btn btn-primary">SIGN UP</button>
      </form>
    </div>
  );
}
