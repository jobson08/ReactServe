const express = require('express');
const router = express.Router();

//post Model
const Poste = require('../../models/Poste');

//@route GET api/postes
//@des GET all postes
//@acesso publico
 router.get('/', (req, res) =>{
    Poste.find()
    .sort({ date: -1})
    .then(postes => res.json(postes))
})

//@route POST api/postes
//@des POST all postes
//@acesso publico
router.post('/', (req, res) =>{
     const newPoste = new Poste({
          name: req.body.name
     });
newPoste.save().then(poste => res.json(poste));
 });

 //@route DELETE api/postes:id
//@des DELETE all postes
//@acesso publico
router.delete('/:id', (req, res) => {
     Poste.findById(req.params.id)
     .then(poste => poste.remove().then(() => res.json({success: true}))
     )
     .catch(err => res.status(404).json({success: false}));
 })
 
 
module.exports = router;