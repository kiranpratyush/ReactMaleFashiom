import React from 'react';
import { SignIn ,SignUp,Header} from '../../export';
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
