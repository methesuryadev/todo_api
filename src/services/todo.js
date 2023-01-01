const knex=require("../Database/dbConnect.js").knex_connection
const constants=require("../helpers/constants.js")
const axios = require('axios');
const { response } = require("express");
const table="todo_list"
// TODO: list all todo data
async function listTodos(req,res,next) {
    let data=await knex(table)
    res.status(200).json({
        error: false,
        message: "success",
        data
      });
}


// TODO: list all todo data
async function createTodo(req,res,next) {
    let postData=req.body;

    let data={
        "title":(postData.title?postData.title:null),
        "todo_desc":(postData.todo_desc?postData.todo_desc:null),
        "date":(postData.date?postData.date:null)
    }
    await knex(table).insert(data).then((result)=>{
       if(result){
        res.status(200).json({
            error: false,
            message: "Data inserted",
            "rowid":result
          });
       }
    })  
}


// TODO: get data from db for a single row
async function editTodo(req,res,next) {
    console.log(req.body)
    let id=req.body.id
    console.log(id)

    let data=await knex(table).where('id',id)
    res.status(200).json({
        error: false,
        message: "success",
        data
      });
}


// TODO: update data from single row
async function updateTodo(req,res,next) {
    console.log(req.body)
    let id=req.body.id
    delete req.body.id
    console.log(id)
    console.log(req.body)
    let updateData=req.body;

    let data=await knex(table)
    .where('id',id)
    .update(updateData);
    res.status(200).json({
        error: false,
        message: "update success"
      });
}

module.exports ={
    listTodos,
    createTodo,
    editTodo,
    updateTodo
}