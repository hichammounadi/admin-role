const adminRouter = require('express').Router()


const {
    createAdminController,
    getAdminByIdController,
    getAdminsController,
    getAdminByRoleController
} = require('./adminController')



adminRouter.route('/').get(getAdminsController).post(createAdminController)
adminRouter.route('/role/:role').get(getAdminByRoleController)
adminRouter.route('/:id').get(getAdminByIdController)



module.exports = adminRouter