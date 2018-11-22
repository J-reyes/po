let { Pokemon } = require('../models/pokemon');

const index = async (req, res) => {
  try {
    let pokemon = await Pokemon.find();
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getById = async ( req, res ) => {
  try {
    let pokemon = await Pokemon.findById(req.params.id)
    res.json(pokemon)
  } catch {
    res.status(404).json({ Message: "Pokemon not found"})
  }
}

const destroy = async ( req, res ) => {
  try {
    let pokemon = await Pokemon.findByIdAndDelete(req.params.id)
  } catch {
    res.status(404).json({ Message: "Pokemon not found"})
  }
}

const createPokemon = async ( req, res ) => {
  try {
    const pokemon = await Pokemon.create(req.body)
  } catch ( err ) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { index, createPokemon, getById, destroy }