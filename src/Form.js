import { Input, VStack, Heading, FormLabel, FormControl, FormHelperText } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <VStack minWidth="30%" bgColor="#FFF" padding="3em" borderRadius="12px" shadow="md" mt="4em">
      <Heading>User details</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" {...register('name')} />
        <FormHelperText>Your first name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Phone Number</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>Your daily phone number is fine.</FormHelperText>
      </FormControl>
      </form>
    </VStack>
  );
};

export default UserForm;
