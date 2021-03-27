const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    course: [{type: Types.ObjectId, ref: 'course'}]
})

module.exports = model('user', schema)
