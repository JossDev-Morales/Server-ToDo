const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const db=require('./utils/database')
const Todo=require('./models/ToDo.model')
const ToDoRoutes=require('./routes/ToDo.routes')

const PORT=8080
Todo

db.authenticate()
.then((res)=>console.log('Authentication OK'))
.catch((err)=>console.log('Bad Authentication'))

db.sync()
.then((res)=>console.log('Sync OK'))
.catch((err)=>console.log('Bad Sync'))


const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(ToDoRoutes)

app.listen(PORT,()=>console.log('server started at port '+PORT))
