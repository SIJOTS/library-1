const { name } = require('ejs');
const express = require('express');
const authorsRouter = express.Router();//book router creation
function router(nav){
    var authors = [ //book router creating res started/////adding book into the books page or list of books .....array//
        {
            title: "tom and jerryf",
            author: "joseph",
            genre: "cartoon",
            img:"balachandranchullikad.jpg"//give the path of img
    
        },
        {
           title: "tom and jerry 2",
           author: "joseph2",
           genre: "cartoon",
           img:"MT_VASUDEVAN_NAIR.jpg"//give the path of img
    
       },
       {
           title: "tom and jerry 3",
           author: "joseph4",
           genre: "cartoon",
           img:"Sugathakumari1.jpg"//give the path of img
    
       }
    ];


    
    authorsRouter.get('/',function(req,res){
       res.render("authors",{
           nav,
           title:"library",
           authors
       });
    });//books router creating res ended//
    
    
    
    authorsRouter.get('/:name',function(req,res){
       const id1 = req.params.name
       res.render("author",{
           nav,
           title:"library",
           author:authors[id1]
       });
    });

    return authorsRouter;

}


module.exports = router