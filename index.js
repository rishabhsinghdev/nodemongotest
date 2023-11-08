const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://rishabhdeveloper:Rs181514@findurwebsite.zpkylnr.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'dev';

// Collection Name
const collectionName = 'test';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Select the database
  const db = client.db(dbName);

  // Select the collection
  const collection = db.collection(collectionName);

  // Data to be saved
  const data = { name: 'John Doe', age: 28, email: 'johndoe@example.com' };

  // Insert the data into the collection
  collection.insertOne(data, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }

    console.log('Data inserted successfully');

    // Close the connection
    client.close();
  });
});
