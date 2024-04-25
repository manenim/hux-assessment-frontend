import React from 'react'
import SkeletonComp from './skeleton'


const ContactLoading = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <SkeletonComp />
      <SkeletonComp />
      <SkeletonComp />
    </div>
  );
}

export default ContactLoading