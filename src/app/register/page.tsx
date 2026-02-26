import RegisterPageModules from "@/modules/auth/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Quiv Hair",
};

const RegisterPage = () => {
  return <RegisterPageModules />;
};

export default RegisterPage;
