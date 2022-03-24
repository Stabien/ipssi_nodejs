const db = require('../db')
const {ObjectId} = require("mongodb");


exports.getAllUsers = async (req, res) => {
    const dbConnected = await db()
    const users = dbConnected.collection('users')
    const query = {}
    const options = {sort: {date: 1}}
    const queryResults = await users.find(query, options)
    if (queryResults.count() === 0) {
        res.json({"result": "no users found"})
    } else {
        queryResults.toArray((err, results) => {
            if (err) throw err
            res.json(results)
        });
    }
}
exports.getUser = async (req, res) => {
    const dbConnected = await db()
    const users = dbConnected.collection('users')
    const query = {_id: ObjectId(req.params.id)}
    const options = {sort: {date: 1}}
    const queryResults = await users.find(query, options)
    if (await queryResults.count() === 0) {
        res.json({"result": "no users found"})
    } else {
        queryResults.toArray((err, results) => {
            if (err) throw err
            res.json(results)
        });
    }
}

