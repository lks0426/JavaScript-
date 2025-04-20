let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];
let currentLang = 'en';
let currentLocation = null;


const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
const languageSelect = document.querySelector('#languageSelector');
const labelsXp     = document.getElementById('labelsXp');
const labelsHealth = document.getElementById('labelsHealth');
const labelsGold   = document.getElementById('labelsGold');




button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


if (languageSelect) {
  languageSelect.addEventListener('change', function () {
    setLanguage(this.value);
  });
}

const statLabels = {
  xp_en:     'XP: ',
  xp_cn:     '经验值：',
  health_en: 'Health: ',
  health_cn: '生命值：',
  gold_en:   'Gold: ',
  gold_cn:   '金币：'   
};

function setLanguage(lang) {
  currentLang = lang;
  if (currentLocation) update(currentLocation);
  else goTown();
  labelsXp.textContent     = statLabels['xp_'     + currentLang] + xp;
  labelsHealth.textContent = statLabels['health_' + currentLang] + health;
  labelsGold.textContent   = statLabels['gold_'   + currentLang] + gold;
};



const weapons = [
  { name_en: 'stick', name_cn: '木棍', power: 5 },
  { name_en: 'dagger', name_cn: '匕首', power: 30 },
  { name_en: 'claw hammer', name_cn: '流星锤', power: 50 },
  { name_en: 'sword', name_cn: '倚天剑', power: 100 }
];

const monsters = [
  { name_en: 'slime', name_cn: '史莱姆', level: 2, health: 15 },
  { name_en: 'fanged beast', name_cn: '野兽', level: 8, health: 60 },
  { name_en: 'dragon', name_cn: '恶龙', level: 20, health: 300 }
];

const locations = [
  {
    name_en: 'Town Square',
    name_cn: '城镇大厅',
    buttonText_en: ['Go to store', 'Go to cave', 'Fight dragon'],
    buttonText_cn: ['前往商店', '进入洞穴', '挑战恶龙'],
    buttonFunctions: [goStore, goCave, fightDragon],
    text_en: 'You are in the town square. You see a sign that says "Store".',
    text_cn: '你现在在城镇大厅，看到一个写着“商店”的招牌。'
  },
  {
    name_en: 'Store',
    name_cn: '商店',
    buttonText_en: ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
    buttonText_cn: ['购买10点生命（10金币）', '购买武器（30金币）', '返回城镇大厅'],
    buttonFunctions: [buyHealth, buyWeapon, goTown],
    text_en: 'You enter the store.',
    text_cn: '你走进了商店。'
  },
  {
    name_en: 'Cave',
    name_cn: '洞穴',
    buttonText_en: ['Fight slime', 'Fight fanged beast', 'Go to town square'],
    buttonText_cn: ['打史莱姆', '打野兽', '返回城镇大厅'],
    buttonFunctions: [fightSlime, fightBeast, goTown],
    text_en: 'You enter the cave. You see some monsters.',
    text_cn: '你进入了洞穴，看到一些怪物。'
  },
  {
    name_en: 'Battle',
    name_cn: '战斗',
    buttonText_en: ['Attack', 'Dodge', 'Run'],
    buttonText_cn: ['攻击', '闪避', '逃跑'],
    buttonFunctions: [attack, dodge, goTown],
    text_en: 'You are fighting a monster.',
    text_cn: '你正在与怪物战斗。'
  },
  {
    name_en: 'Victory',
    name_cn: '击杀怪物',
    buttonText_en: ['Go to town square', 'Go to town square', 'Go to town square'],
    buttonText_cn: ['返回城镇大厅', '返回城镇大厅', '返回城镇大厅'],
    buttonFunctions: [goTown, goTown, goTown],
    text_en: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    text_cn: '怪物惨叫“啊啊！”倒地而死。你获得了经验值并捡到了金币。'
  },
  {
    name_en: 'Defeat',
    name_cn: '战败',
    buttonText_en: ['REPLAY?', 'REPLAY?', 'REPLAY?'],
    buttonText_cn: ['再来一局？', '再来一局？', '再来一局？'],
    buttonFunctions: [restart, restart, restart],
    text_en: 'You die. ',
    text_cn: '你死了。'
  },
  {
    name_en: 'Win',
    name_cn: '胜利',
    buttonText_en: ['REPLAY?', 'REPLAY?', 'REPLAY?'],
    buttonText_cn: ['再来一局？', '再来一局？', '再来一局？'],
    buttonFunctions: [restart, restart, restart],
    text_en: 'You defeat the dragon! YOU WIN THE GAME! ',
    text_cn: '你击败了恶龙！你赢得了游戏！'
  },
  {
    name_en: 'Easter Egg',
    name_cn: '彩蛋小游戏',
    buttonText_en: ['2', '8', 'Go to town square?'],
    buttonText_cn: ['2', '8', '回到城镇大厅？'],
    buttonFunctions: [pickTwo, pickEight, goTown],
    text_en: 'You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!',
    text_cn: '你发现了一个彩蛋。请选一个数字'
  }
];


function update(location) {
  monsterStats.style.display = 'none';
  button1.innerText = location['buttonText_' + currentLang][0] ;
  button2.innerText = location['buttonText_' + currentLang][1] ;
  button3.innerText = location['buttonText_' + currentLang][2] ;
  button1.onclick = location.buttonFunctions[0] ;
  button2.onclick = location.buttonFunctions[1] ;
  button3.onclick = location.buttonFunctions[2] ;
  text.innerHTML = location['text_' + currentLang] ;
  currentLocation = location;
}


