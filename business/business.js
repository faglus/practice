const schema = require('../model/schema');
// const schema = require('../validation/valdiation');


const createData = async (userData) => {
    try {
        const newUser = new schema(userData);
        await newUser.save();
        return newUser;
    } catch (err) {
        throw err;
    }
}

const getAll = async () => schema.find();

const getbyId = async (id) => schema.findById(id);

const updatebyid = async (id, updatedata) => schema.findByIdAndUpdate(id, updatedata,{new :true});

const deletebyid = async (id, deletedata) => schema.findByIdAndDelete(id, deletedata,{new :true});



module.exports = {
    createData,
    getAll,
    getbyId,
    updatebyid,
    deletebyid
}