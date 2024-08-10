// tests/authController.test.js
const request = require('supertest');
const app = require('../app'); // تأكد من مسار الملف الذي يحتوي على express app
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // تأكد من تضمين bcrypt

const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('Auth Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jmr_exam_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  describe('POST /register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test Admin',
          email: 'testadmin@example.com',
          password: 'password123',
          role: 'admin', // استخدام 'admin' أو 'candidate'
        });
  
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
  
      const user = await User.findOne({ email: 'testadmin@example.com' });
      expect(user).toBeTruthy();
      expect(user.role).toBe('admin'); // تحقق من أن role هو 'admin'
    });
  });
  

  // describe('POST /login', () => {
  //   beforeEach(async () => {
  //     const salt = await bcrypt.genSalt(10);
  //     const hashedPassword = await bcrypt.hash('password123', salt);

  //     await User.create({
  //       name: 'Test User',
  //       email: 'testuser@example.com',
  //       password: hashedPassword,
  //       role: 'user',
  //     });
  //   });

  //   it('should login a user and return a token', async () => {
  //     const res = await request(app)
  //       .post('/api/auth/login')
  //       .send({
  //         email: 'testuser@example.com',
  //         password: 'password123',
  //       });

  //     expect(res.statusCode).toBe(200);
  //     expect(res.body).toHaveProperty('token');
  //   });

  //   it('should return 400 if invalid credentials', async () => {
  //     const res = await request(app)
  //       .post('/api/auth/login')
  //       .send({
  //         email: 'testuser@example.com',
  //         password: 'wrongpassword',
  //       });

  //     expect(res.statusCode).toBe(400);
  //     expect(res.body).toHaveProperty('message', 'Invalid Credentials');
  //   });
  // });

  // describe('GET /me', () => {
  //   it('should return user data', async () => {
  //     const user = await User.create({
  //       name: 'Test User',
  //       email: 'testuser@example.com',
  //       password: 'hashedpassword',
  //       role: 'user',
  //     });

  //     const payload = {
  //       user: {
  //         id: user.id,
  //         role: user.role,
  //       },
  //     };

  //     const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

  //     const res = await request(app)
  //       .get('/api/auth/me')
  //       .set('Authorization', `Bearer ${token}`);

  //     expect(res.statusCode).toBe(200);
  //     expect(res.body).toHaveProperty('name', 'Test User');
  //     expect(res.body).toHaveProperty('email', 'testuser@example.com');
  //     expect(res.body).not.toHaveProperty('password');
  //   });
  // });
});
