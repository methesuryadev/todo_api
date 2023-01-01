const express= require("express")
const app= express()
const db= require("connection")

app.get('/', (req,res) => {
    res.send('Hello World')
})


app.post('/todo/add', (req,res) => {
   
    let data=db.knex('todo_list')
    .first()
    res.send(data)

})


app.listen(8000,()=>{
    console.log('Listning 8000 Port')
})