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
    await knex(table).insert(data).then(async (result)=>{
       if(result){
        let data=await knex(table).where('id',result)
        res.status(200).json({
            error: false,
            message: "Data Inserted",
            data
          });
       }else{
        res.status(409).json({
          error: true,
          message: "Data Not Inserted"
        });
       }
    })  
}

// TODO: get data from db for a single row
async function editTodo(req,res,next) {
    console.log(req.body)
    let id=req.body.id
    console.log(id)
    if(id>0){
      let data=await knex(table).where('id',id)
      res.status(200).json({
          error: false,
          message: "success",
          data
        });
    }else{
     
    }
  
}


// TODO: update data from single row
async function updateTodo(req,res,next) {
    // console.log(req.body)
    let id=req.body.id
    delete req.body.id
    // console.log(id)
    // console.log(req.body)
    let updateData=req.body;

    let data=await knex(table)
    .where('id',id)
    .update(updateData).then(async (result)=>{
      console.log(result)
      if(result==1){
       let data=await knex(table).where('id',id)
       res.status(200).json({
           error: false,
           message: "Data Update",
           data
         });
      }else{
       res.status(409).json({
         error: true,
         message: "Data Not Update"
       });
      }
   });
}

// TODO: update data from single row
async function deleteTodo(req,res,next) {
    console.log(req.body)
    let id=req.body.id

    let data=await knex(table)
    .where('id',id).del()
    .then(function (count) {
        if(count){
          res.status(200).json({
            error: false,
            message: "Data Deleted Successfully."
          });
          }else{
             res.status(200).json({
                error: true,
                message: "Something Went Wrong"
              });
          }
        }).catch(error => {
          res.status(200).json({
            error: true,
            message: error.message
          }); 
        });
}


module.exports ={
    listTodos,
    createTodo,
    editTodo,
    updateTodo,
    deleteTodo
}