// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');
const swaggerOptions = require('./config/swagger');

dotenv.config();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const authRoutes = require('./routes/auth');
const candidateRoutes = require('./routes/candidate');
const candidateTakesExamsRoutes = require('./routes/candidateTakesExams');
const cartRoutes = require('./routes/cart');
const cartAppliesDiscountCouponsRoutes = require('./routes/cartAppliesDiscountCoupons');
const cartContainsExamsRoutes = require('./routes/cartContainsExams');
const discountCouponRoutes = require('./routes/discountCoupon');
const examRoutes = require('./routes/exam');
const examSimulationModelRoutes = require('./routes/examSimulationModel');
const examUsesDiscountCouponsRoutes = require('./routes/examUsesDiscountCoupons');
const performanceReportRoutes = require('./routes/performanceReport');
const permissionRoutes = require('./routes/permission');
const questionRoutes = require('./routes/question');
const reportRoutes = require('./routes/report');
const requestRoutes = require('./routes/request');
const roleRoutes = require('./routes/role');
const rolePermissionRoutes = require('./routes/rolePermission');
const roleUserRoutes = require('./routes/roleUser');
const userRoutes = require('./routes/user');
const uploadRoutes = require('./routes/upload');

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
})();

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', authRoutes);
app.use('/api/candidate', candidateRoutes);
app.use('/api/candidateTakesExams', candidateTakesExamsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/cartAppliesDiscountCoupons', cartAppliesDiscountCouponsRoutes);
app.use('/api/cartContainsExams', cartContainsExamsRoutes);
app.use('/api/discountCoupon', discountCouponRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/examSimulationModel', examSimulationModelRoutes);
app.use('/api/examUsesDiscountCoupons', examUsesDiscountCouponsRoutes);
app.use('/api/performanceReport', performanceReportRoutes);
app.use('/api/permission', permissionRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/request', requestRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/rolePermission', rolePermissionRoutes);
app.use('/api/roleUser', roleUserRoutes);
app.use('/api/user', userRoutes);
app.use('/api/upload', uploadRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
