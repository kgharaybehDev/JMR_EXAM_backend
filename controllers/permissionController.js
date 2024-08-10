const Permission = require('../models/Permission');

exports.createPermission = async (req, res) => {
  const { name, description } = req.body;

  try {
    const permission = new Permission({
      name,
      description
    });

    await permission.save();
    res.status(201).json(permission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPermissionById = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json(permission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json(permission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndDelete(req.params.id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json({ message: 'Permission deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
