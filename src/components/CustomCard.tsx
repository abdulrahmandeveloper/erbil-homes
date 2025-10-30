import {
  Image,
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
} from "@heroui/react";
import React from "react";

type CustomCardProps = {
  url: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonPath: string;
};
const CustomCard = ({
  url,
  title,
  description,
  buttonTitle,
  buttonPath,
}: CustomCardProps) => {
  return (
    <Card className="w-[450px] flex flex-col">
      <CardHeader>
        <Image
          src={url}
          alt="Card image"
          className="w-full h-72 object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="flex-1">
        <h1 className="font-bold text-neutral-600 text-xl mt-1 mb-5">
          {title}
        </h1>
        <p className="text-neutral-500"> {description}</p>
      </CardBody>
      <CardFooter>
        <Link
          href={buttonPath}
          className="px-14 py-4 border border-black rounded-lg hover:border-white hover:bg-neutral-400 hover:text-white"
        >
          {buttonTitle}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
