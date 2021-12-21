const router = require('express').Router();
const userRoutes = require('./user-routes');
// const pizzaRoutes = require('./pizza-routes');

router.use('/user', userRoutes);
// router.use('/comments', commentRoutes)

module.exports = router;