const { createData, getAll, getbyId, updatebyid, deletebyid } = require('../business/business');

const createDataController = async (req, res) => {
    const newItem = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    };

    const item = await createData(newItem);
    res.status(202).json(item);
};

const getAllcontroller = async (req, res) => {
    const items = await getAll();
    res.status(202).json(items);
};

const getbyIdcontroller = async (req, res) => {
    const { id } = req.params;
    const iddata = await getbyId(id);
    if (!iddata) {
        res.status(404).json({ message: 'Given ID not found!!' });
    }
    else {
        res.status(200).json(iddata);
    }

};

const updatebyidcontroller = async (req, res) => {
    try {
        const { id } = req.params;
        let newdata = await getbyId(id);
        if (!newdata) {
            res.status(404).json({ message: 'Given id not found!!' });

        }
        newdata.name = req.body.name;
        const item = await updatebyid(id, newdata);
        if (!item) {
            res.status(404).json({ message: 'Given Todo Id not exist!!' });
        } else {
            res.json(item);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};


const deletebyidcontroller = async (req, res) => {
    const { id } = req.params;
    const deletedItem = await deletebyid(id);
    if (!deletedItem) {
        res.status(404).json({ message: 'given id not found' });
    } else {
        res.status(202).json({ message: "Id deleted succesfull" })
    }
};










module.exports = {
    createDataController,
    getAllcontroller,
    getbyIdcontroller,
    updatebyidcontroller,
    deletebyidcontroller
}