const db = require('../db')
const {ObjectId} = require("mongodb");


exports.getAllHomeworks = async (req, res) => {
    const dbConnected = await db()
    const homeworks = dbConnected.collection('homeworks')
    const query = {}
    const options = {sort: {date: 1}}
    const queryResults = homeworks.find(query, options)
    if (await queryResults.count() === 0) {
        res.json({"result": "no homeworks found"})
    } else {
        queryResults.toArray((err, results) => {
            if (err) throw err
            res.json(results)
        });
    }
}
exports.getHomework = async (req, res) => {
    const dbConnected = await db()
    const homeworks = dbConnected.collection('homeworks')
    const {id} = ObjectId(req.params)
    const query = {_id: id}
    const options = {sort: {date: 1}}
    const queryResults = homeworks.find(query, options)
    if (await queryResults.count() === 0) {
        res.json({"result": "no homework found"})
    } else {
        queryResults.toArray((err, results) => {
            if (err) throw err
            res.json(results)
        });
    }
}
exports.addHomework = async (req, res) => {
    const dbConnected = await db()
    const homeworks = dbConnected.collection('homeworks')
    const document = req.body
    const result = await homeworks.insertOne(document)
    res.json({"results":`A document was inserted with the _id: ${result.insertedId}`})
}
exports.deleteHomework = async (req, res) => {
    const dbConnected = await db()
    const homeworks = dbConnected.collection('homeworks')
    const {id} = req.params
    const query = {_id: id}
    const queryResults = await homeworks.deleteOne(query)
    if (queryResults.deletedCount === 1) {
        res.json({"result": "homework successfully deleted"})
    } else {
        res.json({"result": "no homework deleted"})
    }
}