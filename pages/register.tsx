import { HorizontalNavbarLayout } from "@components/index";
import { RegisterForm } from "@components/register-form";

const Register = () => {
  return (
    <HorizontalNavbarLayout>
      <main className="container">
        <RegisterForm />
      </main>
    </HorizontalNavbarLayout>
  );
};

export default Register;
