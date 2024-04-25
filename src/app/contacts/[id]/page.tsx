import ContactDetailsComp from "@/components/contacts/contact-details";

type Props = {
  params: {
    id: string;
  };
};

const ContactDetails = (props: Props) => {
  const id = props.params.id;
  return (
    <div>
      <div className="flex justify-center items-center">
        <ContactDetailsComp id={id} />
      </div>
    </div>
  );
};

export default ContactDetails;
