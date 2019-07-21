const mongoose = require('mongoose');
const regEx = '^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]{2,7}(.[a-zA-Z]{2})?$';

const { Schema } = mongoose;

const personSchema = new Schema({
  doc: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  secondName: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 120 },
  gender: { type: String, required: true, enum: ['M', 'F'] },
  email: { type: String, required: true, match: new RegExp(regEx) }
});

module.exports = mongoose.model('persons', personSchema);
