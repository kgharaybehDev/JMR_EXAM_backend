const mongoose = require('mongoose');

const RoleUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  assigned_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RoleUser', RoleUserSchema);
