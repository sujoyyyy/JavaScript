
const fs = require('fs');
create
fs.writeFile('example.txt',"This is an example.",(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log('File created.\n');
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else
            {
                console.log(file);
            }
        })
    }
})


fs.rename('example3.txt','example.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Renamed.\n');
})


fs.appendFile('example.txt',' Append some data',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Appended.');
})

fs.unlink('example.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Deleted');
})