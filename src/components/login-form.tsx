// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "@styles/login-form.module.scss";
import { ILoginForm } from "@typing/interfaces/login-form.interface";
import Link from "next/link";
import { useForm } from "react-hook-form";

type Props = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (loginFormData: ILoginForm) => void;
};

export const LoginForm = ({ isLoading, errorMessage, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  return (
    <article className="grid">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            aria-label="E-mail"
            autoComplete="email"
            {...register("email", {
              required: "Email address is required",
            })}
          />
          {errors.email && (
            <small className="warning">{errors.email.message}</small>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <small className="warning">{errors.password.message}</small>
          )}
          <Link href="/reset-password">Forgot password?</Link>

          <button
            type="submit"
            className="contrast"
            aria-busy={isLoading}
            disabled={isLoading}
          >
            Login
          </button>
          {errorMessage && <small className="warning">{errorMessage}</small>}
        </form>
      </div>
      <img src="./logo.png" />
    </article>
  );
};
