const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.info(`sucessfull`);  
  })
  .catch((e) => {
  console.log(`not connected`,e);
  });