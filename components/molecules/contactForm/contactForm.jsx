"use client";
import RadioButton from "@/components/elements/radioButton/radioButton";
import CheckBoxForm from "../../elements/checkBoxForm/checkBoxForm";
import InputForm from "../../elements/inputForm/inputForm";
import SubmittedToast from "../../elements/submittedToast/submittedToast";
import TextAreaInput from "../../elements/textAreaInput/textAreaInput";
import React, { useState, useEffect, useRef } from "react";
import {
  validateField,
  validateEmail,
  validateCheck,
  validateRadioOption,
} from "@/utils/validateForm";
import Loading from "@/components/elements/loading/loading";

const ContactForm = ({ openModalContactForm, setOpenModalContactForm }) => {
  const ref = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openModalContactForm &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpenModalContactForm(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openModalContactForm, , setOpenModalContactForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      const dataToSend = {
        Nombre: name,
        Email: email,
        Detalle: messageText,
      };
      await sendMailAdmin(dataToSend);
    }
  };

  const validateForm = () => {
    if (!validateField(name)) {
      setErrorText(`El campo Nombre es requerido.`);
      return false;
    }

    if (!validateField(email)) {
      setErrorText(`El campo Email es requerido.`);
      return false;
    } else {
      if (!validateEmail(email)) {
        setErrorText(`El campo Email no es válido.`);
        return false;
      }
    }
    if (!validateCheck(checkPrivacy)) {
      setErrorText(`Debes aceptar la política de privacidad.`);
      return false;
    }
    return true;
  };

  const sendMailAdmin = async (formData) => {
    const subject = "Nuevo mensaje desde el formulario de contacto";
    //message is only used for mailFlag = 2
    const message = `Hola ${formData.name}, nuevo mensaje de test`;
    const email = "theayman9@gmail.com";
    const mailFlag = "1";
    try {
      const response = await fetch("/api/sendEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
          email,
          mailFlag,
          formData,
        }),
      });
      if (response?.ok) {
        resetForm();
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("success");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("error");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessageText("");
    setErrorText("");
    setCheckPrivacy(false);
  };

  const handleCloseModal = () => {
    setOpenModalContactForm(false);
  };

  return (
    <div className="flex fixed top-0 left-0 w-screen h-auto justify-center items-center bg-gray-700 bg-opacity-60 z-50">
      {loading && <Loading />}
      {submitted && (
        <div className="flex fixed top-0 left-0 w-screen h-auto justify-center items-center z-50">
          <div
            className={`flex w-auto h-auto justify-center items-center text-center`}
          >
            <SubmittedToast type={submittedMessage} />
          </div>
        </div>
      )}

      <div
        className={`flex flex-col w-auto min-w-[325px] max-w-[450px] h-[100vh] items-center text-white bg-black overflow-y-scroll md:overflow-y-auto py-4 z-30`}
        ref={ref}
      >
        <div className="flex w-full h-auto justify-end pr-8">
          <button
            onClick={handleCloseModal}
            className="flex w-auto h-auto underline font-horizon "
          >
            X
          </button>
        </div>
        <div className="flex flex-col w-full max-w-[400px] px-6 h-auto">
          <h2 className="text-white text-2xl font-horizon uppercase py-8">
            Cuéntanos
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-auto font-notosans gap-4"
            noValidate
          >
            <div className="flex flex-col w-full h-auto">
              <div className="flex flex-col w-full h-auto ">
                <div className="flex w-auto h-auto  text-lg">Nombre</div>
                <InputForm
                  id={"Name"}
                  name={"Name"}
                  type={"text"}
                  inputValue={name}
                  setInputValue={setName}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-auto h-auto ">
                <div className="flex w-auto h-auto  text-lg">Email</div>
                <InputForm
                  id={"Email"}
                  name={"Email"}
                  type={"text"}
                  inputValue={email}
                  setInputValue={setEmail}
                  required={true}
                />
              </div>

              <div className="flex w-auto h-auto pt-5">
                Y detalla algo más de qué se trata para poderlo valorar:
              </div>
              <div className="flex w-auto h-auto ">
                <TextAreaInput
                  id={"message"}
                  name={"message"}
                  type={"textarea"}
                  placeholder={"Escribe tu mensaje..."}
                  inputValue={messageText}
                  setInputValue={setMessageText}
                  required={true}
                />
              </div>
            </div>

            <div className="flex w-full h-auto ">
              <CheckBoxForm
                id={"privacy_policy"}
                name={"privacy_policy"}
                labelText={{
                  text: "Acepto la",
                  link: "política de privacidad",
                }}
                inputValue={checkPrivacy}
                setInputValue={setCheckPrivacy}
                required={true}
              />
            </div>
            <div className="text-red-500 text-lg font-semibold justify-center">
              {errorText}
            </div>
            <div className="flex w-auto h-auto justify-center md:mt-5 md:pb-10">
              <button type="submit" className={`flex w-auto h-auto py-3`}>
                <span className="font-horizon uppercase underline font-semibold text-xl">
                  Enviar
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
