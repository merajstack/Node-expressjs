const express = require('express');
const fs = require('fs');
// fs.readFile("./novel.txt",(err,data)=>{
//     if (err == null || err == "undefined"){
//         console.log("File Data :",data.toString());
//     }
//     else{
//         console.log("Error :",err);
//     }
// })
data = "Hello iam Meraj md  , studying in niat"
data = "Hello iam Meraj   , studying in niat"
fs.writeFile("./writefiletest.txt",data,(err)=>{
    if (err == null || err == undefined){
        console.log("Data added successfully!")
    }
    else{
        console.log("error :",err)
    }
})


fs.writeFile("./writefiletest.txt",data,{flag:"a"},(err)=>{//appendding :"a",replacing : "w"
 if (err == null || err == undefined){
        console.log("Data added successfully!")
    }
    else{
        console.log("error :",err)
    }
})
/*                  /\
    Both are same   ||
                    \/      */
fs.appendFile("./appendfiletest.txt",data,(err)=>{
    if (err == null  || err == "undefined"){
        console.log("Data appended successfully!")
    }
    else{
        console.log("error is" ,err)
    }
})