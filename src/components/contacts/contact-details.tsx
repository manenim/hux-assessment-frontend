"use client";

import { useGetContactByIdQuery } from "@/services/contactData";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const ContactDetailsComp = (props: Props) => {
  const id = props.id;

  const { data: session, status } = useSession();
  const {
    data: contact,
    error,
    isLoading,
  } = useGetContactByIdQuery({
    token: session?.tokens.accessToken,
    contactId: id,
  });
  const router = useRouter();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (isLoading) {
    return <h1>Loading contacts...</h1>;
  }

  if (error) {
    return <h1>An error occurred while fetching contacts.</h1>;
  }


  return (
    <div className="pt-20">
      <Link href={`/contacts/${contact.id}/edit`}>
        <Button>Edit Contact</Button>
      </Link>
      <div>
        <h1 className="font-bold text-4xl py-10">{`${contact.firstname}'s Contact Details`}</h1>
      </div>
      <div className="grid grid-col-4 border borrder-gray-300 py-8 rounded-xl w-[18rem]">
        <div>
          <h3 className="text-2xl py-5 font-bold">
            FirstName: {contact.firstname}
          </h3>
        </div>
        <div>
          <h3 className="text-2xl py-5 font-bold">
            LastName: {contact.lastname}
          </h3>
        </div>
        <div>
          <h3 className="text-2xl py-5 font-bold">
            Address: {contact.homeAddress}
          </h3>
        </div>
        <div>
          <h3 className="text-2xl py-5 font-bold">Email: {contact.email}</h3>
        </div>
        <div>
          <h3 className="text-2xl py-5 font-bold">
            Phone: {contact.phoneNumber}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComp;
