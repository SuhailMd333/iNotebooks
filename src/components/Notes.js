import react,{useContext} from "react";
import Notecontext from '../context/notes/NoteContext';

import React from 'react'
import Noteitem from "./Noteitem";
function Notes() {


    const context = useContext(Notecontext);


  const  {notes,setnotes} = context;

  return (
    <div className="  ">
      <div className="container flex justify-center align-center">
      
<h2 className="font-bold text-purple-800 align-center my-4">Your Notes</h2>
</div>

<div className="flex flex-evenly space-y-4  row">
{
  notes.map((note) =>{
    return <Noteitem note={note}/>
  })
}
</div>


    </div>
  )
}

export default Notes
