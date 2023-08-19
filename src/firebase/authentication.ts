import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from ".";
import { IUser } from "@typing/interfaces/user.interface";
import { Roles } from "@typing/enums";
import { ILoginForm } from "@typing/interfaces/login-form.interface";

export const AUTH_ERRORS = {
  "auth/wrong-password":
    "The email and password you entered did not match our records. Please double-check and try again",
  "auth/user-not-found":
    "The email and password you entered did not match our records. Please double-check and try again",
  "auth/email-already-in-use":
    "A user already exists with this e-mail address.",
  "auth/invalid-email": "The e-mail is invalid",
};
export const createAccountWithEmailAndPassword = (form: any) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(async () => {
        const userData: IUser = {
          displayName: `${form.firstname} ${form.surname}`,
          email: form.email,
          studyline: form.studyline,
          isAdmin: false,
          roles: [Roles.RegularAccount, Roles.Tender],
          phone: null,
          active: true,
          photoUrl: "",
        };
        saveUser(userData)
          .then(() => resolve(userData))
          .catch(reject);
      })
      .catch(reject);
  });
};

export const loginWithEmailAndPassword = ({ email, password }: ILoginForm) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(resolve)
      .catch(reject);
  });
};

export const logOut = () => {
  return auth.signOut();
};

export const sendResetPasswordEmail = ({ email }) => {
  return sendPasswordResetEmail(auth, email);
};

export const saveUser = async (userData: IUser) => {
  const ref = doc(db, "/users", userData.id);
  return await setDoc(ref, userData);
};

export const getUser = async (userId: string): Promise<IUser> => {
  const ref = doc(db, "/users", userId);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists) {
    throw Error("User does not exists");
  }
  return snapshot.data() as IUser;
};
