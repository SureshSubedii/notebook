import React from 'react'
import { useContext,useEffect,useRef,useState } from "react";
import Notecontext from  '../context/notes/NoteContext';
import NoteItem from './NoteItem'
import AddNote from "./AddNote";;
export default function Notes() {
    const context=useContext(Notecontext);
  const {notes,getNotes}= context;
  const [note, setnote] = useState({etitle:"",edescription:"",etag:""})
  const handleClick=(e)=>{
    e.preventDefault();
  }

  const handleChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  useEffect(() => {
  getNotes();
  // eslint-disable-next-line 
  }, [])
  const ref = useRef(null);
  const updateNote=(currentNote)=>{
    ref.current.click();
    setnote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    
  }
  return (
    <>
    <AddNote/>
    
<button type="button" ref={ref} className="btn btn-primary d-none my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={handleChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription}onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="etag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag}onChange={handleChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div className="row my-1">
        <h2> Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem key ={note._id} updateNote={updateNote} note={note}/>
      })}
        </div>
        </>
  )
}
