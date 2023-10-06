import styles from "@styles/form.module.scss";
import { IRegisterForm } from "@typing/interfaces/register-form.interface";
import { IStudyline } from "@typing/interfaces/studyline.interface";
import { useForm } from "react-hook-form";

type Props = {
  studylines: IStudyline[];
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (formData: IRegisterForm) => void;
};

export const RegisterForm = ({
  studylines,
  isLoading,
  errorMessage,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IRegisterForm>();
  return (
    <article className={`${styles.form} grid`}>
      <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            aria-label="First Name"
            {...register("firstname", {
              required: "First name is required",
            })}
          />
          {errors.firstname && (
            <small className="warning">{errors.firstname.message}</small>
          )}

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            aria-label="Last Name"
            {...register("lastname", {
              required: "Last name is required",
            })}
          />
          {errors.lastname && (
            <small className="warning">{errors.lastname.message}</small>
          )}

          <label htmlFor="studyline">Studyline</label>
          <select
            id="studyline"
            {...register("studyline", {
              required: "Studyline is required",
            })}
          >
            <option value="" selected disabled>
              Select a studyline
            </option>
            {studylines &&
              studylines.map((studyline) => (
                <option key={studyline.id} value={studyline.id}>
                  {studyline.prefix} in {studyline.name}
                </option>
              ))}
          </select>
          {errors.studyline && (
            <small className="warning">{errors.studyline.message}</small>
          )}

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            aria-label="E-mail"
            {...register("email", {
              required: "Email address is required",
            })}
          />
          {errors.email && (
            <small className="warning">{errors.email.message}</small>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            aria-label="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <small className="warning">{errors.password.message}</small>
          )}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            {...register("confirmPassword", {
              required: "Password is required",
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "The passwords do not match";
                }
              },
            })}
          />

          {errors.confirmPassword && (
            <small className="warning">{errors.confirmPassword.message}</small>
          )}

          <button
            type="submit"
            className="contrast"
            aria-busy={isLoading}
            disabled={isLoading}
          >
            Register
          </button>
          {errorMessage && <small className="warning">{errorMessage}</small>}
        </form>
      </div>
    </article>
  );
};
