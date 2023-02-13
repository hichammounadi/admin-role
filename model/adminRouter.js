const adminRouter = require('express').Router()


const {
    createAdminController,
    getAdminByIdController,
    getAdminsController,
    getAdminByRoleController,
    updateAdminController
} = require('./adminController')



adminRouter.route('/').get(getAdminsController).post(createAdminController)
adminRouter.route('/role/:role').get(getAdminByRoleController)
adminRouter.route('/:id').get(getAdminByIdController).patch(updateAdminController)



module.exports = adminRouter