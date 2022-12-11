const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// files
const projects = require('./projects.json');
const projectDetails = require('./projectDetails.json');

// get all projects
app.get('/projects', (req, res) => {
  res.send(projects);
});

// get a single project details
app.get('/projects/:id', (req, res) => {
  const id = Number(req.params.id);
  const getSingleProjectDetails = projectDetails.find(details => details.id === id);
  res.send(getSingleProjectDetails);
})

app.get('/', (req, res) => {
  res.send('Portfolio server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})