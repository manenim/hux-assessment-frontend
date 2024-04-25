import React from 'react'
import SkeletonComp from './skeleton'


const ContactLoading = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <SkeletonComp />
      <SkeletonComp />
      <SkeletonComp />
    </div>
  );
}

export default ContactLoading