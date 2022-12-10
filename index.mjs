import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ServerApiVersion } from 'mongodb';

// express app initialization
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ufdxsbo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// initialization of mongodb database
const dbConnect = async () => {
  try {
    await client.connect();
    console.log('Database Connected'.yellow.bold);
  } catch (error) {
    console.log(error.name, error.message);
  }
}

dbConnect();

app.get('/', (req, res) => {
  res.send('My portfolio server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.bold);
});

