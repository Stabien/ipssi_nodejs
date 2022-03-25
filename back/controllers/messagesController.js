const db = require('../db')
const {ObjectId} = require("mongodb");

exports.allMessages = async (req, res) => {
    try {
        const dbConnected = await db()
        const messages = dbConnected.collection('messages')
        const user = ObjectId(req.params.id)
        const query = {$or: [{sender: user}, {receiver: user}]}
        const options = {sort: {date: 1}}
        const queryResults = messages.find(query, options)
        queryResults.toArray((err, results) => {
            if (err) throw err
            res.json(results)
        })
    } catch (error) {
        res.json({"error": error})
    }

}

exports.postMessage = async (data, ids, idr) => {
    try {
        const dbConnected = await db()
        const messages = dbConnected.collection('messages')
        const sender = ObjectId(ids)
        const receiver = ObjectId(idr)
        const document = {
            sender: sender,
            receiver: receiver,
            date: new Date()
        }
        await messages.insertOne(document)
    } catch (error) {
        console.log(error)
    }

}


