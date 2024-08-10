#!/bin/bash

# Ensure the tests directory exists
mkdir -p tests

# Create a test file for each controller

# Auth Controller Test
cat <<EOF > tests/authController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Auth API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'Test@1234',
        role: 'candidate'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'Test@1234'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should get current logged in user', async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'Test@1234'
      });
    const token = loginRes.body.token;

    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', \`Bearer \${token}\`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'testuser@example.com');
  });
});
EOF

# Candidate Controller Test
cat <<EOF > tests/candidateController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Candidate API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new candidate', async () => {
    const res = await request(app)
      .post('/api/candidate')
      .send({
        name: 'Candidate User',
        email: 'candidate@example.com',
        phoneNumber: '1234567890'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all candidates', async () => {
    const res = await request(app)
      .get('/api/candidate');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a candidate by ID', async () => {
    const res = await request(app)
      .get('/api/candidate/someCandidateId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should update a candidate', async () => {
    const res = await request(app)
      .put('/api/candidate/someCandidateId')
      .send({
        name: 'Updated Candidate User',
        email: 'updated_candidate@example.com',
        phoneNumber: '0987654321'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should delete a candidate', async () => {
    const res = await request(app)
      .delete('/api/candidate/someCandidateId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Candidate deleted successfully');
  });
});
EOF

# RoleUser Controller Test
cat <<EOF > tests/roleUserController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('RoleUser API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should add a role to a user', async () => {
    const res = await request(app)
      .post('/api/roleUser/add-role')
      .send({
        userId: 'someUserId',
        roleId: 'someRoleId'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Role added successfully');
  });

  it('should remove a role from a user', async () => {
    const res = await request(app)
      .delete('/api/roleUser/remove-role')
      .send({
        userId: 'someUserId',
        roleId: 'someRoleId'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Role removed successfully');
  });

  it('should get roles for a user', async () => {
    const res = await request(app)
      .get('/api/roleUser/user-roles/someUserId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
EOF

# Exam Controller Test
cat <<EOF > tests/examController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Exam API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new exam', async () => {
    const res = await request(app)
      .post('/api/exam')
      .send({
        title: 'Sample Exam',
        description: 'This is a sample exam.',
        duration: 60,
        question_count: 10,
        fee: 50.0
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all exams', async () => {
    const res = await request(app)
      .get('/api/exam');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get an exam by ID', async () => {
    const res = await request(app)
      .get('/api/exam/someExamId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should update an exam', async () => {
    const res = await request(app)
      .put('/api/exam/someExamId')
      .send({
        title: 'Updated Exam Title',
        description: 'Updated description.',
        duration: 90,
        question_count: 20,
        fee: 75.0
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should delete an exam', async () => {
    const res = await request(app)
      .delete('/api/exam/someExamId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Exam deleted successfully');
  });
});
EOF

# Question Controller Test
cat <<EOF > tests/questionController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Question API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new question', async () => {
    const res = await request(app)
      .post('/api/question')
      .send({
        question_text: 'What is the capital of Germany?',
        question_type: 'multiple choice',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correct_answer: 'Berlin'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all questions', async () => {
    const res = await request(app)
      .get('/api/question');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a question by ID', async () => {
    const res = await request(app)
      .get('/api/question/someQuestionId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should update a question', async () => {
    const res = await request(app)
      .put('/api/question/someQuestionId')
      .send({
        question_text: 'Updated question text',
        options: ['New York', 'Berlin', 'London', 'Madrid'],
        correct_answer: 'Berlin'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should delete a question', async () => {
    const res = await request(app)
      .delete('/api/question/someQuestionId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Question deleted successfully');
  });
});
EOF

# Candidate Takes Exams Controller Test
cat <<EOF > tests/candidateTakesExamsController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('CandidateTakesExams API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should record a candidate taking an exam', async () => {
    const res = await request(app)
      .post('/api/candidateTakesExams')
      .send({
        candidate_id: 'someCandidateId',
        exam_id: 'someExamId',
        score: 85,
        status: 'completed'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all candidate exam records', async () => {
    const res = await request(app)
      .get('/api/candidateTakesExams');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a candidate exam record by ID', async () => {
    const res = await request(app)
      .get('/api/candidateTakesExams/someRecordId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should update a candidate exam record', async () => {
    const res = await request(app)
      .put('/api/candidateTakesExams/someRecordId')
      .send({
        score: 90,
        status: 'passed'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should delete a candidate exam record', async () => {
    const res = await request(app)
      .delete('/api/candidateTakesExams/someRecordId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Record deleted successfully');
  });
});
EOF

# Cart Controller Test
cat <<EOF > tests/cartController.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Cart API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new cart', async () => {
    const res = await request(app)
      .post('/api/cart')
      .send({
        user_id: 'someUserId',
        items: [{ exam_id: 'someExamId', quantity: 1 }]
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all carts', async () => {
    const res = await request(app)
      .get('/api/cart');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a cart by ID', async () => {
    const res = await request(app)
      .get('/api/cart/someCartId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should update a cart', async () => {
    const res = await request(app)
      .put('/api/cart/someCartId')
      .send({
        items: [{ exam_id: 'someUpdatedExamId', quantity: 2 }]
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should delete a cart', async () => {
    const res = await request(app)
      .delete('/api/cart/someCartId');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Cart deleted successfully');
  });
});
EOF

# Continue with similar test files for other controllers

echo "Test files have been created successfully."
    