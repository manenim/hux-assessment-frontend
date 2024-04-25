"use client";

import ContactLoading from "@/components/contacts/contact-loading";
import ContactsShow from "@/components/contacts/contacts-show";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

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
    return (
      <div className="">
        <ContactLoading />
      </div>
    );
  }
  if (session.status == "unauthenticated") {
    redirect("/login");
  }

  console.log(session);

  return (
    <div>
      <div className="">
        <Suspense fallback={<ContactLoading />}>
          <ContactsShow />
        </Suspense>
      </div>
    </div>
  );
};

export default ContactList;
