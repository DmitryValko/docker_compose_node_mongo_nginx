const express = require('express');
const mongoose = require("mongoose");


const app = express();

let errM = '';

app.get('/', (req, res) => {
  res.send(`hello world from server env => ${JSON.stringify(process.env)} and error mongo => ${errM}`)
})

app.listen(process.env.PORT || 3000, async (err) => {
  if (err) throw new Error(err);

  const mongo = await mongoose.connect(
    process.env.MONGO_URI, 
    {
      useUnifiedTopology: true,
      useNewUrlParser: true, 
    }
  ).then(() => {
    errM = 'SUCCESS CONNECT TO MONGO';
    console.log("SERVER STARTED AND CONNECT SUCCESS")
  }).catch((err) => {
    errM = err;
    console.log("SERVER STARTED AND CONNECT FAILED");
  });

  
});