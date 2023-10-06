import { IResetPasswordForm } from "@typing/interfaces/reset-password-form.interface";
import styles from "@styles/form.module.scss";
import { useForm } from "react-hook-form";
import logo from "@public/logo.png";
import Image from "next/image";
type Props = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (formData: IResetPasswordForm) => void;
};

export const ResetPasswordForm = ({
  isLoading,
  errorMessage,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordForm>();
  return (
    <article className={`${styles.form} grid`}>
      <div>
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            {...register("email", {
              required: "Email address is required",
            })}
          />
          {errors.email && (
            <small className="warning">{errors.email.message}</small>
          )}
          <button
            type="submit"
            className="contrast"
            aria-busy={isLoading}
            disabled={isLoading}
          >
            Request Password Reset
          </button>
          {errorMessage && <small className="warning">{errorMessage}</small>}
        </form>
      </div>
      <Image
        src={logo}
        width={555}
        height={392}
        className={styles.logo}
        alt="ScrollBar Logo"
      />{" "}
    </article>
  );
};
