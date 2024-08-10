const RolePermission = require('../models/RolePermission');

exports.createRolePermission = async (req, res) => {
  const { roleId, permissionId } = req.body;

  try {
    const rolePermission = new RolePermission({
      roleId,
      permissionId
    });

    await rolePermission.save();
    res.status(201).json(rolePermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllRolePermissions = async (req, res) => {
  try {
    const rolePermissions = await RolePermission.find();
    res.status(200).json(rolePermissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRolePermissionById = async (req, res) => {
  try {
    const rolePermission = await RolePermission.findById(req.params.id);
    if (!rolePermission) {
      return res.status(404).json({ message: 'RolePermission not found' });
    }
    res.status(200).json(rolePermission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRolePermission = async (req, res) => {
  try {
    const rolePermission = await RolePermission.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!rolePermission) {
      return res.status(404).json({ message: 'RolePermission not found' });
    }
    res.status(200).json(rolePermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRolePermission = async (req, res) => {
  try {
    const rolePermission = await RolePermission.findByIdAndDelete(req.params.id);
    if (!rolePermission) {
      return res.status(404).json({ message: 'RolePermission not found' });
    }
    res.status(200).json({ message: 'RolePermission deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
