const express = require('express');
const router = express.Router();
const {
  createRolePermission,
  getAllRolePermissions,
  getRolePermissionById,
  updateRolePermission,
  deleteRolePermission
} = require('../controllers/rolePermissionController');

/**
 * @swagger
 * /rolePermission:
 *   post:
 *     summary: Create a new role-permission association
 *     tags: [RolePermission]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roleId
 *               - permissionId
 *             properties:
 *               roleId:
 *                 type: string
 *               permissionId:
 *                 type: string
 *     responses:
 *       201:
 *         description: RolePermission created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createRolePermission);

/**
 * @swagger
 * /rolePermission:
 *   get:
 *     summary: Get all role-permission associations
 *     tags: [RolePermission]
 *     responses:
 *       200:
 *         description: RolePermissions fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllRolePermissions);

/**
 * @swagger
 * /rolePermission/{id}:
 *   get:
 *     summary: Get role-permission association by ID
 *     tags: [RolePermission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: RolePermission ID
 *     responses:
 *       200:
 *         description: RolePermission fetched successfully
 *       404:
 *         description: RolePermission not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getRolePermissionById);

/**
 * @swagger
 * /rolePermission/{id}:
 *   put:
 *     summary: Update role-permission association by ID
 *     tags: [RolePermission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: RolePermission ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleId:
 *                 type: string
 *               permissionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: RolePermission updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: RolePermission not found
 */
router.put('/:id', updateRolePermission);

/**
 * @swagger
 * /rolePermission/{id}:
 *   delete:
 *     summary: Delete role-permission association by ID
 *     tags: [RolePermission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: RolePermission ID
 *     responses:
 *       200:
 *         description: RolePermission deleted successfully
 *       404:
 *         description: RolePermission not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteRolePermission);

module.exports = router;
