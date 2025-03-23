import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const containerWidth = useBreakpointValue({ 
    base: "100%", 
    sm: "400px", 
    md: "600px", 
    lg: "900px" 
  });

  const buttonWidth = useBreakpointValue({ 
    base: "100%", 
    sm: "80%", 
    md: "60%", 
    lg: "50%" 
  });

  const sectionPadding = useBreakpointValue({ 
    base: 4, 
    sm: 6, 
    md: 8, 
    lg: 12 
  });

  const formPadding = useBreakpointValue({ 
    base: 3, 
    sm: 4, 
    md: 5, 
    lg: 6 
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "freeLance",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const url = "/api/submit";
      const result = await submit(url, values);
      if (result.type === "success") {
        onOpen("success", result.message);
        resetForm();
      } else {
        onOpen("error", result.message);
      }
    },
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#3B2418" spacing={8} justifyContent="center"
    alignItems="center">
      <VStack 
        w={containerWidth}
        maxW="900px"
        p={sectionPadding} 
        alignItems="flex-start"
      >
        <Heading 
          style={{ fontFamily: "'Outfit', sans-serif", cursor:"default"}} 
          as="h1" 
          id="contactme-section"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          Contact me
        </Heading>
        <Box 
          p={formPadding} 
          rounded="md" 
          w="100%" 
          style={{ fontFamily: "'Outfit', sans-serif"}}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} width="100%">
              <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.firstName && formik.errors.firstName} width="100%">
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  backgroundColor="#8B5E3C"
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  focusBorderColor="white"
                  size={{ base: "md", md: "lg" }}
                  width="100%"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.email && formik.errors.email} width="100%">
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  backgroundColor="#8B5E3C"
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  focusBorderColor="white"
                  size={{ base: "md", md: "lg" }}
                  width="100%"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl style={{ cursor:"default" }} width="100%">
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  backgroundColor="#8B5E3C"
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  focusBorderColor="white"
                  size={{ base: "md", md: "lg" }}
                  width="100%"
                >
                  <option value="freeLance">Freelance project proposal</option>
                  <option value="fullTime">Full-time job proposal</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.comment && formik.errors.comment} width="100%">
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  backgroundColor="#8B5E3C"
                  {...formik.getFieldProps("comment")}
                  focusBorderColor="white"
                  size={{ base: "md", md: "lg" }}
                  width="100%"
                  style={{ resize: "none", height:"150px" }}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
                type="submit" 
                backgroundColor="white" 
                width={buttonWidth} 
                isLoading={isLoading}
                size={{ base: "md", md: "lg" }}
                mt={2}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;