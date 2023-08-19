import { LandingPageLayout } from "@components/landing-page-layout";
import { RegisterForm } from "@components/register-form";

const Register = () => {
  return (
    <LandingPageLayout showFooter={false}>
      <main className="container">
        <RegisterForm />
      </main>
    </LandingPageLayout>
  );
};

export default Register;
