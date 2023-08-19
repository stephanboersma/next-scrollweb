import type { AppProps } from "next/app";
import "../src/styles/app.scss";
import { ThemeProvider } from "next-themes";
import AuthProvider from "@components/auth-provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider themes={["auto", "light", "dark"]} defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
