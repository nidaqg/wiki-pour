const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cocktailRoutes = require('./cocktailRoutes');
const ratingRoutes = require('./ratingRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const categoryTypeRoutes = require('./categoryTypeRoutes');
const brandRoutes = require('./brandRoutes');

router.use('/users', userRoutes);
router.use('/cocktail', cocktailRoutes);
router.use('/rating', ratingRoutes);
router.use('/ingredient', ingredientRoutes);
router.use('/categorytype', categoryTypeRoutes);
router.use('/brand', brandRoutes);

module.exports = router;
