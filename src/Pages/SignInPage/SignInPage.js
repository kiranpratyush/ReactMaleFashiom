import React from 'react';
import { SignIn } from '../../Components/SignIn/SignIn';
import { SignUp } from '../../Components/SignUp/SignUp';
import { Header } from '../../Components/Header/Header';
import './SignInpage.css';
export function SignInPage() {
  return (
    <>
      <Header />
      <main className="auth-main">
        <SignIn />
        <SignUp />
      </main>
    </>
  );
}
