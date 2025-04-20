let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let currentLang = 'en';
let currentLocationObject = null;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const labelXp = document.getElementById("labelsXp");
const labelHealth = document.getElementById("labelsHealth");
const labelGold = document.getElementById("labelsGold");
const monsterLabelName = document.getElementById("monsterLabelName");
const monsterLabelHealth = document.getElementById("monsterLabelHealth");

const weapons = [
  { name_en: 'stick', name_zh: '木棍', power: 5 },
  { name_en: 'dagger', name_zh: '匕首', power: 30 },
  { name_en: 'claw hammer', name_zh: '流星锤', power: 50 },
  { name_en: 'sword', name_zh: '倚天剑', power: 100 }
];

const monsters = [
  { name_en: "slime", name_zh: "史莱姆", level: 2, health: 15 },
  { name_en: "fanged beast", name_zh: "野兽", level: 8, health: 60 },
  { name_en: "dragon", name_zh: "恶龙", level: 20, health: 300 }
];

const labels = {
  zh: {
    xp: "经验值：",
    health: "生命值：",
    gold: "金币：",
    monsterName: "怪物：",
    monsterHealth: "生命："
  },
  en: {
    xp: "XP:",
    health: "Health:",
    gold: "Gold:",
    monsterName: "Monster Name:",
    monsterHealth: "Health:"
  }
};

const locations = [
  {
    name: "town square",
    "button text_en": ["Go to store", "Go to cave", "Fight dragon"],
    "button text_zh": ["去商店", "去洞穴", "挑战巨龙"],
    "button functions": [goStore, goCave, fightDragon],
    text_en: "You are in the town square. You see a sign that says 'Store'.",
    text_zh: "你现在在城镇广场。你看到一块写着'商店'的牌子。"
  },
  {
    name: "store",
    "button text_en": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button text_zh": ["购买10点生命（10金币）", "购买武器（30金币）", "回到广场"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text_en: "You enter the store.",
    text_zh: "你进入了商店。"
  },
  {
    name: "cave",
    "button text_en": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button text_zh": ["打史莱姆", "打野兽", "回到广场"],
    "button functions": [fightSlime, fightBeast, goTown],
    text_en: "You enter the cave. You see some monsters.",
    text_zh: "你进入了洞穴。你看到一些怪物。"
  },
  {
    name: "fight",
    "button text_en": ["Attack", "Dodge", "Run"],
    "button text_zh": ["攻击", "闪避", "逃跑"],
    "button functions": [attack, dodge, goTown],
    text_en: "You are fighting a monster.",
    text_zh: "你正在与怪物战斗。"
  }
];

function getWeaponName(index) {
  return weapons[index]["name_" + currentLang];
}

function getMonsterName(index) {
  return monsters[index]["name_" + currentLang];
}

function update(location) {
  monsterStats.style.display = "none";
  currentLocationObject = location;
  const langKey = currentLang === 'zh' ? '_zh' : '_en';

  button1.innerText = location["button text" + langKey][0];
  button2.innerText = location["button text" + langKey][1];
  button3.innerText = location["button text" + langKey][2];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  text.innerHTML = location["text" + langKey];
}

function updateLabels() {
  labelXp.textContent = labels[currentLang].xp;
  labelHealth.textContent = labels[currentLang].health;
  labelGold.textContent = labels[currentLang].gold;
  monsterLabelName.textContent = labels[currentLang].monsterName;
  monsterLabelHealth.textContent = labels[currentLang].monsterHealth;
}

document.getElementById("languageSelector").addEventListener("change", (e) => {
  currentLang = e.target.value;
  updateLabels();
  if (currentLocationObject) {
    update(currentLocationObject);
  }
});

function goTown() { update(locations[0]); }
function goStore() { update(locations[1]); }
function goCave() { update(locations[2]); }
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = currentLang === 'zh' ? "你没有足够的金币。" : "You do not have enough gold to buy health.";
  }
}
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = getWeaponName(currentWeapon);
      text.innerText = (currentLang === 'zh' ? "你现在拥有 " : "You now have a ") + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += (currentLang === 'zh' ? " 你的背包中有：" : " In your inventory you have: ") + inventory.join(", ");
    } else {
      text.innerText = currentLang === 'zh' ? "金币不足，无法购买武器。" : "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = currentLang === 'zh' ? "你已经拥有最强的武器！" : "You already have the most powerful weapon!";
    button2.innerText = currentLang === 'zh' ? "出售武器换15金币" : "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let sold = inventory.shift();
    text.innerText = (currentLang === 'zh' ? "你卖掉了 " : "You sold a ") + sold + ".";
    text.innerText += (currentLang === 'zh' ? " 背包现在有：" : " In your inventory you have: ") + inventory.join(", ");
    currentWeapon--;
  } else {
    text.innerText = currentLang === 'zh' ? "不能卖掉你唯一的武器！" : "Don't sell your only weapon!";
  }
}
function fightSlime() { fighting = 0; goFight(); }
function fightBeast() { fighting = 1; goFight(); }
function fightDragon() { fighting = 2; goFight(); }
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = getMonsterName(fighting);
  monsterHealthText.innerText = monsterHealth;
}
function attack() {
  text.innerText = (currentLang === 'zh' ? "怪物攻击你。你用 " : "The monster attacks. You attack it with your ") + getWeaponName(currentWeapon) + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += currentLang === 'zh' ? " 你未击中。" : " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    text.innerText = currentLang === 'zh' ? "你死了。☠" : "You die. ☠";
  } else if (monsterHealth <= 0) {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[0]);
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    let broken = inventory.pop();
    text.innerText += (currentLang === 'zh' ? " 你的 " : " Your ") + broken + (currentLang === 'zh' ? " 坏掉了。" : " breaks.");
    currentWeapon--;
  }
}
function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  return hit > 0 ? hit : 0;
}
function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}
function dodge() {
  text.innerText = currentLang === 'zh' ? "你闪避了怪物的攻击。" : "You dodge the attack.";
}

// 初始化
updateLabels();
goTown();