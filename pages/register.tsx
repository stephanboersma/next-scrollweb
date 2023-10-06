import { HorizontalNavbarLayout } from "@modules/common";
import { RegisterForm } from "@modules/auth/register-form";
import { AUTH_ERRORS, createAccountWithEmailAndPassword } from "@fire/index";
import { useStore } from "@store/store";
import { IRegisterForm } from "@typing/interfaces/register-form.interface";
import { IStudyline } from "@typing/interfaces/studyline.interface";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { shallow } from "zustand/shallow";

type Props = {
  studylines: IStudyline[];
};

const Register = ({ studylines }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useStore(
    (state) => ({
      setUser: state.setUser,
    }),
    shallow
  );

  const router = useRouter();

  const checkIfEmailIsInvited = async (email: string): Promise<boolean> => {
    const isInvited = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/invites?email=${email}}`
    );
    const { error } = await isInvited.json();
    if (error) {
      toast.error(error);
      return false;
    }
    return true;
  };

  const setEmailAsRegistered = async (email: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/invites`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error("Something went wrong", error);
      // swallow
    }
  };

  const onSubmit = async (registerForm: IRegisterForm) => {
    setIsLoading(true);
    const isInvited = await checkIfEmailIsInvited(registerForm.email);
    if (!isInvited) return;
    try {
      const user = await createAccountWithEmailAndPassword(registerForm);
      await setEmailAsRegistered(registerForm.email);
      setUser(user);
      router.push("/member/profile");
    } catch (error) {
      setErrorMessage(AUTH_ERRORS[error.code]);
    }
  };

  return (
    <HorizontalNavbarLayout>
      <main className="container">
        <RegisterForm
          studylines={studylines}
          isLoading={isLoading}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
      </main>
    </HorizontalNavbarLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const studylines: { data: IStudyline[] } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/studylines`)
  ).json();
  const props = {
    studylines: studylines.data,
  };
  return {
    props,
  };
};

export default Register;
