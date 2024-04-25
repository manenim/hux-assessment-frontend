import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Contact } from "../../../types/types";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDeleteContactMutation } from "@/services/contactData";


type Props = {
  contact: Contact
  token: string
}

export default function ContactCard({contact, token}: Props) {
    const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  

   const [updateContact, { isLoading, error }] = useDeleteContactMutation();

   const handleDelete = async () => {
    
     try {
       const res = await updateContact({
         token: token,
         contactId: contact.id,
       });
       console.log(res);
       router.push('/contacts')
     } catch (err) {
       console.log(err);
     }
   };



  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <p className="text-md">{`${contact.firstname} ${contact.lastname}`}</p>
              <p className="text-small text-default-500">{contact.email}</p>
            </div>
            <button onClick={onOpen}>
              <FaRegTrashAlt />
            </button>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{contact.homeAddress}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link showAnchorIcon href={`contacts/${contact.id}`}>
            View Details
          </Link>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Contact?
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you wnat to delete this contact?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}




function DeleteModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Contact?
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you wnat to delete this contact?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
