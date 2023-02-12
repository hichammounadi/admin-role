const {
    createAdminService,
    getAdminByIdService,
    getAdminsService,
    getAdminByRoleService
} = require('./adminService')




const createAdminController = async(req, res) => {

    const {firstName, lastName, email, dateCreate,role} = req.body

    if(!firstName || !lastName || !email) {
        return res.status(400).send(`All data are mendatory`)
    }
    await createAdminService({firstName, lastName, email, dateCreate, role})
    res.status(201).send('Admin created successfully')
}


const getAdminsController = async(req, res) => {

    const admins = await getAdminsService()
    res.status(200).send({admins})
}



const getAdminByIdController = async( req, res) => {
    const id = req.params.id
    const admin = await getAdminByIdService(id)
    if(!admin){
        return res.status(400).send(`admin with id : ${id} not found`)
    }

    res.status(200).send({admin})

}

const getAdminByRoleController = async(req, res) => {
    const role = req.params.role
    const admin = await getAdminByRoleService(role)
    res.status(200).send({admin})
}



module.exports = {
    createAdminController,
    getAdminByIdController,
    getAdminsController,
    getAdminByRoleController
}