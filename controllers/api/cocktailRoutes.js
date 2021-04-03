const router = require('express').Router();
const { Cocktail, CocktailIngredient, CocktailCategoryType } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newCocktail = await Cocktail.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(newCocktail);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// new cocktail with all associations.
router.post('/', async (req, res) => {
    /* expected req.body:
        {
        cocktail_name: "cocktail name",
        instructions: "do this",
        user_id: 1,
        ingredientIds: [1, 2],
        categoryTypeIds: [1, 2]
        }
    */
    try {
        const newCocktail = await Cocktail.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        if (req.body.ingredientIds.length) {
            const cocktailIngredientIdArr = req.body.ingredientIds.map((ingredient_id) => {
                return {
                    cocktail_id: newCocktail.id,
                    ingredient_id,
                };
            });
            const newCocktailIngredient = await CocktailIngredient.bulkCreate(cocktailIngredientIdArr);
        }


        if (req.body.categoryTypeIds.length) {
            const cocktailCategoryTypesIdArr = req.body.categoryTypeIds.map((categoryType_id) => {
                return {
                    cocktail_id: newCocktail.id,
                    categoryType_id,
                };
            });
            const newCocktailCategoryType = await CocktailCategoryType.bulkCreate(cocktailCategoryTypesIdArr);
        }


        res.status(200).json(newCocktail);
    } catch (err) {
        res.status(400).json(err);
    }

});


router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const cocktailData = await Cocktail.update(
            {
                cocktail_name: req.body.cocktail_name,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );

        if (!cocktailData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/edit/:id', withAuth, async (req, res) => {
    try {
        const cocktailData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!cocktailData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(cocktailData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;