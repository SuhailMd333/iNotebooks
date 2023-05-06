const express = require('express');
const router = express.Router();
const Notes = require('../modals/Notes')
const fetchuser = require('../middleware/fetchuser')




const {body, validationResult}  = require('express-validator')
 // Route 1 : Get all the notes using : get /api/notes/fetchallnotes : login required 
router.get('/fetchallnotes',fetchuser, async (req,res) => {


    try{

    const notes = await Notes.find({user : req.user.id});
   
    res.json(notes)

} catch(error) {
    console.error(error.message)
    res.status(500).send(" Some external error ocurred")
}
})

// Route 2 : Add new notes using Post Req    "/api/notes/addnote"
router.post('/addnote',fetchuser, [
    body("title", "please enter a title  ").isLength({ min: 5 }),
    body("description", "please enter a valid description ").isLength({ min: 5 })
  ], async (req,res) => {

try{




    const {title,description,tag} = req.body;

     // If their are errors return a bad request
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
 const note = new Notes({
    title,description,tag,user :req.user.id
 })
 const savedNote =   await note.save()
   
    res.json(savedNote)
} catch(error) {
    console.error(error.message)
      res.status(500).send(" Some external error ocurred")
}
})

//Route 3 :   update an existing note using put  "/api/notes/updatenote"
router.put('/updatenote/:id',fetchuser, async (req,res) => {


try{
  const {title,description,tag} = req.body ;

  // create a new note object 
  const newNote = {} 
  if(title) {
newNote.title = title ;
  }
  if(description) {
    newNote.description = description;
  }

  if(tag) {
    newNote.tag = tag;
  }
// Find the Note to be updated and Update it

let note =  await Notes.findById(req.params.id);
if(!note) {return res.status(400).send('Not Found')};
if(note.user.toString() !== req.user.id) {
  return res.status(401).send('Not Allowed ')
}

note = await Notes.findByIdAndUpdate(req.params.id , {$set : newNote} , {new:true})
res.json(note)
} catch(error) {
console.error(error.message)
res.status(500).send('Some Error Ocurred')
}


})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let note = await Notes.findById(req.params.id);
      if (!note) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (note.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      note = await Notes.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Note has been deleted", note: note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
module.exports = router 