import { Fragment, useContext } from "react";
import ContactItemList from "./ContactItemList";

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
    </Fragment>
  );
};

export default ContactItem;
