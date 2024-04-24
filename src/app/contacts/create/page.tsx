"use client";

import { useAddContactMutation } from "@/services/contactData";
import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRef } from "react";

type FormInput = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

const CreateContact = () => {
  const [addContact, { isLoading, error }] = useAddContactMutation();
  const { data: session } = useSession();
  const token = session?.tokens.accessToken;

  const formdata = useRef<FormInput>({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const handleAddContact = async (e: any) => {
    e.preventDefault();
    try {
      await addContact({token, formdata });
      redirect("/contacts");
      // Handle success (e.g., show a success message)
    } catch (err) {
      
      console.log(err)
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleAddContact}
          className="border border-gray-300 rounded-xl w-[40%] min-h-[40%] pt-5 pb-10">
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
          <div className="w-full flex items-center justify-center">
            <Button type="submit" className="py-8 px-12 cursor-pointer">
              Add Contact
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
