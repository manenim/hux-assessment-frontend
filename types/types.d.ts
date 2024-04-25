export type Contact = {
    id: string;
    firstname: string;
    lastname: string;
  phoneNumber: string;
  email: string;
  homeAddress: string;
}

type FormInput = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email?: string;
  homeAddress?: string;
};