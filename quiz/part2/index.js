// Soal 1
function attack(damage) {
    return damage - 2;
  }
  
  function damageCalculation(numberOfAttacks, damagePerAttack) {
    return numberOfAttacks * attack(damagePerAttack);
  }
  
  // TEST CASES
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90
  
  // Soal 2
  function meleeRangedGrouping(str) {
    if (!str) return [];
  
    let ranged = [];
    let melee = [];
    
    let heroes = str.split(',');
    for (let hero of heroes) {
      let [name, type] = hero.split('-');
      if (type === 'Ranged') {
        ranged.push(name);
      } else if (type === 'Melee') {
        melee.push(name);
      }
    }
    
    return [ranged, melee];
  }
  
  // TEST CASES
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping(''));
  // []
  