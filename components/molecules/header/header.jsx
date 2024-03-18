"use client";
import BreakPointsHelper from "../../elements/breakPointsHelper/breakPointsHelper";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../contactForm/contactForm";
import { createPortal } from "react-dom";

const Header = () => {

  const [openModalContactForm, setOpenModalContactForm] = useState(false);

  const handleFormAndPolicy = () => {
    setOpenModalContactForm(!openModalContactForm);
  };
  return (
    <div className="fixed w-[100vw] h-auto top-0 left-0 font-horizon text-xl z-50">
      <div className="flex flex-row w-full h-auto justify-between items-center p-4">
        <div className="flex h-auto w-auto">
          <Link href={"/"}>
            <div className="flex md:hidden lg:hidden xl:hidden flex-row h-auto w-auto text-sm">
            Que visitar en catalunya?
            </div>
            <div className="hidden md:flex flex-row h-auto w-auto text-lg">
              Que visitar en catalunya?
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-auto h-auto underline">
          {openModalContactForm &&
            createPortal(
              <div className="flex fixed w-screen h-screen justify-center items-center bg-gray-700 bg-opacity-60 z-50 ">
                <ContactForm
                  openModalContactForm={openModalContactForm}
                  setOpenModalContactForm={setOpenModalContactForm}
                />
              </div>,
              document.body
            )}
          <button
            className="flex w-auto h-auto text-lg underline"
            onClick={() => handleFormAndPolicy()}
          >
            <span className="flex md:hidden lg:hidden xl:hidden flex-row h-auto w-auto text-sm">
              CONTACTO
            </span>
            <span className="hidden md:flex flex-row h-auto w-auto text-lg">
              CONTACTO            
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
