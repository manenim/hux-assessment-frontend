"use client";

import { Skeleton } from "@nextui-org/skeleton";

const ContactDetailsSkeleton = () => {
  return (
    <Skeleton className="mt-20 rounded-xl">
      <Skeleton className="flex items-center justify-between w-full">
        <Skeleton className="font-bold text-4xl py-10"></Skeleton>
        <Skeleton className="text-white bg-[#00246B] text-lg py-6 px-10"></Skeleton>
      </Skeleton>
      <Skeleton className="grid grid-col-4 border borrder-gray-300 px-8 py-8 rounded-xl w-[56rem]">
        <Skeleton>
          <Skeleton className="text-xl py-5 font-bold"></Skeleton>
        </Skeleton>
        <Skeleton>
          <Skeleton className="text-xl py-5 font-bold"></Skeleton>
        </Skeleton>
        <Skeleton>
          <Skeleton className="text-xl py-5 font-bold"></Skeleton>
        </Skeleton>
        <Skeleton>
          <Skeleton className="text-xl py-5 font-bold"></Skeleton>
        </Skeleton>
        <Skeleton>
          <Skeleton className="text-xl py-5 font-bold"></Skeleton>
        </Skeleton>
      </Skeleton>
    </Skeleton>
  );
};

export default ContactDetailsSkeleton;
