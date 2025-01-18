const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

});

const practiceUser= mongoose.model('practiceUser',practiceSchema);
module.exports = practiceUser;