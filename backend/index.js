const connectToMongo=require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
//available routes
app.use('/api/notes',require('./routes/notes'))
app.use('/api/auth',require('./routes/auth'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})

