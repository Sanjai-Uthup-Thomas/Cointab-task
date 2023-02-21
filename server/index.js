const express = require('express');
const dotenv =require('dotenv')
const cors = require('cors')
dotenv.config()
const userRoute=require('./routes/user')
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api',userRoute)
app.listen(4000, () => {
    console.log('Server started on port 4000');
  });