const db = require('../db')
const {ObjectId} = require("mongodb");


exports.getAllHomeworks = async (req, res) => {
    try {
        const dbConnected = await db()
        const homeworks = dbConnected.collection('homeworks')
        const query = {}
        const options = {sort: {date: 1}}
        const queryResults = homeworks.find(query, options)
        queryResults.toArray((err, results) => {
            if (err) throw err
            if (results.length === 0) {
                res.json({"results": "no homework found"})
            } else {
                res.json(results)
            }

        })
    } catch (error) {
        res.json({"error": error})
    }

}
exports.getHomework = async (req, res) => {
    try {
        const dbConnected = await db()
        const homeworks = dbConnected.collection('homeworks')
        const {id} = ObjectId(req.params)
        const query = {_id: id}
        const options = {sort: {date: 1}}
        const queryResults = homeworks.find(query, options)
        queryResults.toArray((err, results) => {
            if (err) throw err
            if (results.length === 0) {
                res.json({"results": "no homework found"})
            } else {
                res.json(results)
            }

        })
    } catch (error) {
        res.json({"error": error})
    }


}
exports.addHomework = async (req, res) => {
    try {
        const dbConnected = await db()
        const homeworks = dbConnected.collection('homeworks')
        const document = req.body
        document["date"]=new Date()
        const result = await homeworks.insertOne(document)
        res.json({"results": `A document was inserted with the _id: ${result.insertedId}`})
    } catch (error) {
        res.json({"error": error})
    }
}
exports.addNoteToHomework = async (req, res) => {
    try {
        const dbConnected = await db()
        const homeworks = dbConnected.collection('homeworks')
        const filter = {_id: {$eq: ObjectId(req.params.id)}}
        const updateDoc = {
            $set: {
                note: req.body["note"],
                comments: req.body["comments"]
            }
        }
        const result = await homeworks.updateOne(filter, updateDoc)
        if (result.modifiedCount===0){
            res.json({"result": false})
        }else{
            res.json({"result":true})
        }
    } catch (error) {
        res.json(error)
    }
}
exports.deleteHomework = async (req, res) => {
    try {
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
    } catch (error) {
        res.json({"error": error})
    }

}