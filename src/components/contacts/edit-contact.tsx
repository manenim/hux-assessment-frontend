"use client";

import { useGetContactByIdQuery } from '@/services/contactData';
import { Button, Input } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Suspense, useRef } from 'react';
import { FormInput } from '../../../types/types';
import EditForm from './edit-form';
import FormSkeleton from './form-loader';

type Props = {
id: string;
};
const EditContactComp = (props: Props) => {
  const id = props.id;

//   const { data: session, status } = useSession();
//   const {
//     data: contact,
//     error,
//     isLoading,
//   } = useGetContactByIdQuery({
//     token: session?.tokens.accessToken,
//     contactId: id,
//   });
//   const router = useRouter();

//   if (status === "loading") {
//     return <h1>Loading...</h1>;
//   }

//   if (status === "unauthenticated") {
//     router.push("/login");
//     return null;
//   }

//   if (isLoading) {
//     return <h1>Loading contacts...</h1>;
//   }

//   if (error) {
//     return <h1>An error occurred while fetching contacts.</h1>;
//   }

//   const handleUpdateContact = async (e: any) => {
//     e.preventDefault();
//     // try {
//     //   await updateContact({ token, formdata, id });
//     //   redirect("/contacts");
//     //   // Handle success (e.g., show a success message)
//     // } catch (err) {
//     //   console.log(err);
//     // }
//   };

//   const formdata = useRef<FormInput>({
//     firstname: "",
//     lastname: "",
//     phoneNumber: "",
//     });
    
 const { data: session, status } = useSession();
 const router = useRouter();

 const {
   data: contact,
   error,
   isLoading,
 } = useGetContactByIdQuery({
   token: session?.tokens.accessToken,
   contactId: id,
 });

  if (status === "loading") {
    return <FormSkeleton />
  }
 if (status === "unauthenticated") {
   router.push("/login");
   return null;
 }

 if (isLoading) {
   return <FormSkeleton />;
 }

 if (error) {
   return <h1>An error occurred while fetching the contact.</h1>;
 }

//  const formdata = useRef<FormInput>({
//    firstname: "",
//    lastname: "",
//    phoneNumber: "",
//  });

 const handleUpdateContact = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   // Update contact logic here
 };

    console.log(contact)
  return (
    <div className="">
          <Suspense fallback={<div>loading...</div>}>
              
              <EditForm data={ contact } token = {session!.tokens.accessToken} />
            </Suspense>
    </div>
  );
}     


export default EditContactComp;