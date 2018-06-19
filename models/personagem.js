const mongoose = require('mongoose');

const personagemSchema = mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  ataque: {
    type: Number,
    required: true,
  },
  defesa: {
    type: Number,
    required: true,
  },
  agilidae: {
    type: Number,
    required: true,
  },
});

const Personagem = (module.exports = mongoose.model('Personagem', personagemSchema));
