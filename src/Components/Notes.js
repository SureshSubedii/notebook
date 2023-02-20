import React from 'react'
import { useContext } from "react";
import Notecontext from  '../context/notes/NoteContext';
import NoteItem from './NoteItem'
import AddNote from "./AddNote";;
export default function Notes() {
    const context=useContext(Notecontext);
  const {notes}= context;
  return (
    <>
    <AddNote/>
    <div className="row my-1">
        <h2> Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem key ={note._id} note={note}/>
      })}
        </div>
        </>
  )
}
