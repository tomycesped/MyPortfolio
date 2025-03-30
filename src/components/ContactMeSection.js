import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack, useBreakpointValue } from "@chakra-ui/react";
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
    <Box 
  bg="gray.50" 
  _dark={{ bg: "gray.900" }}
  w="100%"
>
    <Box position="relative"
     overflow="hidden"
      bg="gray.50"
      spacing={8}
      justifySelf="center"
      p={{ base: 6, md: 12 }}
        alignItems="flex-start"
        maxW="1400px"
        mx="auto">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="radial-gradient(circle at 50% 90%, rgb(255, 238, 0) 0%, transparent 40%)"
        _dark={{
          bgImage: "radial-gradient(circle at 80% 30%, rgba(100, 100, 100, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(75, 75, 75, 0.1) 0%, transparent 50%)"
        }}
        pointerEvents="none"
        zIndex={1}
      />
      
      <Box isDarkBackground spacing={8} justifySelf="center" alignItems="center" position="relative" zIndex={2}>
        <VStack w={containerWidth} maxW="900px" p={sectionPadding} alignItems="flex-start">
          <Heading textDecoration="underline"
  textDecorationColor="rgb(255, 238, 0)"
  textDecorationThickness="2px"
  textUnderlineOffset="4px" style={{ fontFamily: "'Outfit', sans-serif", cursor:"default"}} as="h1" id="contactme-section" fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} color="black" _dark={{ color: "white" }}>
            Contact me
          </Heading>
          <Box p={formPadding} rounded="md" w="100%" style={{ fontFamily: "'Outfit', sans-serif"}} color="black" _dark={{ color: "white" }}>
            <form onSubmit={formik.handleSubmit}>
              <VStack  spacing={4} width="100%">
                <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.firstName && formik.errors.firstName} width="100%">
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input backgroundColor="#F6F6F6" _dark={{ bg: "gray.700" }} id="firstName" name="firstName" {...formik.getFieldProps("firstName")} borderColor="black" focusBorderColor="rgb(255, 238, 0)" size={{ base: "md", md: "lg" }} width="100%"/>
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.email && formik.errors.email} width="100%">
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input backgroundColor="#F6F6F6" _dark={{ bg: "gray.700" }} id="email" name="email" type="email" {...formik.getFieldProps("email")} borderColor="black" focusBorderColor="rgb(255, 238, 0)" size={{ base: "md", md: "lg" }} width="100%"/>
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl style={{ cursor:"default" }} width="100%">
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select backgroundColor="#F6F6F6" _dark={{ bg: "gray.700" }} id="type" name="type" {...formik.getFieldProps("type")} borderColor="black" focusBorderColor="rgb(255, 238, 0)" size={{ base: "md", md: "lg" }} width="100%">
                    <option value="freeLance">Freelance project proposal</option>
                    <option value="fullTime">Full-time job proposal</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl style={{ cursor:"default" }} isInvalid={formik.touched.comment && formik.errors.comment} width="100%">
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea id="comment" name="comment" backgroundColor="#F6F6F6" _dark={{ bg: "gray.700" }} {...formik.getFieldProps("comment")} borderColor="black" focusBorderColor="rgb(255, 238, 0)" size={{ base: "md", md: "lg" }} width="100%" style={{ resize: "none", height:"150px" }}/>
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" boxShadow="xl" border="1px" borderColor="black" borderRadius="full" backgroundColor="transparent" _dark={{ bg: "teal.600", _hover: { bg: "teal.700" } }} width={buttonWidth} isLoading={isLoading} size={{ base: "md", md: "lg" }} mt={2} color="black" _hover={{ bg: "black", color:"white" }}>
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Box>
    </Box>
  );
};

export default ContactMeSection;