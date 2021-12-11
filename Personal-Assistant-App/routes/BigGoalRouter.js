const router = require('express').Router()
const BigGoal = require('../module/Schema/BigGoal')
const { json } = require('express');
const { model } = require('mongoose');


// get All goal 

router.get('/.bigGoals',async (req,res)=>{
    const bigGoals = await BigGoal.find();
    res.json(bigGoals)
})

// git goal with goal id

router.get('/bigGoal/:id',async(req,res)=>{
    const goal =  await BigGoal.findById(req.body.id);

    res.json(goal)

})

// post

router.post('/postGoal',(req,res)=>{

    const newGoal = new BigGoal({
        ...req.body
    })
    newGoal.save()

    res.status(200).json(newGoal)

})

// Edit goal

// router.put('/editGoal/:id',async(req,res)=>{

//     const goal = await BigGoal.findByIdAndUpdate(req.params.id,{
//         ...req.body
//     })

//     await goal.save

//     const goals = BigGoal.find()
    
//     res.send(goals)
// })


// Delete goal

router.delete('/deleteGoal/:id',async(req,res)=>{
    const goal = await BigGoal.findByIdAndDelete({_id:req.params.id})

    if(!goal){
        return res.status(400).send('NotFound')
    }
    const goals = await BigGoal.find()

    res.send(goals)


})


module.exports = router;    