const router = require('express').Router();
const { BrandName } = require('../../models');

// The `/api/brand` endpoint

router.get('/', async (req, res) => {

    try {
        const brandData = await BrandName.findAll({
        });

        if (!brandData) {
            res.status(404).json({ message: 'No brands!' });
            return;
        }

        res.status(200).json(brandData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