function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}


function buyHealth() {
  const texts = {
    notEnoughGold_en: 'You do not have enough gold to buy health.',
    notEnoughGold_cn: '你没有足够的金币购买生命值。'
  };
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = texts['notEnoughGold_' + currentLang];
  }
}

function buyWeapon() {
  const texts = {
    text_buyWeapon_en: 'You now have a ',
    text_buyWeapon_cn: '你现在拥有了一把 ',
    text_inventory_en: ' In your inventory you have: ',
    text_inventory_cn: ' 你现在的背包中有：',
    text_noGoldWeapon_en: 'You do not have enough gold to buy a weapon.',
    text_noGoldWeapon_cn: '你没有足够的金币购买武器。',
    text_strongestWeapon_en: 'You already have the most powerful weapon!',
    text_strongestWeapon_cn: '你已经拥有最强的武器！',
    text_sellWeapon_en: 'Sell weapon for 15 gold',
    text_sellWeapon_cn: '出售武器获得15金币'
  };
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      const newWeapon = weapons[currentWeapon]['name_' + currentLang];
      text.innerText = texts['text_buyWeapon_' + currentLang] + newWeapon;
      inventory.push(newWeapon);
      text.innerText += texts['text_inventory_' + currentLang] + inventory;
    } else {
      text.innerText = texts['text_noGoldWeapon_' + currentLang];
    }
  } else {
    text.innerText = texts['text_strongestWeapon_' + currentLang];
    button2.innerText = texts['text_sellWeapon_' + currentLang];
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  const texts = {
    text_soldWeapon_en: 'You sold a ',
    text_soldWeapon_cn: '你卖掉了一把 ',
    text_inventory_en: ' In your inventory you have: ',
    text_inventory_cn: ' 你现在的背包中有：',
    text_onlyOneWeapon_en: "Don't sell your only weapon!",
    text_onlyOneWeapon_cn: '不要卖掉你唯一的武器！'
  };
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    const current = inventory.shift();
    text.innerText = texts['text_soldWeapon_' + currentLang] + current;
    text.innerText += texts['text_inventory_' + currentLang] + inventory;
    if (currentWeapon > 0) {       
      currentWeapon--;
    }
  } 
  else {
    text.innerText = texts['text_onlyOneWeapon_' + currentLang];
  }
}


function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting]['name_' + currentLang];
}

function attack() {
  const texts = {
    text_monsterAttack_en: 'The ',
    text_monsterAttack_cn: '怪物 ',
    text_monsterAttack_tail_en: ' attacks.',
    text_monsterAttack_tail_cn: ' 发起了攻击。',
    text_playerAttack_en: ' You attack it with your ',
    text_playerAttack_cn: ' 你用你的 ',
    text_miss_en: ' You miss.',
    text_miss_cn: ' 你没有打中。',
    text_weaponBreak_en: ' Your ',
    text_weaponBreak_cn: ' 你的 ',
    text_weaponBreak_tail_en: ' breaks.',
    text_weaponBreak_tail_cn: ' 断掉了。'
  };
  const monsterName = monsters[fighting]['name_' + currentLang];
  const weaponName = weapons[currentWeapon]['name_' + currentLang];
  text.innerText = texts['text_monsterAttack_' + currentLang] + monsterName + texts['text_monsterAttack_tail_' + currentLang];
  text.innerText += texts['text_playerAttack_' + currentLang] + weaponName + '.';
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += texts['text_miss_' + currentLang];
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    const broken = inventory.pop();
    const localizedName = weapons.find(w => w.name_en === broken)?.['name_' + currentLang] || broken;
    text.innerText += texts['text_weaponBreak_' + currentLang] + localizedName + texts['text_weaponBreak_tail_' + currentLang];
    currentWeapon = Math.max(0, currentWeapon - 1);
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  const texts = {
    text_dodge_en: 'You dodge the attack from the ',
    text_dodge_cn: '你躲开了 ',
    text_dodge_tail_en: '.',
    text_dodge_tail_cn: ' 的攻击。'
  };
  const monsterName = monsters[fighting]['name_' + currentLang];
  text.innerText = texts['text_dodge_' + currentLang] + monsterName + texts['text_dodge_tail_' + currentLang];
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ['stick'];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const texts = {
    text_pickIntro_en: 'You picked ',
    text_pickIntro_cn: '你选择了 ',
    text_pickIntro_tail_en: '. Here are the random numbers:\n',
    text_pickIntro_tail_cn: '，以下是随机生成的数字：\n',
    text_pickWin_en: 'Right! You win 20 gold!',
    text_pickWin_cn: '猜中了！你赢得了20金币！',
    text_pickLose_en: 'Wrong! You lose 10 health!',
    text_pickLose_cn: '没猜中！你失去了10点生命值！'
  };
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = texts['text_pickIntro_' + currentLang] + guess + texts['text_pickIntro_tail_' + currentLang];
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + '\n';
  }
  if (numbers.includes(guess)) {
    text.innerText += texts['text_pickWin_' + currentLang];
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += texts['text_pickLose_' + currentLang];
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}



setLanguage(currentLang);
