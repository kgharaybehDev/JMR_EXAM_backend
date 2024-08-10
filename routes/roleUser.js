const express = require('express');
const router = express.Router();
const { addRoleToUser, removeRoleFromUser, getUserRoles } = require('../controllers/roleUserController');

/**
 * @swagger
 * tags:
 *   name: RoleUser
 *   description: Managing user roles
 */

/**
 * @swagger
 * /role-user/add-role:
 *   post:
 *     summary: Add a role to a user
 *     tags: [RoleUser]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user
 *               roleId:
 *                 type: string
 *                 description: The ID of the role
 *     responses:
 *       201:
 *         description: Role added successfully
 *       404:
 *         description: User or role not found
 *       500:
 *         description: Internal server error
 */
router.post('/add-role', addRoleToUser);

/**
 * @swagger
 * /role-user/remove-role:
 *   delete:
 *     summary: Remove a role from a user
 *     tags: [RoleUser]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user
 *               roleId:
 *                 type: string
 *                 description: The ID of the role
 *     responses:
 *       200:
 *         description: Role removed successfully
 *       404:
 *         description: Role not assigned to user
 *       500:
 *         description: Internal server error
 */
router.delete('/remove-role', removeRoleFromUser);

/**
 * @swagger
 * /role-user/user-roles/{userId}:
 *   get:
 *     summary: Get roles assigned to a user
 *     tags: [RoleUser]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: List of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get('/user-roles/:userId', getUserRoles);

module.exports = router;
