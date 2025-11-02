import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

interface ISignUpProps {
  isOpen: boolean;
  onClose: () => void;
}
const SignUp = ({ isOpen, onClose }: ISignUpProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        placement="center"
        className="z-50"
        onOpenChange={(open: boolean) => {
          if (!open) {
            onClose();
          }
        }}
      >
        <ModalContent className="flex flex-col gap-1 bg-neutral-100 w-5xl h-[75vh] opacity-70 ">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-center">
                Modal Title
              </ModalHeader>
              <ModalBody>Sign Up Form Goes Here</ModalBody>
              <ModalFooter className="gap-10">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submitt
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUp;
