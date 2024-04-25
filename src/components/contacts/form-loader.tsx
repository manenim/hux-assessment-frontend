import { Skeleton } from '@nextui-org/skeleton';
import React from 'react'

const FormSkeleton = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <Skeleton className="border px-6 border-gray-300 rounded-xl w-[40rem] h-[68vh] pt-5 pb-10 mt-20">
        <Skeleton className="w-full px-3 py-8 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        <Skeleton className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        <Skeleton className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        <Skeleton className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        <Skeleton className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
        <Skeleton className="flex items-center justify-center w-full">
          <Skeleton className="py-4 mt-4 px-12 rounded-xl bg-[#00246B] text-white cursor-pointer"></Skeleton>
        </Skeleton>
      </Skeleton>
    </div>
  );
}

export default FormSkeleton