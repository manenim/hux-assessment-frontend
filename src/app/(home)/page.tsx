"use client";

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
