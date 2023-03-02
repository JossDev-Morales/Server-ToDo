const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const ToDo=db.define('ToDos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    category:{
        type:DataTypes.STRING(11),
        allowNull:false
    }
})
module.exports=ToDo