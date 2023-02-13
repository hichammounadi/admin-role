const Admin = require('./admin')



const createAdminService = (data) => {
    return Admin.create(data)
}


const getAdminsService = () => {
    return Admin.find()
}


const getAdminByIdService = (id) => {
    return Admin.findById({_id: id})
}


const getAdminByRoleService = (role) => {
    // ! if the role can be assigned to 
    // ! multiple admins 
    // ! than you should use FIND and not FINDONE
    return Admin.findOne({role: role})
}

const updateAdminService = (id, data) => {
    return Admin.findByIdAndUpdate(
        {_id: id},
        {
            firstName: data.firstName, 
            lastName: data.lastName, 
            email: data.email, 
            $push: {role: data.role}
        },
        {new: true, runValidators: true}
    )
}



module.exports = {
    createAdminService,
    getAdminByIdService,
    getAdminsService,
    getAdminByRoleService,
    updateAdminService
}