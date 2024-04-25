import { useGetAllContactsQuery } from "@/services/contactData";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Contact } from "../../../types/types";
import ContactCard from "./contact-card";
import Link from "next/link";

const ContactsShow = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <h1>Loading...</h1>;
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
    return <h1>Loading contacts...</h1>;
  }

  if (error) {
    return <h1>An error occurred while fetching contacts.</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {contacts?.map((contact: Contact) => (
        <Link href={`/contacts/${contact.id}`}>
          <ContactCard key={contact.id} contact={contact} />
        </Link>
      ))}
    </div>
  );
};

export default ContactsShow;
