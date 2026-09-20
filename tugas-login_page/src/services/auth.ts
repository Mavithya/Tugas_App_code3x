import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  const credential =
    GoogleAuthProvider.credentialFromResult(result);

  const accessToken = credential?.accessToken;

  if (!accessToken) {
    throw new Error("Google access token was not returned.");
  }

  return {
    user: result.user,
    accessToken,
  };
};