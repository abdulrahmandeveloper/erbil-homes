"use client";

import LogIn from "./log-in";
import SignUp from "./sign-up";

interface IAuthFormComponentProps {
  isOpen: boolean;
  onClose: () => void;
  loggedIn: boolean;
}
const FormContainer = ({
  isOpen,
  onClose,
  loggedIn,
}: IAuthFormComponentProps) => {
  if (loggedIn) {
    return <LogIn isOpen={isOpen} onClose={onClose} />;
  } else {
    return <SignUp isOpen={isOpen} onClose={onClose} />;
  }
};

export default FormContainer;
