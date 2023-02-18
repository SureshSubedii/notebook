import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesIni = [
    {
      _id: "63dfd142d3efd04ff178776e",
      user: "63de5a04988791752672d6a2",
      title: "Myfff",
      description: "HEllo from the other side.",
      tag: "How you doing Rat people?",
      date: "2023-02-05T15:54:42.087Z",
      __v: 0,
    },
    {
      _id: "63e2629687e41ebbfb874944",
      user: "63dfcf4f199f854a725a080d",
      title: "ff ",
      description:
        "Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.",
      tag: "tag you?",
      date: "2023-02-07T14:39:18.737Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesIni);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
