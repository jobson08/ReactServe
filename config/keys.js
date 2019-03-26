module.exports = {
    mongoURI: 'mongodb+srv://reactsevidor:j123456@cluster0-z4nd5.mongodb.net/test?retryWrites=true'
};





/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://reactteste:<password>@reactteste-qzloq.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/



/** const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB Conectado'))
    .catch(err => console.log(err));

    module.exports = mongoose;*/

