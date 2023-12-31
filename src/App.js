
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
function App() {

const [alert,setAlert] = useState({type:'' , msg: ''})

 const showAlert = (type,msg) => {
setAlert({
  
  type : type,
  msg: msg
})
 setTimeout(() => {
setAlert(null)
 },2000)
 }
  return (
  <>
  

  <BrowserRouter>
  
  <Navbar/>
  <Alert alert={alert}></Alert>


  <NoteState>
 
  <div className=''>
  <Routes>


  <Route path="/home"
           element={   <Home showAlert={showAlert}/> } />
          
          <Route path="/about"
           element={   <About/> } />

<Route path="/login" 
           element={<Login showAlert={showAlert}/>}  />


           <Route path="/signup"
           element={<Signup showAlert={showAlert} />} />

  </Routes>

  </div>
  </NoteState>
  </BrowserRouter>
  
  
  </>
  );
}

export default App;
