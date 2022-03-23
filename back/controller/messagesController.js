const {db} =require('../db')

module.exports = async () => {
    try {
        return db.collection('messages')
    } catch (error) {
        return error
    }
}