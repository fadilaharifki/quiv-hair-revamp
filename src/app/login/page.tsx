import LoginPageModules from "@/modules/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Quiv Hair",
};

const LoginPage = () => {
  return <LoginPageModules />;
};

export default LoginPage;
