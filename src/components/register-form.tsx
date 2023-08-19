// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "@styles/login-form.module.scss";
export const RegisterForm = () => {
  return (
    <article className="grid">
      <div>
        <h1>Register</h1>
        <form>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            aria-label="First Name"
            required
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            aria-label="Last Name"
            required
          />
          <label htmlFor="studyline">Studyline</label>
          <select id="studyline" required>
            <option value="" selected disabled>
              Select a studyline
            </option>
            <option value="gbi">GBI</option>
            <option value="gbi">GBI</option>
            <option value="gbi">GBI</option>
          </select>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            aria-label="E-mail"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            aria-label="Password"
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            required
          />

          <button type="submit" className="contrast">
            Register
          </button>
        </form>
      </div>
    </article>
  );
};
