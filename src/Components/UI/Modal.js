import React, { useRef, useContext, useEffect, useState } from "react";
import { ContentContext } from "../../store/ContextProvider";
import { getUUID } from "../../Utils/getUUID";

import OneButton from "./Button/OneButton";
import TwoButton from "./Button/TwoButton";
import Overlay from "./Overlay";

const Modal = (props) => {
  let fullName = useRef(null);
  let email = useRef(null);
  let number = useRef(null);

  // useState()

  // console.log(fullName);

  const contentCtx = useContext(ContentContext);

  const addFormSubmitHandler = (e) => {
    e.preventDefault();

    contentCtx.add({
      id: getUUID(),
      name: fullName.current.value,
      email: email.current.value,
      number: number.current.value,
    });

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

    contentCtx.reassign({
      id: contentCtx.editContents[0].id,
      name: fullName.current.value,
      email: email.current.value,
      number: number.current.value,
    });

    props.modalState(true);
  };

  const formVisible =
    contentCtx.formToggles === true
      ? addFormSubmitHandler
      : edditFormSubmitHandler;

  const formStyle =
    contentCtx.formToggles === true ? "bg-stone-300" : "bg-green-500";

  return (
    <Overlay>
      <form
        className={`fixed grid w-[30rem] p-4 text-left left-[calc(50%-15rem)] ${formStyle} top-40 text-lg transition duration-1000 ease-in rounded-2xl z-50`}
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
