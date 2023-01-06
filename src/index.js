require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const app = express()
const constants = require('./helpers/constants')
const todo= require('./services/todo.js')
const jwtApp= require('./services/JwtApi.js')
const cors = require('cors');
const port = constants.port
const base = constants.BASE_URL;
const multer = require('multer')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  //set headers to allow cross origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token,Authorization");

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Auth routes filters

app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
app.listen(port, () => console.log(`App listening at http://localhost:${constants.port||8080}`))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage: storage })


/*Admin Roles*/
app.get(base + '/todo/list',todo.listTodos)
app.post(base + '/todo/create',todo.createTodo)
app.post(base + '/todo/edit',todo.editTodo)
app.post(base + '/todo/update',todo.updateTodo)
app.post(base + '/todo/delete',todo.deleteTodo)
app.post(base + '/login/token',jwtApp.jwtLogin)

