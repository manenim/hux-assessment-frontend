"use client"

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

interface Props {
    children: ReactNode;
}

export default function Providers({
 children}: Props) {
  return (
    <SessionProvider>
      <NextUIProvider>
        
      <Provider store={store}>{children}</Provider>
</NextUIProvider>
    </SessionProvider>
  );
}
