"use client";

import { useGetContactByIdQuery } from "@/services/contactData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import EditForm from "./edit-form";
import FormSkeleton from "./form-loader";

type Props = {
  id: string;
};
const EditContactComp = (props: Props) => {
  const id = props.id;
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
    return <FormSkeleton />;
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

  console.log(contact);
  return (
    <div className="">
      <Suspense fallback={<div>loading...</div>}>
        <EditForm data={contact} token={session!.tokens.accessToken} />
      </Suspense>
    </div>
  );
};

export default EditContactComp;
