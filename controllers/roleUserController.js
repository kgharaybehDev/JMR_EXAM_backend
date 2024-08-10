const RoleUser = require('../models/RoleUser'); // تأكد من وجود هذا النموذج في مجلد models
const User = require('../models/User'); // تأكد من وجود هذا النموذج في مجلد models
const Role = require('../models/Role'); // تأكد من وجود هذا النموذج في مجلد models

// إضافة دور للمستخدم
exports.addRoleToUser = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    
    // تحقق من وجود المستخدم والدور
    const user = await User.findById(userId);
    const role = await Role.findById(roleId);
    if (!user || !role) {
      return res.status(404).json({ message: 'User or Role not found' });
    }

    const roleUser = new RoleUser({ user: userId, role: roleId });
    await roleUser.save();
    res.status(201).json(roleUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// إزالة دور من المستخدم
exports.removeRoleFromUser = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    const roleUser = await RoleUser.findOneAndDelete({ user: userId, role: roleId });
    if (!roleUser) {
      return res.status(404).json({ message: 'Role not assigned to user' });
    }
    res.status(200).json({ message: 'Role removed from user' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// الحصول على الأدوار المخصصة لمستخدم
exports.getUserRoles = async (req, res) => {
  try {
    const { userId } = req.params;
    const roles = await RoleUser.find({ user: userId }).populate('role');
    res.status(200).json(roles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
