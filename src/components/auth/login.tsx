import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function LoginForm() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input
        type="password"
              label="Passwod"
              
        placeholder="Enter your password"
      />
      <Button>Login</Button>
    </div>
  );
}
