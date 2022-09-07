const mongoose = require('mongoose');
//const { email } = require('../middleware/check-auth');

PostSchema = mongoose.Schema({
    
    uuid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    emailPost: {
      type: String,
      required: true
    },
    usersIdPost: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Posts', PostSchema)
