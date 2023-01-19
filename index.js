const express = require("express");
const app = express();


const{ ourENVport } = require('./config/db')
const { signupRouter } = require("./routes/signup.routes");
const cors = require("cors");

app.use(express.urlencoded({extended :true}));
app.use(express.json())
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("Welcome to bug-tracker");
});
app.use("/signup", signupRouter);

app.listen(process.env.port, async ()=>{
    try {
        await ourENVport;
        console.log("Welcome inside the backend zone of bug tracker ");
      } catch (e) {
        console.log(e.message);
        console.log("check something is not correct");
       
      }
      console.log(`port is working`);
});