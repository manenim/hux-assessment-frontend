import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

type Props = {}

const ContactList = async (props: Props) => {
  const session = await getServerSession(authOptions);
  console.log("hi", session);
  return (
    <div>ContactList</div>
  )
}

export default ContactList