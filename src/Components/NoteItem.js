import React,{useContext}from "react";
import Notecontext from "../context/notes/NoteContext";

export default function NoteItem(props) {
  const context=useContext(Notecontext);
  const {deleteNote}=context;
  const { note,updateNote } = props;
  return (
    <div className="col mx-1">
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <div className="d-flex items-align-left">
        <p className="card-text"> {note.description}</p>
        </div>
        
        
        <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id);  props.showAlert("Deleted sucessfully","success")}}></i>
        <i className="fa-regular fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
        
      </div>
    </div>
    </div>
  );
}
