const app = require("express")();

app.get("/",(req,res) =>{
    res.send("GET request");
});

app.get("/home",(req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res) =>{
    res.send("POST request");
});

app.listen(5000, () => console.log("Listening on port 5000"));