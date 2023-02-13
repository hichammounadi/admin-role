const {
    createAdminService,
    getAdminByIdService,
    getAdminsService,
    getAdminByRoleService,
    updateAdminService
} = require('./adminService')




const createAdminController = async(req, res) => {

    const {firstName, lastName, email, dateCreate,role} = req.body

    console.log(role)
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


const updateAdminController = async(req, res) => {
    const {
        body: {firstName, lastName, email, role},
        params: {id: id}
    } = req
    if(!firstName || !lastName || !email) {
        return res.status(400).send('All data are mentadory')
    }
    const isAdminExist = await getAdminByIdService(id)
    if(!isAdminExist){
        return res.status(400).send('This admin does not exist')
    }
    // const rolesArray = isAdminExist.role
    
    // console.log(rolesArray)
    // rolesArray.push(role)
    // const isRoleExist = rolesArray.filter(existingRoles => existingRoles !== role)
    // console.log(rolesArray)
    // return ;
    const admin = await updateAdminService(id, {firstName, lastName, email, role})
    if(!admin) {
        return res.status(400).send('Admin not found')
    }
    res.status(200).send({admin})
}



module.exports = {
    createAdminController,
    getAdminByIdController,
    getAdminsController,
    getAdminByRoleController,
    updateAdminController
}