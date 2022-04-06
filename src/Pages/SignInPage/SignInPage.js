import React from 'react';
import { SignIn } from '../../export';
import { SignUp } from '../../export';
import { Header } from '../../export';
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
