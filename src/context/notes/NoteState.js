import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "Hiii",
    age: "19"
  }
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Neuuu",
        age: "21"
      })
    }, 2000)
  }

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
