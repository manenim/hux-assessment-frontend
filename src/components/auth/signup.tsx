import React from "react";
import { Button, Input } from "@nextui-org/react";

export default function SignupForm() {
  return (
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          
      <Input type="text" label="name" />
      <Input type="email" label="Email" />
          <Input type="password" label="Passwod" placeholder="Enter your password" />
          <Button>Sign Up</Button>
    </div>
  );
}
