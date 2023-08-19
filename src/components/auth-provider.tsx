import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { shallow } from "zustand/shallow";
import { getUser } from "../firebase/authentication";
import { useStore } from "@store/store";

const AuthProvider = ({ children }) => {
  const { setUser, setIsAuthLoading, isAuthLoading } = useStore(
    (state) => ({
      user: state.user,
      setUser: state.setUser,
      setIsAuthLoading: state.setIsAuthLoading,
      isAuthLoading: state.isAuthLoading,
    }),
    shallow
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authState) => {
      if (authState && authState.uid) {
        const user = await getUser(authState.uid);
        setUser(user);
        setIsAuthLoading(false);
      } else {
        setUser(null);
        setIsAuthLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  if (isAuthLoading) return null;
  return <>{children}</>;
};

export default AuthProvider;
