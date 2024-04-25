import { useUpdateContactMutation } from "@/services/contactData";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Contact } from "../../../types/types";

type Props = {
  data: Contact;
  token: string;
};
const EditForm = (props: Props) => {
  const router = useRouter();
  const [firstname, setFirstname] = useState(props.data.firstname);
  const [lastname, setLastname] = useState(props.data.lastname);
  const [phoneNumber, setPhoneNumber] = useState(props.data.phoneNumber);
  const [email, setEmail] = useState(props.data.email);
  const [homeAddress, setHomeAddress] = useState(props.data.homeAddress);

  const [updateContact, { isLoading, error }] = useUpdateContactMutation();

  const handleUpdateContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedContact = {
      firstname,
      lastname,
      phoneNumber,
      email,
      homeAddress,
    };
    try {
      const res = await updateContact({
        token: props.token,
        contactId: props.data.id,
        updatedContact,
      });
      console.log(res);
      router.push("/contacts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleUpdateContact}
        className="border border-gray-300 rounded-xl w-[40rem] px-6 min-h-[40%] pt-5 mt-20 pb-10">
        <h1 className="text-[1.5rem] text-center">Edit contact</h1>

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
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <Input
          value={homeAddress}
          onChange={(e) => setHomeAddress(e.target.value)}
          placeholder="Home address"
          className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="py-4 mt-4 px-12 rounded-xl bg-[#00246B] text-white cursor-pointer">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
