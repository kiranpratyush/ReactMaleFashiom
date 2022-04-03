import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

async function signUp(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const userName = user.user;
    return userName;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw error;
  }
}
async function signIn(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const userName = user.user;
    return userName;
  } catch (error) {
    throw error;
  }
}

export { signIn, signUp };
