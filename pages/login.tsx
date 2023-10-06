import { HorizontalNavbarLayout } from "@modules/common";
import { LoginForm } from "@modules/auth/login-form";
import { AUTH_ERRORS, loginWithEmailAndPassword } from "@fire/authentication";
import { useStore } from "@store/store";
import { ILoginForm } from "@typing/interfaces/login-form.interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

const Login = () => {
  const { isAuthLoading, setIsAuthLoading, user } = useStore(
    (state) => ({
      isAuthLoading: state.isAuthLoading,
      setIsAuthLoading: state.setIsAuthLoading,
      user: state.user,
    }),
    shallow
  );
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>(null);
  const router = useRouter();

  const handleLogin = async (loginFormData: ILoginForm) => {
    setIsAuthLoading(true);
    try {
      await loginWithEmailAndPassword(loginFormData);
    } catch (err) {
      console.table(err);
      setLoginErrorMessage(AUTH_ERRORS[err.code]);
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    if (user && !isAuthLoading) {
      router.push("/member");
    }
  }, [user, isAuthLoading]);

  return (
    <HorizontalNavbarLayout>
      <main className="container">
        <LoginForm
          isLoading={isAuthLoading}
          errorMessage={loginErrorMessage}
          onSubmit={handleLogin}
        />
      </main>
    </HorizontalNavbarLayout>
  );
};

export default Login;
