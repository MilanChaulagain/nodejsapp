// const http = require("http");
import http from "http"
// const gfName = require("./features");

// import gfName from "./features.js";

// import {gfName2} from "./features.js";

// import * as myObj from "./features.js";
import {generateLovePercent}  from "./features.js";

import path from "path"

console.log(path.extname("/home/index.html"));
import fs from "fs"


const home = fs.readFileSync("./index.html");
console.log("home");
// console.log(gfName2);
// console.log(myObj);
// console.log(myObj.gfName2);

console.log(generateLovePercent());

const server = http.createServer((req,res) => {
   if(req.url == "/about"){
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
   }
   else if(req.url == "/"){
     //    res.end("<h1>Home Page</h1>");
     fs.readFile("./index.html", (err, home)=>{
          res.end(home);
     }); 
   }
   else if(req.url == "/contact"){
        res.end("<h1>Contact Page</h1>");
   }
   else{
        res.end("<h1>Page not found</h1>");
   }
});

server.listen(5003, ()=> {
    console.log("Server is working");
})