import React from 'react'
import ContactDetailsComp from "@/components/contacts/contact-details";
import { Button } from '@nextui-org/react';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  }
}

const ContactDetails = (props: Props) => {
  const id = props.params.id
  return (
    <div>
    
      <div className="flex justify-center items-center">

        <ContactDetailsComp id = {id} />
      </div>
    </div>
  );
}

export default ContactDetails