const fs = require('fs');
 fs.mkdir('New Folder',(err)=>{
     if(err)
     console.log(err);
     else{
         fs.writeFile('./New Folder/test.txt','This is an example.\n',(err)=>{
             if(err)
             console.log(err);
         })
     }
})

fs.unlink('./New Folder/test.txt',(err)=>{
    if(err)
    console.log(err);
})
fs.rmdir('New Folder',(err)=>{
     if(err){
         console.log(err);
     }
 })