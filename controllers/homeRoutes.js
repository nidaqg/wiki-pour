const router = require('express').Router();
const { Cocktail, Ingredient, BrandName, CategoryType, Rating } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
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

        res.render('homepage', {
            cocktails,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/cocktail/:id', async (req, res) => {
    try {
        const cocktailData = await Post.findByPk(req.params.id, {
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

        // res.status(200).json(post);
        res.render('single-cocktail', {
            cocktail,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('signup');
});

module.exports = router;