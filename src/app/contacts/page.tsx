"use client";

import Cards from "@/components/cards";
import Sidebar from "@/components/sidebar";
import { useGetAllContactsQuery } from "@/services/contactData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

type Props = {};

const ContactList = (props: Props) => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  const { data, isError, isLoading, error } = useGetAllContactsQuery(
    session?.tokens.accessToken
  );

  if (isError) {
    console.error("Error fetching contacts:", error);
    return <div>Error fetching contacts!</div>; // Handle error gracefully
  }

  if (isLoading) {
    return <div>Loading contacts...</div>;
  }

  // Ensure data exists before mapping
  if (!data?.contacts) {
    return <div>No contacts found.</div>; // Handle no contacts scenario
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-20 pt-20 pl-8">
        {data.contacts.map((contact: Contact) => (
          <Link href={`/contacts/${contact.id}`} key={contact.id}>
            <Cards
              // Pass contact data as props to the Cards component (if supported)
              firstname={contact.firstname}
              lastname={contact.lastname}
              phoneNumber={contact.phoneNumber}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
