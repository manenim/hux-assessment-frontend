import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Cards({firstname, lastname, phoneNumber}: any) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">{firstname + " " + lastname}</p>
          <p className="text-small text-default-500">{phoneNumber}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
              <p>{firstname}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
