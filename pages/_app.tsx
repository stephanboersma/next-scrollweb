import type { AppProps } from "next/app";
import "../src/styles/app.scss";
import { ThemeProvider } from "next-themes";
import AuthProvider from "@components/common/auth-provider";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider themes={["auto", "light", "dark"]} defaultTheme="dark">
          <Component {...pageProps} />
          <Toaster position="top-right" reverseOrder={true} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
