import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

const ContactDetails = (props: Props) => {
  const id = props.params.id
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div>
        <h1 className="font-bold text-4xl py-10">Mani's Contact</h1>
      </div>
      <div>
        <h3 className="text-2xl py-10 font-bold">FirstName: Mani</h3>
      </div>
      <div>
        <h3 className="text-2xl py-10 font-bold">LastName: Udoh</h3>
      </div>
      <div>
        <h3 className="text-2xl py-10 font-bold">Phone: 09055673</h3>
      </div>
      
    </div>
  );
}

export default ContactDetails