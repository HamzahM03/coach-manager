import express from "express";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env) // remove this after you've confirmed it is working

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT,()=>{
  console.log(`Server is listening for requests on port ${PORT}`);
});

