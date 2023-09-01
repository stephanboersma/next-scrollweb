import { HorizontalNavbarLayout } from "@components/index";
import ResetPasswordForm from "@components/reset-password-form";
import { sendResetPasswordEmail } from "@fire/authentication";
import { IResetPasswordForm } from "@typing/interfaces/reset-password-form.interface";
import { useState } from "react";

const ResetPassword = () => {
  const [resetPasswordMessage, setResetPasswordMessage] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const handlePasswordReset = async (
    resetPasswordFormData: IResetPasswordForm
  ) => {
    setIsLoading(true);
    try {
      await sendResetPasswordEmail(resetPasswordFormData);
      setResetPasswordMessage(
        `If ${resetPasswordFormData.email} exists in our records, you will receive an email shortly with a link for password reset`
      );
      setIsLoading(false);
    } catch (err) {
      setTimeout(() => {
        setResetPasswordMessage(
          `If ${resetPasswordFormData.email} exists in our records, you will receive an email shortly with a link for password reset`
        );
        setIsLoading(false);
      }, 1000);
    }
  };
  return (
    <HorizontalNavbarLayout>
      <main className="container">
        <ResetPasswordForm
          isLoading={isLoading}
          errorMessage={resetPasswordMessage}
          onSubmit={handlePasswordReset}
        />
      </main>
    </HorizontalNavbarLayout>
  );
};
export default ResetPassword;
