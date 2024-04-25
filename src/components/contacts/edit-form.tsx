import { Button, Input } from "@nextui-org/react";
import { useRef, useState } from "react";
import { Contact, FormInput } from "../../../types/types";
import { useUpdateContactMutation } from "@/services/contactData";
import { useRouter } from "next/navigation";

type Props = {
    data: Contact;
    token: string;
}
const EditForm = (props: Props) => {
    const router = useRouter()
  const [firstname, setFirstname] = useState(props.data.firstname);
  const [lastname, setLastname] = useState(props.data.lastname);
  const [phoneNumber, setPhoneNumber] = useState(props.data.phoneNumber);

  const [updateContact, { isLoading, error }] = useUpdateContactMutation();

  const handleUpdateContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const updatedContact = {
          firstname,
          lastname,
          phoneNumber
    }
    try {
        const res = await updateContact({ token: props.token, contactId: props.data.id, updatedContact });
        console.log(res)
       router.push("/contacts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleUpdateContact}
        className="border border-gray-300 rounded-xl  min-h-[40%] pt-5 pb-10">
        <h1 className="text-[1.5rem] text-center">Edit a contact</h1>

        <Input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="firstname"
          className="w-full px-3 py-8 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="lastname"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <div className="w-full flex items-center justify-center">
          <Button type="submit" className="py-8 px-12 cursor-pointer">
            Add Contact
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditForm