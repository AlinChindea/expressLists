const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: { type: String, required: true }
});

const listSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true, unique: true },
  items: [ itemSchema ]
});

listSchema.methods.belongsTo = function listBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

itemSchema.methods.belongsTo = function itemBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};


module.exports = mongoose.model('List', listSchema);
