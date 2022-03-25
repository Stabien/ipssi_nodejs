const {
    getHomework,
    getAllHomeworks,
    deleteHomework,
    addHomework,
    addNoteToHomework
} = require('../controllers/homeworksController')
const {getAllUsers, getUser, authentication} = require('../controllers/usersController')
const {allMessages} = require("../controllers/messagesController");

module.exports = (app) => {

    app.route('/chat')
        .get(allMessages)//Need a body
    app.route('/homeworks')
        .get(getAllHomeworks)
        .post(addHomework)
    app.route('/homeworks/:id')
        .get(getHomework)
        .put(addNoteToHomework)
        .delete(deleteHomework)
    app.route('/users')
        .get(getAllUsers)
    app.route('/users/:id')
        .get(getUser)
    app.route('/users/authentication')
        .post(authentication)
}