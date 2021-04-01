const router = require('express').Router();
const { Cocktail, Ingredient, BrandName, CategoryType, Rating } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Ingredient,
                    attributes: ['ingredient_name'],
                },
                {
                    model: BrandName,
                    attributes: ['brand_name'],
                },
                {
                    model: CategoryType,
                    attributes: ['categoryType_name'],
                    include: {
                        model: Category,
                        attributes: ['category_name']
                    }
                },
                {
                    model: User,
                    attributes: ['name'],
                    // include: {
                    //     model: Rating,
                    //     attributes: ['rating']
                    // }
                },
                { model: Rating, through: CocktailRating, as: 'CocktailRatings' },
            ],
        });

        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));

        res.render('profile', {
            cocktails,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newrecipe', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('new-recipe');
});

router.get('/editrecipe/:id', withAuth, async (req, res) => {
    try {
        const cocktailData = await Cocktail.findByPk(req.params.id, {
            attributes: [
                'id',
            ],
            include: [
                {
                    model: Ingredient,
                    attributes: ['ingredient_name'],
                },
                {
                    model: BrandName,
                    attributes: ['brand_name'],
                },
                {
                    model: CategoryType,
                    attributes: ['categoryType_name'],
                    include: {
                        model: Category,
                        attributes: ['category_name']
                    }
                },
                {
                    model: User,
                    attributes: ['name'],
                    // include: {
                    //     model: Rating,
                    //     attributes: ['rating']
                    // }
                },
                { model: Rating, through: CocktailRating, as: 'CocktailRatings' },
            ],
        });

        const cocktail = cocktailData.get({ plain: true });

        res.render('edit-recipe', {
            cocktail,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;