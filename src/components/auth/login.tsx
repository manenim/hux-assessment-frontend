"use client";

import { Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FormEvent, useRef, useState } from "react";

type FormInput = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  // const { data: session } = useSession()
  // console.log('sess', session)

  const formdata = useRef<FormInput>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await signIn("credentials", formdata.current);
      // redirect("/contacts");
    } catch (error) {
      //@ts-ignore
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <div className="w-full h-full pt-20">
        <div className="w-full h-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 rounded-xl w-[40%]  min-h-[40%] mt-20 pt-5 pb-10 px-8">
            <h1 className="text-[1.5rem] text-center">Login</h1>
            <Input
              type="email"
              required
              onChange={(e) => (formdata.current.username = e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-10 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <Input
              type="password"
              required
              onChange={(e) => (formdata.current.password = e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-6 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="py-4 mt-4 px-12 rounded-xl bg-[#00246B] text-white cursor-pointer">
                {isLoading ? "Loggin in" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
