/* _______________________ POTIONS FUNCTIONS _______________________ */

function hpPotion(potion) {
  const perc = Math.round(playerStats.maxHp / 100 * potion.value);
  playerStats.maxHp += perc;
  playerStats.hp += perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      playerStats.maxHp -= perc;
      playerStats.hp = (playerStats.maxHp < playerStats.hp) ? playerStats.maxHp : playerStats.hp
    }
  });
}

function goldPotion(potion) {
  const perc = Math.round(playerStats.coeffGold / 100 * potion.value * 100) / 100;
  playerStats.coeffGold += perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      playerStats.coeffGold -= perc;
    }
  });
}

function critPotion(potion) {
  const perc = Math.round(playerStats.percCritic / 100 * potion.value * 100) / 100;
  playerStats.percCritic += perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      playerStats.percCritic -= perc;
    }
  });
}

function attackGoblinPotion(potion) {
  const perc = Math.round(enemiesStats.goblin.attack / 100 * potion.value * 100) / 100;
  enemiesStats.goblin.attack -= perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      enemiesStats.goblin.attack += perc;
    }
  });
}

function attackOrcPotion(potion) {
  const perc = Math.round(enemiesStats.orc.attack / 100 * potion.value * 100) / 100;
  enemiesStats.orc.attack -= perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      enemiesStats.orc.attack += perc;
    }
  });
}

function attackTrollPotion(potion) {
  const perc = Math.round(enemiesStats.troll.attack / 100 * potion.value * 100) / 100;
  enemiesStats.troll.attack -= perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      enemiesStats.troll.attack += perc;
    }
  });
}

function fullHpPotion(potion) {
  playerStats.hp = playerStats.maxHp;
}

function attackPotion(potion) {
  const perc = Math.round(playerStats.attack / 100 * potion.value * 100) / 100;
  playerStats.attack += perc;
  effects.push({
    text: potion.text,
    rarity: potion.rarity,
    stayingRounds: potion.rounds,
    fcn: ()=>{
      playerStats.attack -= perc;
    }
  });
}