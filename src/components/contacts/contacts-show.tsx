import { useGetAllContactsQuery } from "@/services/contactData";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Contact } from "../../../types/types";
import ContactCard from "./contact-card";
import Link from "next/link";
import ContactLoading from "./contact-loading";

const ContactsShow = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <ContactLoading />
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const {
    data: contacts,
    error,
    isLoading,
  } = useGetAllContactsQuery(session?.tokens.accessToken);

  if (isLoading) {
    return <ContactLoading />;
  }

  if (error) {
    return <h1>An error occurred while fetching contacts.</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {contacts?.map((contact: Contact) => (
        <ContactCard key={contact.id} contact={contact} token={session!.tokens.accessToken} />
      ))}
    </div>
  );
};

export default ContactsShow;
