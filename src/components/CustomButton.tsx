import { Button } from "@heroui/react";

interface ICustomButtonProps {
  text: string;
  classNames: string;
  onClick?: () => void;
}
const CustomButton = ({ text, classNames, onClick }: ICustomButtonProps) => {
  return (
    <Button className={`${classNames}`} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
