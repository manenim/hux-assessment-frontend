"use client"

import React, { FormEvent, useRef } from "react";
import { Button, Input } from "@nextui-org/react";
import { useSignupMutation } from "@/services/usersdata";

type FormInput = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const [signup, {data, isError, isLoading, error}] = useSignupMutation()
    
    

    const formdata = useRef<FormInput>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
          await signup(formdata.current);
          console.log(data)
        } catch (error) {
            console.error(error)
        }
      
    };


  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <div className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="border border-gray-300 rounded-xl w-[40%]  min-h-[40%] pt-5 pb-10">
              <h1 className="text-[1.5rem] text-center">Login</h1>
              <Input
                type="text"
                required
                onChange={(e) => (formdata.current.firstname = e.target.value)}
                placeholder="firstname"
                className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              />
              <Input
                type="text"
                required
                onChange={(e) => (formdata.current.lastname = e.target.value)}
                placeholder="lastname"
                className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              />
              <Input
                type="email"
                required
                onChange={(e) => (formdata.current.email = e.target.value)}
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
                <Button type="submit" className="py-8 px-12 cursor-pointer">
                  Add Contact
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
