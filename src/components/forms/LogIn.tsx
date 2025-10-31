import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import Logo from "../Logo";

interface ILogInProps {
  isOpen: boolean;
  onClose: () => void;
}
const LogIn = ({ isOpen, onClose }: ILogInProps) => {
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
        <ModalContent className="flex flex-col gap-1  w-xl h-[60vh] opacity-90 rounded-lg z-999 inset-0">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-center">
                <div className="flex items-center flex-col gap-0">
                  <Logo background="white" />
                  <p className="text-sm top-0 opacity-95">
                    Welcome! please sign in to continue.
                  </p>
                </div>
              </ModalHeader>
              <ModalBody className="border-2 border-neutral-300 mx-5 rounded-lg p-2.5">
                <div className="p-2.5 flex flex-col">
                  <label htmlFor="" id="email" className="font-semibold mb-1.5">
                    Email
                  </label>
                  <Input
                    placeholder="Please enter your email"
                    type="email"
                    className="mx-1 m-2"
                  ></Input>
                  <label htmlFor="">Password</label>
                  <Input
                    placeholder="Please enter your password"
                    type="password"
                  ></Input>
                </div>
              </ModalBody>
              <ModalFooter className="gap-5">
                <Button
                  color="danger"
                  onPress={onClose}
                  className="bg-neutral-700 text-white rounded-lg px-5 py-2.5 hover:cursor-pointer"
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  className="bg-neutral-700 text-white rounded-lg px-5 py-2.5 hover:cursor-pointer"
                >
                  Sign In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LogIn;
