"use client";

import Cards from "@/components/cards";
import Sidebar from "@/components/sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

const ContactList = (props: Props) => {
  const { data: session } = useSession();

  console.log(session);

  // const { data, isError, isLoading, error } = useGetAllContactsQuery(session?.tokens.accessToken);

  // console.log(data)
  // console.log(error)

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-20 pt-20 pl-8">
        <Link href="contacts/123">
          <Cards />
        </Link>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default ContactList;
