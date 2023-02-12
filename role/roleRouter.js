const roleRouter = require('express').Router()
const {
    createRoleController,
    getRolesController,
    getRoleByIdController
} = require('./roleController')



roleRouter.route('/').get(getRolesController).post(createRoleController)
roleRouter.route('/:id').get(getRoleByIdController)



module.exports = roleRouter