const http = require('http');
const port = process.env.PORT || 3000
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost/mydb'
string items;
mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    const db = client.db('mydb')
    const collection = db.collection('display')
items=collection.find()
      
  })

  


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(toString(items));
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});