import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MotionContent = motion(AlertDialogContent);

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <MotionContent
          py={4}
          backgroundColor={isSuccess ? "#E6F4EA" : "#FDECEA"}
          borderRadius="lg"
          boxShadow="lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          position="relative"
        >
          <Flex justify="space-between" align="center" px={4}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color={isSuccess ? "#2E7D32" : "#D32F2F"}>
              <Flex align="center" gap={2}>
                <Icon as={FontAwesomeIcon} icon={isSuccess ? faCheckCircle : faExclamationTriangle} />
                {isSuccess ? "Sent" : "Error"}
              </Flex>
            </AlertDialogHeader>
            <IconButton
              icon={<FontAwesomeIcon icon={faTimes} />}
              size="md"
              variant="ghost"
              color="black"
              onClick={onClose}
              _hover={{ color: "black", bg: "rgba(0, 0, 0, 0.1)" }}
            />
          </Flex>

          <AlertDialogBody fontWeight="bold" fontSize="md" color="#333" px={4} textAlign="center">
            {message}
          </AlertDialogBody>
        </MotionContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
