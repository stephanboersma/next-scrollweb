import { LandingPageLayout } from "@components/landing-page-layout";
import { LoginForm } from "@components/login-form";
import {
  AUTH_ERRORS,
  loginWithEmailAndPassword,
} from "@firebase/authentication";
import { ILoginForm } from "@typing/interfaces/login-form.interface";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (loginFormData: ILoginForm) => {
    setIsLoading(true);
    try {
      await loginWithEmailAndPassword(loginFormData);
      setIsLoading(false);
      router.push("/tender");
    } catch (err) {
      console.table(err);
      setLoginErrorMessage(AUTH_ERRORS[err.code]);
      setIsLoading(false);
    }
  };
  return (
    <LandingPageLayout showFooter={false}>
      <main className="container">
        <LoginForm
          isLoading={isLoading}
          errorMessage={loginErrorMessage}
          onSubmit={handleLogin}
        />
      </main>
    </LandingPageLayout>
  );
};

export default Login;
