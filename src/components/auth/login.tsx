"use client"

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";
    import { redirect } from "next/navigation";


type FormInput = {
  username: string;
  password: string;
};

export default function LoginForm() {

    // const { data: session } = useSession()
    // console.log('sess', session)

  const formdata = useRef<FormInput>({
    username: "",
    password: "",
  });

  console.log(formdata);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log(formdata.current)
      const res = await signIn("credentials", formdata.current);
      console.log(res, 'res')
    // redirect("/contacts");
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <div className="w-full h-full pt-20">
        <div className="w-full h-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 rounded-xl w-[40%]  min-h-[40%] pt-5 pb-10">
            <h1 className="text-[1.5rem] text-center">Login</h1>
            <Input
              type="email"
              required
              onChange={(e) => (formdata.current.username = e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <Input
              type="password"
              required
              onChange={(e) => (formdata.current.password = e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <div className="w-full flex items-center justify-center">
              <Button type="submit" className="py-8 px-12 cursor-pointer">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
