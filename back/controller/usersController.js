const {db} = require('../db')


const users = db.collection('users')

exports.getAllUsers = async (req, res) => {
    const query = {}
    const options = {sort: {date: 1}}
    const queryResults = await users.find(query, options)
    if (queryResults.count() === 0) {
        res.json({"result": "no users found"})
    } else {
        res.json(queryResults)
    }
}
exports.getUser=async(req,res)=>{
    const query={_id:req.params.id}
    const options={sort: {date: 1}}
    const queryResults=await users.find(query,options)
    if(queryResults.count()===0){
        res.json({"result":"no users found"})
    }else{
        res.json(queryResults)
    }
}

