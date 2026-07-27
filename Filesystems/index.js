const express = require('express');
const fs = require('fs');
fs.readFile("./novel.txt",(err,data)=>{
    if (err == null || err == "undefined"){
        console.log("File Data :",data.toString());
    }
    else{
        console.log("Error :",err);
    }

})