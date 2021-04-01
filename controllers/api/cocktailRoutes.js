const router = require('express').Router();
const { Cocktail } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newCocktail = await Cocktail.create({
            ...req.body,
            user_id: req.session.user_id,
        });

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