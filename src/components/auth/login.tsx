"use client"

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";

type FormInput = {
  username: string;
  password: string;
};

export default function LoginForm() {

    const { data: session } = useSession()
    console.log('sess', session)

  const formdata = useRef<FormInput>({
    username: "",
    password: "",
  });

  console.log(formdata);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formdata.current)
    signIn("credentials", formdata.current);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          required
          onChange={(e) => (formdata.current.username = e.target.value)}
          label="Email"
        />
        <Input
          type="password"
          label="Passwod"
          required
          onChange={(e) => (formdata.current.password = e.target.value)}
          placeholder="Enter your password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
