"use client"

import Image from "next/image";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useGetAllProductsQuery } from "@/services/dummydata";
import SignButtons from "@/components/signButtons";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetAllProductsQuery('')
  
  // console.log(data)
  // console.log(isError)
  // console.log(isLoading)
  return (
    <main className="">
      <SignButtons />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      {/* {data && } */}
    </main>
  );
}
