const {getHomework,getAllHomeworks, deleteHomework, addHomework} = require('../controller/homeworksController')
const {getAllUsers, getUser} = require('../controller/usersController')

module.exports = (app) => {

    app.route('/')
        .get()
    app.route('/homeworks')
        .get(getAllHomeworks())
        .post(addHomework())
    app.route('/homeworks/:id')
        .get(getHomework())
        .delete(deleteHomework())
    app.route('/users')
        .get(getAllUsers())
    app.route('/users/:id')
        .get(getUser())
}