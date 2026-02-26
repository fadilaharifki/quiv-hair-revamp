import AccountPageModules from "@/modules/account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Quiv Hair",
};

const AccountPage = () => {
  return <AccountPageModules />;
};

export default AccountPage;
