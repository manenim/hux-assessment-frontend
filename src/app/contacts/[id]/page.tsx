import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

const ContactDetails = (props: Props) => {
  const id = props.params.id
  return (
    <div>ContactDetails + {" " + id}</div>
  )
}

export default ContactDetails