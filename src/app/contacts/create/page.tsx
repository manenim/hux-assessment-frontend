import { Button, Input } from "@nextui-org/react";

type Props = {};

const CreateContact = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <form className="border border-gray-300 rounded-xl w-[40%] min-h-[40%] pt-5 pb-10">
        <h1 className="text-[1.5rem] text-center">Create a contact</h1>
          <Input
            placeholder="firstname"
            className="w-full px-3 py-8 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <Input
            placeholder="lastname"
            className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <Input
            placeholder="Phone number"
            className="w-full px-3 py-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          <div className="w-full flex items-center justify-center">
            <Button className="py-8 px-12 cursor-pointer">Add Contact</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
