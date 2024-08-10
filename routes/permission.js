const express = require('express');
const router = express.Router();
const {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission
} = require('../controllers/permissionController');

/**
 * @swagger
 * /permission:
 *   post:
 *     summary: Create a new permission
 *     tags: [Permission]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Permission created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createPermission);

/**
 * @swagger
 * /permission:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permission]
 *     responses:
 *       200:
 *         description: Permissions fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllPermissions);

/**
 * @swagger
 * /permission/{id}:
 *   get:
 *     summary: Get permission by ID
 *     tags: [Permission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Permission ID
 *     responses:
 *       200:
 *         description: Permission fetched successfully
 *       404:
 *         description: Permission not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getPermissionById);

/**
 * @swagger
 * /permission/{id}:
 *   put:
 *     summary: Update permission by ID
 *     tags: [Permission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Permission ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Permission updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Permission not found
 */
router.put('/:id', updatePermission);

/**
 * @swagger
 * /permission/{id}:
 *   delete:
 *     summary: Delete permission by ID
 *     tags: [Permission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Permission ID
 *     responses:
 *       200:
 *         description: Permission deleted successfully
 *       404:
 *         description: Permission not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deletePermission);

module.exports = router;
