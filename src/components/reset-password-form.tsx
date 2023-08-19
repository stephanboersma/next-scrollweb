import { IResetPasswordForm } from "@typing/interfaces/reset-password-form.interface";
import { useForm } from "react-hook-form";

type Props = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (formData: IResetPasswordForm) => void;
};

const ResetPasswordForm = ({ isLoading, errorMessage, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordForm>();
  return (
    <article className="grid">
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
      <img src="./logo.png" />
    </article>
  );
};

export default ResetPasswordForm;
