import React from 'react'

const Noteitem = (props) => {

    const {note} =props; 
  return (
    <div className='col-md-4'>
     <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">Design</a>
    </div>

    <div class="mt-2">
        <a href="/" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{note.title}</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">{note.description}</p>
    </div>

    <div class="flex items-center justify-between mt-4">
        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Read more</a>

    </div>
    </div>
    </div>
  )
}

export default Noteitem
