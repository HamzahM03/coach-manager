import express from "express";
import dotenv from "dotenv";
import login_router from "./routes/login.js";
import register_router from "./routes/register.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req,res)=>{
  res.render("index");
})

app.get('/terms', (req, res) => {
  res.render('./admin/terms');
});

app.get('/privacy', (req, res) => {
  res.render('./admin/privacy');
});

app.get('/forgot', (req, res) => {
  res.render('./admin/forgot-credentials'); 
});


app.use("/login", login_router);
app.use("/register", register_router);


app.listen(PORT,()=>{
  console.log(`Server is listening for requests on port ${PORT}`);
});

