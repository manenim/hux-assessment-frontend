import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Contact } from "../../../types/types";

type Props = {
  contact: Contact
}

export default function ContactCard({contact}: Props) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
        <div className="flex flex-col">
          <p className="text-md">{`${contact.firstname} ${contact.lastname}`}</p>
          <p className="text-small text-default-500">{contact.email}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{contact.homeAddress}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={`contacts/${contact.id}`}>
          {contact.phoneNumber}
        </Link>
      </CardFooter>
    </Card>
  );
}
