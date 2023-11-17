import React, { useReducer, useState } from "react";
export const ContentContext = React.createContext({
  contents: [],
  editContents: [],
  add: () => {},
  edit: () => {},
  delet: () => {},
  stateFunction: () => {},
  reassign: () => {},

  toggle: () => {},

  formToggles: "",
  isDark: false,

  isdarkhandler: () => {},

  //for HeaderIcon
  headerIcon: "",
  isHeaderIcon: () => {},
  // stateValue: "",
});

const initialState = {
  contents: [],
  editContents: [],
};

const reducer = (state, action) => {
  // let contentValue;
  let editContentValue;

  // console.log(state.contents);
  // console.log(action.item);
  if (action.type === "ADD") {
    // console.log(state);
    // console.log(action.content);

    const contentValue = [...state.contents, action.item];
    // console.log(contentValue);
    // editContentValue = [...state.editContents, action.editContent];
    editContentValue = contentValue;
    // console.log(editContentValue);
    return {
      contents: contentValue,
      editContents: editContentValue,
    };
  }

  if (action.type === "REASSIGN") {
    const editContent = state.contents.map((el) => {
      if (el.id === action.item.id) {
        // el.name.replace(el.name, action.item.name);
        // el.email.replace(el.name, action.item.email);
        // el.number.replace(el.name, action.item.number);
        el = action.item;
      }

      // console.log(el);
      return el;
    });
    // console.log(action.item);
    // console.log(editContent);
    // console.log(state.contents);
    // console.log(editContent);

    return { contents: editContent, editContents: state.editContents };
  }

  if (action.type === "EDIT") {
    const oldEditContent = state.contents.filter(
      (item) => item.id === action.id
    );
    // console.log(oldEditContent);
    // editContentValue = editContent;
    return { contents: state.contents, editContents: oldEditContent };
  }

  if (action.type === "DELET") {
    // console.log(state);
    // console.log(contentValue);
    const contentValue = state.contents.filter((item) => item.id !== action.id);

    return {
      contents: contentValue,
      //  editContent: editContentValue
    };
  }
};

const ContextProvider = (props) => {
  const [contentState, dispatch] = useReducer(reducer, initialState);

  const [formToggle, setFormToggle] = useState(true);
  const [isdarkbackground, setdark] = useState(false);

  //for headerIcon
  const [isHeader, setHeader] = useState("");

  const addContentHandler = (item) => {
    // e.preventDefault()
    // console.log(item);
    dispatch({
      type: "ADD",
      item: item,
    });
  };

  const editContentHandller = (id) => {
    // console.log(id);
    dispatch({
      type: "EDIT",
      id: id,
    });
  };

  const reassignEditContentHandller = (item) => {
    // console.log(item);
    dispatch({
      type: "REASSIGN",
      item: item,
    });
  };

  const deletContentHandler = (id) => {
    // console.log(id);
    dispatch({
      type: "DELET",
      id: id,
    });
  };
  // console.log(contentState);

  const contentStore = {
    contents: contentState.contents,
    editContents: contentState.editContents,

    formToggles: formToggle,

    isDark: isdarkbackground,

    add: addContentHandler,
    delet: deletContentHandler,
    edit: editContentHandller,
    reassign: reassignEditContentHandller,
    toggle: setFormToggle,
    isdarkhandler: setdark,

    //for Header Icon
    headerIcon: isHeader,
    isHeaderIcon: setHeader,
    // (value, callback) => {
    //   setHeader(value);
    //   callback(); // Execute the callback after updating the state
    // },
  };

  // console.log(contentStore.formToggles);
  // console.log(contentStore.headerIcon, contentStore.isHeaderIcon);

  return (
    <ContentContext.Provider value={contentStore}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContextProvider;
