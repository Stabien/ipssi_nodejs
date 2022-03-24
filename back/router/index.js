const {getHomework, getAllHomeworks, deleteHomework, addHomework} = require('../controllers/homeworksController')
const {getAllUsers, getUser} = require('../controllers/usersController')
const {messages} = require("../controllers/messagesController");

module.exports = (app) => {

    app.route('/chat')
        .get(messages)
    app.route('/homeworks')
        .get(getAllHomeworks)
        .post(addHomework)
    app.route('/homeworks/:id')
        .get(getHomework)
        .delete(deleteHomework)
    app.route('/users')
        .get(getAllUsers)
    app.route('/users/:id')
        .get(getUser)
}