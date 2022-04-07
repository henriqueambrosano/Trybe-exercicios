const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () =>
  Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

const warriorDamage = () =>
  Math.floor(
    Math.random() *
      (warrior.strength * warrior.weaponDmg - warrior.strength + 1)
  ) + warrior.strength;

const magePower = () => {
  if (mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      manaGasta: 0,
    };
  } else {
    return {
      damage:
        Math.floor(
          Math.random() * (mage.intelligence * 2 - mage.intelligence + 1)
        ) + mage.intelligence,
      manaGasta: -15,
    };
  }
};

const gameActions = {
  warriorAction: (callback) => {
    warrior.damage = callback();
    dragon.healthPoints -= warrior.damage;
  },

  mageAction: (callback) => {
    mage.damage = callback().damage;
    mage.mana += callback().manaGasta;
    dragon.healthPoints -= mage.damage;
  },

  dragonAction: (callback) => {
    dragon.damage = callback();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },

  finalResult: () => battleMembers,
};

gameActions.warriorAction(warriorDamage);
gameActions.mageAction(magePower);
gameActions.dragonAction(dragonDamage);

console.log(gameActions.finalResult());