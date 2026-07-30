fs.readFile("./students/student1.txt",(err,data)=>{
    if (err === null || err === undefined){
        datats = data.toString();
        console.log("File data :",datats)
    }
    else{
        console.log("Error write",err)
    }
})