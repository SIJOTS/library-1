const express = require('express');
const admin1Router = express.Router();

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
        });
    });


    admin1Router.get('/add',function(req,res){
        res.send("<h1> kellabbu.... kellabbu.... <h1> ....okey....")
    });

    return admin1Router;

}

module.exports = router;

