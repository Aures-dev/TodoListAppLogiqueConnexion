const express = require('express');
const cors = require('cors');
const authRouter = require("./src/Routes/routes-auth")
const dotEnv = require('dotenv');
dotEnv.config()
const port = 9100

const app = express()
//permet d'accéder au requête de n'importe quel client
app.use(cors())
//parser les requêtes en json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//utiler les routes d'authentification
app.use(authRouter)

app.listen(port,() => {
    console.log(`listening on port : ${port}`);
})