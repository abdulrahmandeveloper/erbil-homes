import Logo from "@/components/Logo";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className="font-bold text-xl text-black mb-6 md:mb-0">
          <Logo background="white" />
        </div>

        <ul className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <li>
            <a href="#" className="hover:text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
          </li>
        </ul>

        <div className="flex gap-4 text-gray-500">
          <i className="fab fa-facebook">FaceBook</i>
          <i className="fab fa-instagram">Instagram</i>
          <i className="fab fa-x-twitter">Twitter</i>
          <i className="fab fa-linkedin">LinkedIn</i>
          <i className="fab fa-youtube">YouTube</i>
        </div>
      </div>

      <div className="border-t text-center text-sm text-gray-500 py-4">
        © BASECLUB. All rights reserved.
        <a href="#" className="ml-4 hover:text-black">
          Privacy Policy
        </a>
        <a href="#" className="ml-4 hover:text-black">
          Terms of Service
        </a>
        <a href="#" className="ml-4 hover:text-black">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
