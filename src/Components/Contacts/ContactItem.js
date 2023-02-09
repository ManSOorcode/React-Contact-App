import { Fragment, useContext } from "react";
import ContactItemList from "./ContactItemList";

// import userIcon from "../../Assets/ios-contact-4.png";
// import phoneIcon from "../../Assets/icons8-call-gradak/icons8-call-48.png";
// import emailIcon from "../../Assets/icons8-gmail-logo-ios-16-glyph/icons8-gmail-logo-60.png";
// import OneButton from "../UI/Button/OneButton";
// import TwoButton from "../UI/Button/TwoButton";
import { ContentContext } from "../../store/ContextProvider";

const ContactItem = (props) => {
  const contentCtx = useContext(ContentContext);

  // console.log(contentCtx.contents);
  // console.log(props);
  return (
    <Fragment>
      <ul className="grid grid-cols-1 h-fit lg:grid-cols-4 md:grid-cols-2">
        {contentCtx.contents?.map((item) => (
          <ContactItemList
            onClickEdit={props.onClickEdit.bind(null, item.id)}
            onClickDelet={props.onClickDelet.bind(null, item.id)}
            id={item.id}
            key={item.id}
            name={item.name}
            email={item.email}
            number={item.number}
          />
        ))}
      </ul>

      {/* <div className="flex flex-col p-4 m-4 text-lg rounded-xl bg-slate-200">
        <div className="flex flex-col items-center justify-center w-full ">
          <img src={userIcon} alt="user Icon was here" className="w-20" />
          <p>Mansoor Khan</p>
        </div>
        <div className="flex w-full ">
          <img src={emailIcon} alt="user Email" className="w-8 mr-2" />
          <p className="break-words">khanMan12345Soor@gmail.com</p>
        </div>
        <div className="flex w-full ">
          <img src={phoneIcon} alt="user Number" className="w-8 mr-2" />
          <p>8828674110</p>
        </div>
        <div className="flex justify-end gap-4 mt-4 mr-4">
          <OneButton>Edit</OneButton>
          <TwoButton onClick={props.onClick}>Delet</TwoButton>
        </div>
      </div> */}
      {/* <div className="p-4 m-4 rounded-xl bg-slate-200">
        <div className="flex flex-col items-center justify-center w-full">
          <img src={userIcon} alt="user Icon was here" className="w-20" />
          <p>Mansoor Khan</p>
        </div>
        <div className="flex w-full ">
          <img src={emailIcon} alt="user Email" className="w-8 mr-2" />
          <p className="break-words">khanMan12345Soor@gmail.com</p>
        </div>
        <div className="flex w-full">
          <img src={phoneIcon} alt="user Number" className="w-8 mr-2" />
          <p>8828674110</p>
        </div>
      </div>
      <div className="p-4 m-4 rounded-xl bg-slate-200">
        <div className="flex flex-col items-center justify-center w-full">
          <img src={userIcon} alt="user Icon was here" className="w-20" />
          <p>Mansoor Khan</p>
        </div>
        <div className="flex w-full ">
          <img src={emailIcon} alt="user Email" className="w-8 mr-2" />
          <p className="break-words">khanMan12345Soor@gmail.com</p>
        </div>
        <div className="flex w-full">
          <img src={phoneIcon} alt="user Number" className="w-8 mr-2" />
          <p>8828674110</p>
        </div>
      </div>
      <div className="p-4 m-4 rounded-xl bg-slate-200">
        <div className="flex flex-col items-center justify-center w-full">
          <img src={userIcon} alt="user Icon was here" className="w-20" />
          <p>Mansoor Khan</p>
        </div>
        <div className="flex w-full ">
          <img src={emailIcon} alt="user Email" className="w-8 mr-2" />
          <p className="break-words">khanMan12345Soor@gmail.com</p>
        </div>
        <div className="flex w-full">
          <img src={phoneIcon} alt="user Number" className="w-8 mr-2" />
          <p>8828674110</p>
        </div>
      </div> */}
    </Fragment>
  );
};

export default ContactItem;
