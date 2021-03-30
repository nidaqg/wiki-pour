const router = require('express').Router();
const { Cocktail } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
            include: [
                {
                    // model: User, *** need to pull proper models***
                    // attributes: ['name'],
                },
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
                    // model: User, *** need to pull proper models***
                    // attributes: ['name'],
                },
                {
                    // model: Comment,
                    // attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                    // include: {
                    //     model: User,
                    //     attributes: ['name']
                    // }
                },
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