import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host="http://localhost:5000"
  const notesIni =[]

  const [notes, setNotes] = useState(notesIni);

  //Get notes
const getNotes=async()=>{
  //Todo:Call Api
  const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
     
    },
  });
  const Json= await response.json();
setNotes(Json)}
  

//Add note
const addNote=async(title,description,tag)=>{
  //Todo:Call Api
  const response = await fetch(`${host}/api/notes/addNewNotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
     
    },
    body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
  });

  const note={
    _id: "63e2629687e41ebbf0b874944",
    user: "63dfcf4f199f854a725a080d",
    title: title,
    description:description,
    tag:tag,
    date: "2023-02-07T14:39:18.737Z",
    __v: 0,
  }
  setNotes(notes.concat(note));

}

//Delete note
const deleteNote=async(id)=>{
  const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
     
    }
  });
  const newNote=notes.filter((note)=>{ return note._id!==id})
  setNotes(newNote);
  
}
//Edit note
const editNote= async (id,title,description,tag)=>{
  //API CALL
  const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
     
    },
    body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
  });
  // const Json= response.json();

  let newNotes=JSON.parse(JSON.stringify(notes));
  //LOGIC TO EDIT NOTES
  for (let index = 0; index < notes.length; index++) {
    const element = newNotes[index];
    if(element._id===id){
      newNotes[index].title=title;
      newNotes[index].description=description;
      newNotes[index].tag=tag;
      break;
    } 
  }
  setNotes(newNotes);
}

  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}
export default NoteState;
