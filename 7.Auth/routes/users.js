const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users', async (req, res) => {
    const allUsersWithElectives = await User.query().select('username').withGraphFetched('electives');
    return res.send({ response: allUsersWithElectives });
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.query().where('id', id)
    const electives = await user[0].$relatedQuery('electives')
    res.json({ user: user[0], electives })
  })

module.exports = router;