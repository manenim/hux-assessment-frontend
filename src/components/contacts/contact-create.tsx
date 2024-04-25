"use client";

import { useAddContactMutation } from "@/services/contactData";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
import { FormInput } from "../../../types/types";
import { useRouter } from "next/navigation";
import FormSkeleton from "./form-loader";

type Error = {
  data: {
    message: string
  }
}

const ContactCreate = () => {
  const router = useRouter();
  const [err, setErr]= useState(null)
  
  const formdata = useRef<FormInput>({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    homeAddress: "",
  });

  const { status, data: sessionData } = useSession();
  const [addContact, { data, error, isLoading }] = useAddContactMutation();

  // Redirect based on authentication status
  if (status === "loading") {
    return <FormSkeleton />
  }
  if (status === "unauthenticated") {
    redirect("/login");
    return null; // Prevents further rendering until redirect is complete
  }

  // Extract token only after checking authentication status
  const token = sessionData!.tokens.accessToken;

  // Loading state
  if (isLoading) {
    return <h1>Please wait</h1>;
  }

  if (error) {
    //@ts-ignore
    setErr(error!.data!.message);
  }

  const handleAddContact = async (e: any) => {
      e.preventDefault();
      console.log(formdata)
    try {
        const res = await addContact({ token, newContact: formdata.current });
        
      console.log(res)
    } catch (err) {
      console.log(err);
      }
      router.push("/contacts", {scroll: false});
  };

  return (
    <div>
      <form
        onSubmit={handleAddContact}
        className="border px-6 border-gray-300 rounded-xl w-[40rem] min-h-[40%] pt-5 mt-20 pb-10">
        <h1 className="text-[1.5rem] text-center">Create a contact</h1>
        <Input
          placeholder="firstname"
          onChange={(e) => (formdata.current.firstname = e.target.value)}
          className="w-full px-3 py-8 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          onChange={(e) => (formdata.current.lastname = e.target.value)}
          placeholder="lastname"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          onChange={(e) => (formdata.current.phoneNumber = e.target.value)}
          placeholder="Phone number"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          onChange={(e) => (formdata.current.email = e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          onChange={(e) => (formdata.current.homeAddress = e.target.value)}
          placeholder="Home Address"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="py-4 mt-4 px-12 rounded-xl bg-[#00246B] text-white cursor-pointer">
            Add Contact
          </button>
        </div>
        {err && <p className="text-red">{err}</p>}
      </form>
    </div>
  );
};

export default ContactCreate;
