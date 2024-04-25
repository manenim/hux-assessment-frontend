import { useGetAllContactsQuery } from "@/services/contactData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Contact } from "../../../types/types";
import ContactCard from "./contact-card";
import ContactLoading from "./contact-loading";

const ContactsShow = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <ContactLoading />;
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
  if (contacts.length == 0) {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <h1 className="text-2xl">No contacts to display.</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {contacts && contacts.length > 0 && contacts?.map((contact: Contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          token={session!.tokens.accessToken}
        />
      ))}
    </div>
  );
};

export default ContactsShow;
