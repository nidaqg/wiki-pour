const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cocktailRoutes = require('./cocktailRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/users', userRoutes);
router.use('/cocktail', cocktailRoutes);
router.use('/rating', ratingRoutes);

module.exports = router;
