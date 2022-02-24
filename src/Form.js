import {
  Input,
  VStack,
  Heading,
  FormLabel,
  FormControl,
  FormHelperText,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({
    name: yup.string().required("Este campo es requerido"),
    email: yup
      .string()
      .email("Please introduce a valid email")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "It doesn't seem to be a phone number")
      .length(11),
  })
  .required();

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      radio: "1",
    },
  });
  const onSubmit = (data) => console.log(data);
  const onInvalid = () => alert("iNvalid bro");
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <VStack
      as="form"
      minWidth="30%"
      bgColor="#FFF"
      padding="2em"
      borderRadius="12px"
      shadow="md"
      mt="4em"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Heading>User details</Heading>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="text" {...register("name")} />
        <FormHelperText>Your first name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="text" {...register("email")} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
        <Input {...register("phoneNumber")} />
        <FormHelperText>Your daily phone number is fine.</FormHelperText>
      </FormControl>
      <Controller
        name="radio"
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <Stack direction="row">
              <Radio value="1">
                First
              </Radio>
              <Radio value="2">
                Second
              </Radio>
              <Radio value="3">
                Third
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />

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
