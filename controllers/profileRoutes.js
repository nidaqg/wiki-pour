const router = require('express').Router();
const { Cocktail, User, Ingredient, BrandName, CategoryType, CocktailRating, Rating, CocktailIngredient, CategoryBrand, CocktailCategoryType } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                { model: Ingredient, through: CocktailIngredient, as: 'cocktail_ingredients' },
                {
                    model: CategoryType, through: CocktailCategoryType, as: 'cocktail_categorytypes',
                    include: [{
                        model: BrandName, through: CategoryBrand, as: 'categoryType_Brand'
                    }]
                },
                { model: User, attributes: ['user_name'], },
                { model: Rating, through: CocktailRating, as: 'cocktail_ratings' },
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
                { model: Ingredient, through: CocktailIngredient, as: 'cocktail_ingredients' },
                {
                    model: CategoryType, through: CocktailCategoryType, as: 'cocktail_categorytypes',
                    include: [{
                        model: BrandName, through: CategoryBrand, as: 'categoryType_Brand'
                    }]
                },
                { model: User, attributes: ['user_name'], },
                { model: Rating, through: CocktailRating, as: 'cocktail_ratings' },
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