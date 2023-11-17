import React, { useRef, useContext, useEffect, useState } from "react";
import { ContentContext } from "../../store/ContextProvider";
import { getUUID } from "../../Utils/getUUID";

import OneButton from "./Button/OneButton";
import TwoButton from "./Button/TwoButton";
import Overlay from "./Overlay";

import firstImg from "../../Assets/header-images/header-one.gif";
import secondImg from "../../Assets/header-images/header-two.webp";
import thirdImg from "../../Assets/header-images/header-three.webp";
import fourImg from "../../Assets/header-images/header-four.webp";
import fiveImg from "../../Assets/header-images/header-five.webp";
import sixImg from "../../Assets/header-images/header-six.gif";
import sevenImg from "../../Assets/header-images/header-seven.gif";

const Modal = (props) => {
  const [error, setError] = useState(null);
  let fullName = useRef(null);
  let email = useRef(null);
  let number = useRef(null);

  // useState()

  // console.log(fullName);

  const contentCtx = useContext(ContentContext);

  const addFormSubmitHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: fullName.current.value.trim(),
      email: email.current.value.trim(),
      number: number.current.value.trim(),
    };

    if (
      !isValidName(formData.name) ||
      !isValidEmail(formData.email) ||
      !isValidNumber(formData.number)
    ) {
      // Display an error message or handle the validation error appropriately
      setError("Invalid input. Please check your input values.");
      return;
    }

    const userData = {
      id: getUUID(),
      name: fullName.current.value,
      email: email.current.value,
      number: number.current.value,
    };

    contentCtx.add(userData);

    const headersImages = [
      firstImg,
      secondImg,
      thirdImg,
      fourImg,
      fiveImg,
      sixImg,
      sevenImg,
    ];
    const randomHeaderIcon =
      headersImages[Math.floor(Math.random() * headersImages.length)];

    console.log(Math.floor(Math.random() * headersImages.length));

    contentCtx.isHeaderIcon(randomHeaderIcon);
    //    () => {
    //   console.log(contentCtx.headerIcon); // Ensure the state is updated
    //   // Additional logic if needed
    // });

    // contentCtx.localStorageValue(userData);

    fullName.current.value = "";
    email.current.value = "";
    number.current.value = "";

    props.modalState(true);
  };

  // console.log(!contentCtx.formToggles);
  // console.log(contentCtx);

  useEffect(() => {
    if (!contentCtx.formToggles) {
      // console.log(fullName);
      fullName.current.value = contentCtx.editContents[0].name;
      email.current.value = contentCtx.editContents[0].email;
      number.current.value = contentCtx.editContents[0].number;
    }
  }, [contentCtx.formToggles, contentCtx.editContents]);

  const edditFormSubmitHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: fullName.current.value.trim(),
      email: email.current.value.trim(),
      number: number.current.value.trim(),
    };

    if (
      !isValidName(formData.name) ||
      !isValidEmail(formData.email) ||
      !isValidNumber(formData.number)
    ) {
      // Display an error message or handle the validation error appropriately
      setError("Invalid input. Please check your input values.");
      return;
    }

    contentCtx.reassign({
      id: contentCtx.editContents[0].id,
      name: fullName.current.value,
      email: email.current.value,
      number: number.current.value,
    });

    props.modalState(true);
  };

  const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidNumber = (number) => /^\d{10}$/.test(number);

  const formVisible =
    contentCtx.formToggles === true
      ? addFormSubmitHandler
      : edditFormSubmitHandler;

  const formStyle =
    contentCtx.formToggles === true ? "bg-stone-300" : "bg-green-500";

  return (
    <Overlay>
      <form
        className={` grid p-4 text-left  ${formStyle}  w-72 sm:w-[400px] md:w-[600px] text-lg transition duration-1000 ease-in rounded-2xl z-50`}
        onSubmit={formVisible}
      >
        <div className="w-full h-full my-2">
          <div className="flex flex-col w-full mb-2 ">
            <label className="mb-2">FullName:</label>
            <input type="text" ref={fullName} />
          </div>
          <div className="flex flex-col w-full mb-2">
            <label className="mb-2">E-mail:</label>
            <input type="text" ref={email} />
          </div>
          <div className="flex flex-col w-full mb-2">
            <label className="mb-2">Number:</label>
            <input type="number" ref={number} />
          </div>
          {error && <div className="text-red-500">{error}</div>}

          <div className="flex justify-end gap-5 mr-5 ">
            <TwoButton onClick={props.onClick}>Cancel</TwoButton>
            <OneButton>Add</OneButton>
          </div>
        </div>
      </form>
    </Overlay>
  );
};

export default Modal;
