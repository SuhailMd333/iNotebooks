import React from 'react';
import Notecontext from './NoteContext';
import { useState } from 'react';


const NoteState = (props) => {
const host = "http://localhost:5000"
    const notesInitial = []
  const  [notes,setnotes] = useState(notesInitial)

// Get all notes for the user

const fetchNotes = async () => {
  const response =  await fetch(`${host}/api/notes/fetchallnotes`,{
    method: 'GET',
    headers: {
      'content-type' : 'application/json',
      'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MjAxYTUxZjYzM2MyMTVjODY2OTdiIn0sImlhdCI6MTY4MzA5NTk3M30.kp7bZpi8LieKVVdnwzzLLeIFk3sX5oSzqqGJMMGGx7A' 
    }
    // body :JSON.stringify({title,description,tag})


  })
const json = await response.json();

setnotes(json)
console.log(json)
}
  // Add a Note 

const addNote =  async (title,description,tag) =>{


      // Api call for Data
      const response = await fetch(`${host}/api/notes/addnote`,{
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MjAxYTUxZjYzM2MyMTVjODY2OTdiIn0sImlhdCI6MTY4MzA5NTk3M30.kp7bZpi8LieKVVdnwzzLLeIFk3sX5oSzqqGJMMGGx7A'
        },
        body :JSON.stringify({title,description,tag})


      })
const note = await response.json();

 
  console.log(setnotes(notes.concat(note)))
  
}
  // Delete A  Note

const deleteNote = async (id) =>{
try{
  const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json',
      'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MjAxYTUxZjYzM2MyMTVjODY2OTdiIn0sImlhdCI6MTY4MzA5NTk3M30.kp7bZpi8LieKVVdnwzzLLeIFk3sX5oSzqqGJMMGGx7A'
    }
    


  })
  const json = await response.json();
console.log(json)
} catch(error){
  console.log(error.message)
}

  const newNotes = notes.filter((note) => {return note._id !== id})
  setnotes(newNotes)
  
}

   //  Edit  a Note
  const editNote =  async (id,title,description,tag) =>{
  
      // Api call for Data
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method: 'PUT',
          headers: {
            'content-type' : 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MjAxYTUxZjYzM2MyMTVjODY2OTdiIn0sImlhdCI6MTY4MzA5NTk3M30.kp7bZpi8LieKVVdnwzzLLeIFk3sX5oSzqqGJMMGGx7A'
          },
          body :JSON.stringify({title,description,tag})


        })
  const json = await response.json();
  console.log(json)
    // logic Edit a note 

    let newNotes  = JSON.parse(JSON.stringify(notes))
    for(let i =0 ; i< newNotes.length; i++){
    let element = newNotes[i]
    if(element._id == id ){
      newNotes[i].title = title;
      newNotes[i].description = description;
      newNotes[i].tag = tag;
      break;
     }
    
  }
  setnotes(newNotes)

  }
    return (
<Notecontext.Provider value= { {notes,editNote,addNote,deleteNote,fetchNotes}}>  

    {props.children}
</Notecontext.Provider>

    )
}

export default NoteState 