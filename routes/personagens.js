const express = require('express');

const router = express.Router();

const Personagem = require('../models/personagem');

router.get('/', (req, res) => {
  const personagens = [
    { id: 1, tipo: 'Guerreiro', ataque: 90, defesa: 60, agilidade: 25 },
    { id: 2, tipo: 'Arqueiro', ataque: 65, defesa: 78, agilidade: 65 },
    { id: 3, tipo: 'Mago', ataque: 55, defesa: 50, agilidade: 50 },
  ];
  res.json(personagens);
});

module.exports = router;
