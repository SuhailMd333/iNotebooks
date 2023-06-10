import React, { useState } from 'react'
import  {useContext}from 'react'
import Notecontext from '../context/notes/NoteContext';
const AddNote = () => {


    const context = useContext(Notecontext);


  const  {addNote} = context;
const[note,setnotes] = useState({title:"" , description: "" , tag: "default"});
  const handleClick = () => {
    // preventDefault()
    //adding a note
    try{
     addNote(note.title,note.description,note.tag)
     setnotes({title:"" , description: "" , tag: "Personal"})
    } catch(error) {
console.error(error.message)
    }
  }

  const handleOnChange = (e) =>{ 
    
setnotes({...note,[e.target.name] : e.target.value})
  }
  return (
    <div>
      < div className=' flex justify-center ml-10  '>
      
      <div className=" max-w-xs  mt-10" >
<div className='flex justify-center'>
        <h2 className='mb-3 font-bold text-purple-800' >Add Note</h2>
        </div>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Title
      </label>
      <input value={note.title} minLength={5} onChange={handleOnChange}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title"id="title" type="text" placeholder="Enter Title" required/>
    </div>
    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <input value={note.description}  minLength={5} onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="description"id="description" type="text" placeholder="Enter description" required/>
      <p className="text-red-500 text-xs italic"></p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
        Tag
      </label>
      <input  value={ note.tag}  minLength={5} onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="tag"id="tag" type="text" placeholder="Enter tag" required/>
      <p className="text-red-500 text-xs italic"></p>
    </div>

    <div className="flex items-center justify-between ">
      <button  disabled={note.title.length<5 || note.description.length < 5 || note.tag.length <4} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={handleClick} type="button">
        AddNote
      </button>
     
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;Your notes secure on cloud
  </p>
</div>

</div>

    </div>
  )
}

export default AddNote