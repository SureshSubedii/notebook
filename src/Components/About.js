import React,{useEffect,useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a= useContext(NoteContext)
  useEffect(()=> {
    a.update()
    // eslint-disable-next-line 
  }, []);
  
  return (
    <div>About {a.state.name},{a.state.age}</div>
  )
}

export default About