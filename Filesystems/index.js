const express = require('express');
const fs = require('fs');
// fs.readFile("./story.txt",(err,data)=>{
//     if (err == null || err == undefined){
//         console.log("File Data :",data.toString());
//     }
//     else{
//         console.log("Error :",err);
//     }
// })
// data = "Hello iam Meraj md  , studying in niat"
// data = "Hello iam Meraj   , studying in niat"
// fs.writeFile("./writefiletest.txt",data,(err)=>{
//     if (err == null || err == undefined){
//         console.log("Data added successfully!")
//     }
//     else{
//         console.log("error :",err)
//     }
// })


// fs.writeFile("./writefiletest.txt",data,{flag:"a"},(err)=>{//appendding :"a",replacing : "w"
//  if (err == null || err == undefined){
//         console.log("Data added successfully!")
//     }
//     else{
//         console.log("error :",err)
//     }
// })
// /*                  /\
//     Both are same   ||
//                     \/      */
// fs.appendFile("./appendfiletest.txt",data,(err)=>{
//     if (err == null  || err == undefined){
//         console.log("Data appended successfully!")
//     }
//     else{
//         console.log("error is" ,err)
//     }
// })

// fs.rename("./novel.txt","./story.txt",(err)=>{
//     if(err == null || err == undefined){
//         console.log("File renamed successfully");
//     }
//     else{
//         console.log(err);
//     }
// })

// fs.mkdir("./rmfile1.txt",(err)=>{
//      if (err === null || err === undefined){
//         console.log("File created successfully")
//     }
//     else{
//         console.log("Error is :",err)
//     }

// })

// fs.rm("./rmfile.txt",(err)=>{
//     if (err === null || err === undefined){
//         console.log("File removed successfully")
//     }
//     else{
//         console.log("Error is :",err)
//     }
// })

//---------------------------------------------------------------------------------
// Using rename to move a file into other folder
fs.rename("./student.txt","./student/student.txt",(err)=>{
    if(err === null || err === undefined){
        console.log("File moved successfully");
    }
    else{
        console.log("Error Msg:",err)
    }
})
//---------------------------------------------------------------------------------
