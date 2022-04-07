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
// 15 e 50
// 30 e 60
// 45 e 90

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength -15 +1)) + 15;

const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength +1)) + warrior.strength;

const magePower = () => {
    if(mage.mana < 15){
        return {
            damage: 'Não possui mana suficiente',
            manaGasta: 0
        }
    }else{
        return {
        damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence +1)) + mage.intelligence,
        manaGasta: 15,
    }
    }

}

// console.log('dragon', dragonDamage())
// console.log('warrior', warriorDamage())
// console.log('mage', magePower())

const gameActions = {

}