import React from "react";
import Notecontext from "../context/notes/NoteContext";
import { useContext,useState } from "react";
const AddNote = (props) => {
  const context = useContext(Notecontext);
  const { addNote } = context;

  const [note, setnote] = useState({title:"",description:"",tag:"Default"})
  const handleClick=(e)=>{
    e.preventDefault();
    if((note.title===""||note.description==="")){
      props.showAlert("Fill all the boxes to add notes","danger")
    }
    else{
    
     addNote(note.title,note.description,note.tag);
     props.showAlert("Added sucessfully","success")
  }}

  const handleChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
  
      <div className="container ">
        <h1>Enter your notes below.</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={handleChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
</div>
  );
};

export default AddNote;
