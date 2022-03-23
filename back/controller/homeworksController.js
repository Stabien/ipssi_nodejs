const {db} = require('../db')


const homeworks = db.collection('homeworks')


exports.getAllHomeworks =
    async (req, res) => {
        const query = {}
        const options = {sort: {date: 1}}
        const queryResults = homeworks.find(query, options)
        if (await queryResults.count() === 0) {
            res.json({"result": "no homeworks found"})
        } else {
            res.json(queryResults)
        }
    }
exports.getHomework = async (req, res) => {
    const {id} = req.params
    const query = {_id: id}
    const options = {sort: {date: 1}}
    const queryResults = homeworks.find(query, options)
    if (await queryResults.count() === 0) {
        res.json({"result": "no homework found"})
    } else {
        res.json(queryResults)
    }
}
exports.addHomework=async (req,res)=>{
    const document=req.body
    const result=await homeworks.insertOne(document)
    res.json("results"`A document was inserted with the _id: ${result.insertedId}`)
}
exports.deleteHomework = async (req, res) => {
    const {id} = req.params
    const query = {_id: id}
    const queryResults = await homeworks.deleteOne(query)
    if (queryResults.deletedCount === 1) {
        res.json({"result": "homework successfully deleted"})
    } else {
        res.json({"result": "no homework deleted"})
    }
}