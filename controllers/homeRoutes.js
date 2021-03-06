const router = require('express').Router();
const { Cocktail, User, Ingredient, BrandName, CategoryType, CocktailRating, Rating, CocktailIngredient, CategoryBrand, CocktailCategoryType } = require('../models');

router.get('/', async (req, res) => {
  try {
    const cocktailData = await Cocktail.findAll({
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
    res.render('homepage', {
      cocktails,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/spirits', async (req, res) => {
  try {
    res.render('spirits', {
      logged_in: req.session.logged_in

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cocktail/:id', async (req, res) => {
  try {
    const cocktailData = await Cocktail.findByPk(req.params.id, {
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


router.get('/edit/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    try {
      const cocktailData = await Cocktail.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['user_name'],
          },
        ],
      });
      const cocktail = cocktailData.get({ plain: true });
      res.render('edit-recipe', {
        cocktail,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
})

router.get('/searchByBrand/:id', async (req, res) => {
  try {
    const cocktailData = await Cocktail.findAll({
      where: {
        '$cocktail_categorytypes.categoryType_Brand.id$': req.params.id
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
    res.render('homepage', {
      cocktails,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchByCategoryType/:id', async (req, res) => {
  try {
    const cocktailData = await Cocktail.findAll({
      where: {
        '$cocktail_categorytypes.id$': req.params.id
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
    res.render('homepage', {
      cocktails,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchByIngredient/:id', async (req, res) => {
  try {
    const cocktailData = await Cocktail.findAll({
      where: {
        '$cocktail_ingredients.id$': req.params.id
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
    res.render('homepage', {
      cocktails,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;