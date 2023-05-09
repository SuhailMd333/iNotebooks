import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useEffect } from 'react'


const About = () => {

  const a = useContext(NoteContext)

  useEffect ( () => {
  a.update()
  } ,[])
  return (
    <div>
      how are you ! I am {a.first.ok} and i am {a.first.fine}
    </div>
  )
}

export default About
