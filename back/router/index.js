const {getHomework, getAllHomeworks, deleteHomework, addHomework} = require('../controllers/homeworksController')
const {getAllUsers, getUser, authentication} = require('../controllers/usersController')
const {allMessages} = require("../controllers/messagesController");

module.exports = (app) => {

    app.route('/chat/:id')
        .get(allMessages)
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
    app.route('users/authentication')
        .post(authentication)
}