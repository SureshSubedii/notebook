const express=require('express')
const Note = require('../models/Note')
const fetchUser = require('./middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const router=express.Router()
//Route 1:Get all notes all notes using GET. Login required.
router.get('/fetchAllNotes',fetchUser,async (req,res)=>{
    try {
        const notes= await Note.find({user:req.user.id});
    res.json(notes);
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("Internal Server Error Occurred.")
        
    }
    

})
//Route 2: Add new notes using POST.Login required.
router.post('/addNewNotes',fetchUser,[
    body('title','Enter a valid title.').isLength({ min: 3 }),
    body('description','Enter a valid Description').isLength({min:3})

],async (req,res)=>{
    try {
    const {title,description,tag}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const notee=new Note({
        title,description,tag,user:req.user.id
    })
   const savedNote=await notee.save();
   res.json(savedNote);
} catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error Occurred.")
        
}
})
//Route 3: Update existing notes using PUT.Login required.
router.put('/updatenotes/:id',fetchUser,async (req,res)=>{
    const {title,description,tag}=req.body;
    try {
        
    //Create newNote object
    const newNote={};
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}
    
    //Find the note to be updated and update it
    let notes=await Note.findById(req.params.id);
    if(!notes){return res.status(404).send('Not Found')}
    if(notes.user.toString()!==req.user.id){
        return res.status(401).send('Not Allowed')
    }
    notes= await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json(notes);
    }

 catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error Occurred.")
}}
)
        

//Route 4: Delete existing notes using DELETE.Login required.
router.delete('/deleteNote/:id',fetchUser,async (req,res)=>{

    try {
        
    //Find the note to be deleted  and delete it.
    let notes=await Note.findById(req.params.id);
    if(!notes){return res.status(404).send('Not Found')}
    if(notes.user.toString()!==req.user.id){
        return res.status(401).send('Not Allowed')
    }
    notes= await Note.findByIdAndDelete(req.params.id)
    res.json({"Sucess":"Deleted","note":notes});

} catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error Occurred.")
        
}
    }
)
module.exports=router