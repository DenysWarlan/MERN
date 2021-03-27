const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
  name: {type: String, required: true, unique: true},
  price: {type: String, required: true},
  urlImg: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'user'}
})

module.exports = model('course', schema)
