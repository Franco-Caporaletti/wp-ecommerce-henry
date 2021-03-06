const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category');
const userRouter = require('./users');


const router = Router();

const multer = require('multer');
const path = require('path');

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);

// PRUEBA DE CARGA DE IMAGEN CON MULTER
//router.use('/uploads', productRouter);

router.use('/categories', categoryRouter);
router.use('/users', userRouter);

module.exports = router;
