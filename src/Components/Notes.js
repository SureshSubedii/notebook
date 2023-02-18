import React from 'react'
import { useContext } from "react";
import Notecontext from  '../context/notes/NoteContext';
import NoteItem from './NoteItem';
export default function Notes() {
    const context=useContext(Notecontext);
  // const [notes, setNotes] = context;
  const notes = context.notes;
  return (
    <div className="row my-1">
        <h2> Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
      })}
        </div>
  )
}
