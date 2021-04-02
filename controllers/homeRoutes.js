const router = require('express').Router();
const { Cocktail, User, Ingredient, BrandName, CategoryType, CocktailRating, Rating, CocktailIngredient, CategoryBrand, CocktailCategoryType } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
            include: [
             //   { model: Ingredient, through: CocktailIngredient, as: 'cocktail_ingredients' },
             //   { model: BrandName, through: CategoryBrand, as: 'categoryType_Brand' },
             //   { model: CategoryType, through: CocktailCategoryType, as: 'cocktail_categorytypes' },
                { model: User, attributes: ['user_name'],},
              //  { model: Rating, through: CocktailRating, as: 'cocktail_ratings' },
            ],
        });

        const cocktails = cocktailData.map((cocktail) => cocktail.get({ plain: true }));
        console.log(cocktails);
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
                //{ model: Ingredient, through: CocktailIngredient, as: 'cocktail_ingredients' },
               // { model: BrandName, through: CategoryBrand, as: 'categoryType_Brand' },
               // { model: CategoryType, through: CocktailCategoryType, as: 'cocktail_categorytypes' },
                { model: User, attributes: ['user_name'],},
               // { model: Rating, through: CocktailRating, as: 'cocktail_ratings' },
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