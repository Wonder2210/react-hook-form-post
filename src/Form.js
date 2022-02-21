import {
  Input,
  VStack,
  Heading,
  FormLabel,
  FormControl,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const formSchema = yup
  .object({
    name: yup.string().required("Este campo es requerido"),
  })
  .required();

const UserForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <VStack
      as="form"
      minWidth="30%"
      bgColor="#FFF"
      padding="2em"
      borderRadius="12px"
      shadow="md"
      mt="4em"
      onSubmit={handleSubmit(onSubmit, {})}
    >
      <Heading>User details</Heading>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="text" {...register("name")} />
        <FormHelperText>Your first name</FormHelperText>
      </FormControl>
      {/* <FormControl>
        <FormLabel htmlFor="email" {...register("email")}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Phone Number</FormLabel>
        <Input id="email" {...register("phoneNumber")} />
        <FormHelperText>Your daily phone number is fine.</FormHelperText>
      </FormControl> */}
      <Button
        type="submit"
        colorScheme="blue"
        backgroundColor="cyan.400"
        width="100%"
      >
        Submit
      </Button>
    </VStack>
  );
};

export default UserForm;
