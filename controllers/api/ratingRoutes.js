const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const router = require('express').Router();
const { CocktailRating, Rating, Cocktail, User  } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const ratingData = await Rating.findAll({
            include: [
                { model: Cocktail, through: CocktailRating, as: 'ratings_cocktails' },
                { model: User, through: CocktailRating, as: 'ratings_user' },
            ]
        });

        if (!ratingData) {
            res.status(404).json({ message: 'No ratings!' });
            return;
        }

        res.status(200).json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rate', async (req, res) => {
    try {
        const ratingData = await sequelize.query("SELECT cocktail_id, rating_id FROM cocktail_rating", { type: QueryTypes.SELECT });

        if (!ratingData) {
            res.status(404).json({ message: 'No ratings!' });
            return;
        }

        res.status(200).json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', withAuth, async (req, res) => {
    /* expected req.body:
        {
        cocktail_id: 1,
        rating_id: 5
        }
    */
    try {
        const newRating = await CocktailRating.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRating);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;