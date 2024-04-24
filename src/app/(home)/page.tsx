"use client";

import AccordionComp from "@/components/accordion";
import SignButtons from "@/components/signButtons";
import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import { Backend_URL } from "../../../lib/Constants";

import Hero from "@/components/hero";
import styles from "@/style";

export default function Home() {




  return (
    <main className="">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </main>
  );
}
