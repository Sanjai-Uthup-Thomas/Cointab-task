const express=require('express')
const Router=express.Router()
const controller = require('../controllers/userController')

Router.post('/addUsers',controller.addUsers)
Router.get('/getUsers',controller.getUsers)
Router.delete('/deleteUsers',controller.deleteUsers)
module.exports=Router