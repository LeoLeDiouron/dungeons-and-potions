/* _______________________ CONSTANTS OBJECT RETURN FUNCTIONS _______________________ */

function loadPotions() {
  return [
    { type: 1, value: 20, price: 100, rarity: 1, rounds: 3, text: "HP +20%", image: 'potion_2_1' },
    { type: 1, value: 40, price: 300, rarity: 2, rounds: 4, text: "HP +40%", image: 'potion_2_2' },

    { type: 2, value: 75, price: 100, rarity: 1, rounds: 1, text: "GOLD +75%", image: 'potion_2_1' },
    { type: 2, value: 100, price: 300, rarity: 2, rounds: 2, text: "GOLD +100%", image: 'potion_2_2' },

    { type: 3, value: 100, price: 100, rarity: 1, rounds: 1, text: "CRIT +100%", image: 'potion_2_1' },
    { type: 3, value: 200, price: 300, rarity: 2, rounds: 2, text: "CRIT +200%", image: 'potion_2_2' },

    { type: 4, value: 25, price: 100, rarity: 1, rounds: 2, text: "ATK +25%", image: 'potion_2_1' },
    { type: 4, value: 50, price: 300, rarity: 2, rounds: 3, text: "ATK +50%", image: 'potion_2_2' },

    { type: 5, value: 50, price: 100, rarity: 1, rounds: 6, text: "ATK GOB -50% ", image: 'potion_2_1' },
    { type: 5, value: 100, price: 300, rarity: 2, rounds: 8, text: "ATK GOB -100% ", image: 'potion_2_2' },

    { type: 6, value: 50, price: 100, rarity: 1, rounds: 1, text: "ATK ORC -50%", image: 'potion_2_1' },
    { type: 6, value: 100, price: 300, rarity: 2, rounds: 2, text: "ATK ORC -100%", image: 'potion_2_2' },

    { type: 7, value: 40, price: 100, rarity: 1, rounds: 1, text: "ATK TROLL -40%", image: 'potion_2_1' },
    { type: 7, value: 80, price: 300, rarity: 2, rounds: 2, text: "ATK TROLL -80%", image: 'potion_2_2' },

    { type: 8, value: null, price: 300, rarity: 1, rounds: 1, text: "FULL HP", image: 'potion_1_2' },
  ];
}

function loadCharacters() {
  return [
    {
      name: 'RICHY MAX',
      sprite: 'character1',
      maxHp: 250,
      attack: 50,
      percDodge: 20,
      percCritic: 10,
      gold: 300,
      coeffGold: 2,
      shopDiscount: 0.5
    }, {
      name: 'SNEAKY HAVANA',
      sprite: 'character2',
      maxHp: 250,
      attack: 50,
      percDodge: 50,
      percCritic: 40,
      gold: 0,
      coeffGold: 1,
      shopDiscount: 1
    }, {
      name: 'HIPPO(GRIF)LYTE',
      sprite: 'character3',
      maxHp: 2500,
      attack: 75,
      percDodge: 20,
      percCritic: 10,
      gold: 0,
      coeffGold: 1,
      shopDiscount: 1
    }
  ];
}

function loadEnemies() {
  return [
    {
      name: 'Goblin',
      hp: 75,
      maxHp: 75,
      attack: 30,
      gold: 25,
      value: 1
    }, {
      name: 'Orc',
      hp: 200,
      maxHp: 200,
      attack: 60,
      gold: 100,
      value: 3
    }, {
      name: 'Troll',
      hp: 400,
      maxHp: 400,
      attack: 75,
      gold: 300,
      value: 5
    }, {
      name: 'Witch',
      hp: 200,
      maxHp: 200,
      attack: 150,
      gold: 0,
      value: 7
    }, {
      name: 'Devil',
      hp: 500,
      maxHp: 500,
      attack: 100,
      gold: 0,
      value: 10
    }
  ];
}