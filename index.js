const express = require('express');
const app = express();
const port = 8000;




app.listen(port , function(err){
    if(err){
        console.log(`error in starting the server : ${err}`);
    }
    console.log(`running on port :${port}`);
});
