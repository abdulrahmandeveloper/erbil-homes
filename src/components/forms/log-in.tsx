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
import { useState } from "react";

interface ILogInProps {
  isOpen: boolean;
  onClose: () => void;
}
const LogIn = ({ isOpen, onClose }: ILogInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      className="bg-neutral-800/50"
      classNames={{
        wrapper: "fixed inset-0 z-[9999] overflow-auto",
        base: "border-none bg-white",
        backdrop: "bg-neutral-800/50",
      }}
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <ModalContent className="flex flex-col gap-1 w-[500px] rounded-lg bg-white">
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
            <ModalBody className="border border-neutral-300 mx-5 rounded-lg p-2.5 focus:outline-none">
              <div className="p-2.5 flex flex-col">
                <label htmlFor="email" className="font-semibold my-1.5">
                  Email
                </label>
                <Input
                  placeholder="Please enter your email"
                  value={email}
                  type="email"
                  id="email"
                  classNames={{
                    input: "focus:outline-none focus:ring-0 border-none",
                    inputWrapper:
                      "focus:outline-none focus:ring-0 focus:border-neutral-400 border border-neutral-400 mx-1 m-2 p-3 rounded-lg",
                  }}
                />
                <label htmlFor="password" className="font-semibold my-1.5 mt-3">
                  Password
                </label>
                <Input
                  placeholder="Please enter your password"
                  value={password}
                  type="password"
                  id="password"
                  classNames={{
                    input: "focus:outline-none focus:ring-0 border-none ",
                    inputWrapper:
                      "focus:outline-none   focus:border-neutral-400 border border-neutral-400 mx-1 m-2 p-3 rounded-lg",
                  }}
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
  );
};

export default LogIn;
