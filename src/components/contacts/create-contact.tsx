"use client"

import { useAddContactMutation } from '@/services/contactData';
import { Button, Input } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useRef } from 'react'
import { FormInput } from '../../../types/types';


const CreateContact = () => {
  // const [addContact, { isLoading, error }] = useAddContactMutation();
  // const { data: session } = useSession();
  // const token = session?.tokens.accessToken;

  const formdata = useRef<FormInput>({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const session = useSession();
  if (session.status == "loading") {
    return <h1>Please wait</h1>;
  }
//   if (session.status == "unauthenticated") {
//     redirect("/login");
//   }
//   const token = session!.data!.tokens.accessToken;
//   const [addContact, { data, error, isLoading }] = useAddContactMutation();

//   if (isLoading) {
//     return <h1>Please wait</h1>;
//   }
//   if (error) {
//     return <h1>error</h1>;
//   }

//   const handleAddContact = async (e: any) => {
//     e.preventDefault();
//     try {
//         const add = await addContact({ token, formdata });
//         console.log(add)
//       redirect("/contacts");
//     } catch (err) {
//       console.log(err);
//     }
//   };
  return (
      <div>
          lol
      {/* <form
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
      </form> */}
    </div>
  );
}

export default CreateContact