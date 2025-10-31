"use client";

import Logo from "@/components/Logo";
import { Button, Link } from "@heroui/react";
import { navLinks } from "@/constants/nav-links";
import CustomButton from "@/components/CustomButton";
import FormContainer from "@/components/forms/FormContainer";
import { useState } from "react";

const Navbar = ({ sticky = false }: { sticky?: boolean }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  console.log(showForm);

  return (
    <>
      <div
        className={` ${
          sticky && "sticky top-0 z-50 w-full"
        }  h-16 bg-neutral-800 grid grid-cols-3 px-10`}
      >
        <div>
          <Logo background="black"></Logo>
        </div>
        <div className="flex justify-between items-center px-5 lg:px-20">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className=" hover:text-white text-neutral-400"
              href={`${link.url}`}
            >
              <Button className=" hover:cursor-pointer">{link.title} </Button>
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center gap-4">
          <CustomButton
            onClick={() => {
              setShowForm(!showForm);
              setLoggedIn(true);
            }}
            text="Sign in"
            classNames="text-white rounded-2xl px-3.5 py-1.5 hover:cursor-pointer hover:bg-neutral-700 border-2 border-neutral-700"
          ></CustomButton>

          <CustomButton
            text="Sign up"
            classNames="text-white bg-neutral-700 px-3.5 py-1.5 rounded-2xl hover:cursor-pointer hover:bg-none border-2 border-neutral-700"
            onClick={() => {
              setShowForm(!showForm);
              setLoggedIn(false);
            }}
          ></CustomButton>
        </div>
      </div>

      <FormContainer
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        loggedIn={loggedIn}
      />
    </>
  );
};

export default Navbar;
