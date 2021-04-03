const router = require('express').Router();
const { Ingredient } = require('../../models');

// The `/api/ingredient` endpoint

router.get('/', async (req, res) => {

    try {
        const ingredientData = await Ingredient.findAll({});

        if (!ingredientData) {
            res.status(404).json({ message: 'No ingredient!' });
            return;
        }

        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {
        const ingredientData = await Ingredient.findByPk(req.params.id, {});

        if (!ingredientData) {
            res.status(404).json({ message: 'No ingredients with this id!' });
            return;
        }

        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
