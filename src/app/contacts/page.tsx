"use client";

import Cards from "@/components/contacts/contact-card";
import ContactsShow from "@/components/contacts/contacts-show";
import Sidebar from "@/components/sidebar";
import { useGetAllContactsQuery } from "@/services/contactData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ContactLoading from '@/components/contacts/contact-loading'

type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

type Props = {};

const ContactList = (props: Props) => {



  const session = useSession();
  if (session.status == "loading") {
    return <h1>Please wait</h1>;
  }
  if (session.status == "unauthenticated") {
    redirect('/login')
  }

  console.log(session)
  // if (session.status == "authenticated") {
 
  //   const { data, error, isLoading } = useGetAllContactsQuery(session.data.tokens.accessToken)
  // console.log(data)
  // }



  // if (isError) {
  //   console.error("Error fetching contacts:", error);
  //   return <div>Error fetching contacts!</div>; // Handle error gracefully
  // }

  // if (isLoading) {
  //   return <div>Loading contacts...</div>;
  // }

  // // Ensure data exists before mapping
  // if (!data?.contacts) {
  //   return <div>No contacts found.</div>; // Handle no contacts scenario
  // }

  return (
    <div>
      <div className="">
        <Suspense fallback={<ContactLoading />}>
            <ContactsShow  />  
        </Suspense>
        {/* {data.contacts.map((contact: Contact) => (
          <Link href={`/contacts/${contact.id}`} key={contact.id}>
            <Cards
              // Pass contact data as props to the Cards component (if supported)
              firstname={contact.firstname}
              lastname={contact.lastname}
              phoneNumber={contact.phoneNumber}
            />
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default ContactList;
