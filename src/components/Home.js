import React ,{useContext}from 'react'
import Notes from './Notes'

const Home = (props) => {


   

  return (

    <>
    {/* <div className="center flex flex-row">
      <div className="left w-2/4 flex  justify-center" >
    <AddNote/>
    </div>

    <div className="right w-2/4 pr-10 ">
   <Notes/>
   </div>
   </div> */}


<Notes showAlert={props.showAlert} />
</>

  )
}

export default Home
