// server.js
require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const postRoutes = require('./routes/post-routes')

const PORT = process.env.PORT || 1000;
const URL = process.env.MONGODB_URL;
// const PORT = process.env.PORT || 1000
// const URL =
//   'mongodb+srv://alex:Passs321@cluster0.tq2r9lo.mongodb.net/autoSite?retryWrites=true&w=majority'
// const URL = 'mongodb://localhost:27017/autoSite'

// const corsOptions = {
//   origin: 'https://auto-site-frontend-git-master-alexivko01-gmailcom.vercel.app/',
//   optionsSuccessStatus: 200,
//   credentials: true,
// }

const corsOptions = {
  origin: 'https://auto-site-frontend-git-master-alexivko01-gmailcom.vercel.app/',
  optionsSuccessStatus: 200,
  credentials: true,
}

app.use(cors(corsOptions));

// const app = express()
// app.use(cors())

app.use(express.json())
app.use(postRoutes)

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listen port ${PORT}`)
})
