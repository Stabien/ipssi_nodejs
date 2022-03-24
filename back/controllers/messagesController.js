const {db} = require('../db')

exports.messages=async (req,res)=>{
    const dbConnected = await db()
    const messages = dbConnected.collection('messages')
    res.send('socket.io is on')
}