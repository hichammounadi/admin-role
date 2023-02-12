const {
    createRoleService,
    getRoleByIdService,
    getRolesService
} = require('./roleService')



const createRoleController = async(req, res) => {

    const {role, description} = req.body


    if(!role || !description){
        return res.send('You should provide the rele and its description')
    }

    await createRoleService({role, description})
    res.status(201).send(`Role : ${role} created successfully !`)
}

const getRolesController = async(req, res) => {
    const roles = await getRolesService()
    res.status(200).send({roles})

}


const getRoleByIdController = async(req, res) => {
    const id = req.params.id
    const role = await getRoleByIdService(id)
    if(!role){
        return res.status(400).send(`there is no role with this id : ${id}`)
    }
    res.status(200).send({role})
}



module.exports = {
    createRoleController,
    getRolesController,
    getRoleByIdController
}