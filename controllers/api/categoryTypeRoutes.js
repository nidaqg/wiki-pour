const router = require('express').Router();
const { CategoryType } = require('../../models');

// The `/api/categorytype` endpoint

router.get('/', async (req, res) => {

    try {
        const categoryTypeData = await CategoryType.findAll({});

        if (!categoryTypeData) {
            res.status(404).json({ message: 'No category type!' });
            return;
        }

        res.status(200).json(categoryTypeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try {
        const categoryTypeData = await CategoryType.findByPk(req.params.id, {});

        if (!categoryTypeData) {
            res.status(404).json({ message: 'No category types with this id!' });
            return;
        }

        res.status(200).json(categoryTypeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
