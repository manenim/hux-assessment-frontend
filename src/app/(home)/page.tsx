"use client";

import AccordionComp from "@/components/accordion";
import SignButtons from "@/components/signButtons";
import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import { Backend_URL } from "../../../lib/Constants";
import {
  decrement,
  increment,
} from "../../redux/features/counter/counterSlice";
import Hero from "@/components/hero";
import styles from "@/style";
// import type { RootState } from "../../redux/store";

export default function Home() {
  // const count = useSelector(
  //   (state: RootState) => state.counter.value as number
  // );
  // const dispatch = useDispatch();



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
