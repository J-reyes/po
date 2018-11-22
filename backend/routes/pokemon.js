const express = require('express');
const router = express.Router();

const pokemonController = require('../controllers/pokemon-controller');

// get all users

router.get('/', pokemonController.index);
router.get('/pokeid/:id', pokemonController.getById)

router.delete('/:id', pokemonController.destroy);

// post new user
router.post('/new', pokemonController.createPokemon);

//============TEST=======
router.get('/test', (req, res)=> res.json({test: 'test'}))

module.exports = router;