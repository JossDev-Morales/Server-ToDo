const {Router}=require('express')
const ToDo=require('../models/ToDo.model')

const router=Router()

router.get('/api/v1/todo', async (req,res)=>{
    try {
        const result = await ToDo.findAll({
            where:{status:false}
        })
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})
router.get('/api/v1/todo/done', async (req,res)=>{
    try {
        const result = await ToDo.findAll({
            where:{status:true}
        })
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})
router.delete('/api/v1/todo/done', async (req,res)=>{
    try {
        const result = await ToDo.destroy({
            where:{status:true}
        })
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})
router.post('/api/v1/todo', async (req,res)=>{
    try {
       const newToDo=req.body
       const result=await ToDo.create(newToDo)
       res.status(201).send(result) 
    } catch (error) {
        res.status(400).json(error)
    }
})
router.delete('/api/v1/todo/:id', async (req,res)=>{
    try {
        const {id}=req.params
        await ToDo.destroy({
            where:{id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put('/api/v1/todo/:id/title', async (req,res)=>{
    try {
        const {id}=req.params
        const title=req.body
        await ToDo.update(title,{
            attributes:['title'],
            where:{id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put('/api/v1/todo/:id/description', async (req,res)=>{
    try {
        const {id}=req.params
        const description=req.body
        await ToDo.update(description,{
            attributes:['description'],
            where:{id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put('/api/v1/todo/:id/status', async (req,res)=>{
    try {
        const {id}=req.params
        const newStatus=req.body
        await ToDo.update(newStatus,{
            attributes:['status'],
            where:{id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put('/api/v1/todo/:id/category', async (req,res)=>{
    try {
        const {id}=req.params
        const newCategory=req.body
        await ToDo.update(newCategory,{
            attributes:['category'],
            where:{id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports=router