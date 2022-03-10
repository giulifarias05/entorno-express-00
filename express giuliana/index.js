const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.sendFile(path.join(__filename,"../index.html"));
});


app.post("/formulario", (req, res) => {
    console.log("hola ", req.body.Nombre, " ", req.body.Apellido);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
