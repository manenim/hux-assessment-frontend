import EditContactComp from "@/components/contacts/edit-contact";

type Props = {
  params: {
    id: string;
  };
};

const EditContact = (props: Props) => {
  const id = props.params.id;
  console.log(id);
  return (
    <div className="w-full h-full">
      <EditContactComp id={id} />
    </div>
  );
};

export default EditContact;
