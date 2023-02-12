const Role = require('./role')


const createRoleService = (data) => {
    return Role.create(data)
}

const getRolesService = () => {
    return Role.find()
}


const getRoleByIdService = (id) => {
    return Role.findById({_id: id})
}


module.exports = {
    createRoleService,
    getRoleByIdService,
    getRolesService
}