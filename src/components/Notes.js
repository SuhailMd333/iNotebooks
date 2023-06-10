import react,{useContext,useState, useRef,useEffect} from "react";
import Notecontext from '../context/notes/NoteContext';
import AddNote from './AddNote'
import React from 'react'
import Noteitem from "./Noteitem";
import {useNavigate} from "react-router-dom"
function Notes ( props) {

  const context = useContext(Notecontext);


  const  {notes,fetchNotes,editNote} = context;
let navigate = useNavigate()
  useEffect ( () => {
    try{
      if(!localStorage.getItem('token')){
        navigate('/login')
 
      }else {
        
        fetchNotes()
      }
    
    } catch(error){
      console.error(error.message)
    }

  },[])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNotes] = useState({etitle: "", edescription: "", etag: ""})

  // Function For update note
  const updateNote = (currentNote) => {
ref.current.click()
setNotes({id:currentNote._id,etitle:currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  // for Modal All The Function 
 

  const handleClick = () => {
    // preventDefault()
    //adding a note
    console.log('update note is running')
editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click()
  }

  const handleOnChange = (e) =>{ 
    
setNotes({...note,[e.target.name] : e.target.value})
  }
  return (
<>
    <AddNote/>
  
<button type="button"  ref={ref}  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EditNote</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* This is the start Point Of the  update note input */}
        < div className=' flex justify-center ml-10 bg-purple-50 '>
      
      <div className=" max-w-xs  mt-10" >
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Title
      </label>
      <input minLength={5} required value={note.etitle} onChange={handleOnChange}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="etitle"id="etitle" type="text" placeholder="Enter Title" />
    </div>
    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <input  minLength={5}   required value={note.edescription} onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="edescription"id="edescription" type="text" placeholder="Enter description" />
      <p className="text-red-500 text-xs italic"></p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
        Tag
      </label>
      <input value={ note.etag}onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="etag"id="etag" type="text" placeholder="Enter tag" minLength={5}/>
      <p className="text-red-500 text-xs italic"></p>
    </div>

    {/* <div className="flex items-center justify-between ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={handleClick} type="button">
        AddNote
      </button>
     
    </div> */}
  </form>
  {/* <p className="text-center text-gray-500 text-xs">
    &copy;Your notes secure on cloud
  </p> */}
</div>

</div>
        {/* this is end point of input  */}
      </div>
      <div className="modal-footer">
        <button  ref={refClose}  type="button" className="btn btn-secondary text-black" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length < 5 || note.etag.length <4} onClick={handleClick} type="button" className="btn btn-primary text-black">Update note</button>
      </div>
    </div>
  </div>
</div>


    <div className="  ">
      <div className="container flex justify-center align-center">
      
<h2 className="font-bold text-purple-800 align-center my-4">Your Notes</h2>
</div>

<div className="flex flex-evenly space-y-4 mx-3 row">
  < div className="text-purple-800 d-flex justify-center">
  {notes.length <=0 && 'No Notes To Display'}
  </div>
{
  notes.map((note) =>{
    return <Noteitem key={note._id} updateNote={updateNote}note={note}/>
  })
}
</div>


    </div>
    </>
  )
}

export default Notes
