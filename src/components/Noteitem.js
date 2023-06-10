import React ,{useContext}from 'react'
import NoteContext from '../context/notes/NoteContext';
const Noteitem = (props) => {

    const {note,updateNote} =props; 
    const {deleteNote} = useContext(NoteContext) 
  return (
    <div className='col-md-4'>
     <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{note.date}</span>
        {/* <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">Design</a> */}
        <i className="fa-solid fa-pen-to-square fa-beat" onClick={ () =>{ updateNote(note)}}></i>
        <i className="fa-solid fa-trash fa-beat" onClick={ () =>{ deleteNote(note._id)}}></i>
    </div>

    <div className="mt-2">
        <p href="/" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{note.title}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{note.description}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">{note.tag}</a>

    </div>
    </div>
    </div>
  )
}

export default Noteitem
