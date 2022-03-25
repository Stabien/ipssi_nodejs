const {MongoClient} = require('mongodb')
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(uri)

module.exports = async () => {
  try {
    await client.connect()
    return client.db('ipssi')
  } catch (error) {
    await client.close()
    return error
  }
}