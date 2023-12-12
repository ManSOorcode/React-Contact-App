import React, { useState, useContext } from "react";
import { ContentContext } from "../../store/ContextProvider";

import ContactAddButton from "../UI/Button/Button";

import Modal from "../UI/Modal";

import ContactItem from "../Contacts/ContactItem";
import Header from "../Layout/Header";
import TawkToChat from "../TawkToChat";

const Layer = () => {
  const [modalState, setForm] = useState(true);
  const context = useContext(ContentContext);

  const formShowHandler = (e) => {
    e.preventDefault();
    context.toggle(true);

    setForm(false);
  };

  const formHideHandler = (e) => {
    e.preventDefault();

    setForm(true);
  };

  const hideModalhandler = (condition) => {
    // console.log(modalState);
    // console.log(condition, "condition");
    setForm(condition);
  };

  const deleteHandler = (id) => {
    context.delet(id);
  };

  const editHandler = (id) => {
    context.edit(id);
    context.toggle(false);
    setForm(false);
  };

  return (
    <div
      className={`w-full overflow-scroll ${
        context.isDark ? "bg-[#1f2837]" : "bg-slate-400"
      } h-[100vh]`}
    >
      {!modalState && (
        <Modal onClick={formHideHandler} modalState={hideModalhandler} />
      )}
      <Header />

      <main className="grid  h-[calc(100vh-96px)]    ">
        <ContactItem onClickEdit={editHandler} onClickDelet={deleteHandler} />
      </main>

      <ContactAddButton onClick={formShowHandler} />
      <TawkToChat />
    </div>
  );
};

export default Layer;
