const fs = require("fs");

// fs.stat("./students/student1.txt",(err,stat)=>{
//     if (err === null|| err === undefined){
//         console.log(stat)
//     }
//     else{
//         console.log(err)
//     }
// })

// fs.stat("./students/student1.txt",(err,stat)=>{
//     if (err === null|| err === undefined){
//         console.log(stat.isFile()) // Return Boolean 
//     }
//     else{
//         console.log(err)
//     }
// })

// fs.access("./students/student1.txt",(err)=>{
//    if (err === null|| err === undefined){
//         console.log("File Can Accessed")
//     }
//     else{
//         console.log(err)
//     }
// })

// //-----------------------------------------------------------------------------
// let datats = ""
// fs.readFile("./students/student1.txt",(err,data)=>{
//     if (err === null || err === undefined){
//         datats = data.toString();
//         console.log("File data :",datats)
//     }
//     else{
//         console.log("Error write",err)
//     }
// })
// // Doesnt works (asynchronus)
// fs.writeFile("./async.txt",datats,(err)=>{
//     if (err === null || err === undefined){
//         console.log("Writtten Successfully")
//     }
//     else{
//         console.log("Error write",err)
//     }
// })
// //-----------------------------------------------------------------------------

const data = fs.readFileSync("./students/student1.txt");

fs.writeFile("./async.txt", data, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Written Successfully");
});