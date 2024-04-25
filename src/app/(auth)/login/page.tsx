"use client";

import LoginForm from "@/components/auth/login";
import FormSkeleton from "@/components/contacts/form-loader";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const session = useSession();
  if (session.status == "loading") {
    return <h1 className="text-center mt-20">Loading... please wait</h1>;
  }
  if (session.status == "authenticated") {
    redirect("/contacts");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
