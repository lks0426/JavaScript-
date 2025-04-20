const gameSet = {
  exp: 0,
  hp: 100,
  gold: 50,
  level: 1,
  currentWeaponIndex: 0,
  fightingIndex: null,
  monsterHp: null,
};

const UI = {};

function initUI() {
  UI.text = document.querySelector('#text');
  UI.exp = document.querySelector('#xpText');
  UI.hp = document.querySelector('#hpText');
  UI.gold = document.querySelector('#goldText');
  UI.level = document.querySelector('#levelText');
  UI.monsterStates = document.querySelector('#monsterStats');
  UI.monsterName = document.querySelector('#monsterName');
  UI.monsterHp = document.querySelector('#monsterHealth');
  UI.button1 = document.querySelector('#button1');
  UI.button2 = document.querySelector('#button2');
  UI.button3 = document.querySelector('#button3');
}

function updateUI() {
  UI.exp.innerText = gameSet.exp;
  UI.hp.innerText = gameSet.hp;
  UI.gold.innerText = gameSet.gold;
  UI.level.innerText = gameSet.level;
  if (UI.monsterHp && gameSet.monsterHp !== null) {
    UI.monsterHp.innerText = gameSet.monsterHp;
  }
}

const monsters = [
  { name: "史莱姆", hp: 30, level: 1, reward: 10 },
  { name: "兽人", hp: 50, level: 2, reward: 20 },
  { name: "巨龙", hp: 120, level: 5, reward: 50 }
];

// 进入主页面
function goTown() {
  UI.monsterStates.style.display = 'none';
  UI.text.innerText = "你回到了城镇。";
  UI.button1.innerText = "出发冒险";
  UI.button2.innerText = "购买生命（-10金币）";
  UI.button3.innerText = "重置游戏";

  UI.button1.onclick = goBattle;
  UI.button2.onclick = buyHealth;
  UI.button3.onclick = restartGame;
}

// 进入战斗
function goBattle() {
  const monster = monsters[Math.floor(Math.random() * monsters.length)];
  gameSet.fightingIndex = monsters.indexOf(monster);
  gameSet.monsterHp = monster.hp;

  UI.monsterStates.style.display = 'block';
  UI.monsterName.innerText = monster.name;
  UI.text.innerText = `你遇到了 ${monster.name}，准备战斗！`;

  UI.button1.innerText = "攻击";
  UI.button2.innerText = "逃跑";
  UI.button3.innerText = "发呆";

  UI.button1.onclick = attack;
  UI.button2.onclick = goTown;
  UI.button3.onclick = () => UI.text.innerText = "你什么都没做……怪物看着你发呆";
  updateUI();
}

// 攻击逻辑
function attack() {
  const monster = monsters[gameSet.fightingIndex];
  const playerDmg = Math.floor(Math.random() * 15) + 5;
  gameSet.monsterHp -= playerDmg;
  UI.text.innerText = `你攻击了 ${monster.name}，造成 ${playerDmg} 点伤害！`;

  if (gameSet.monsterHp <= 0) {
    winBattle(monster);
  } else {
    monsterAttack(monster);
  }

  updateUI();
}

// 怪物反击
function monsterAttack(monster) {
  const monsterDmg = Math.floor(Math.random() * monster.level * 5) + 1;
  gameSet.hp -= monsterDmg;
  UI.text.innerText += `\n${monster.name} 反击了你，造成 ${monsterDmg} 点伤害！`;

  if (gameSet.hp <= 0) {
    loseGame();
  }

  updateUI();
}

// 获胜逻辑
function winBattle(monster) {
  const xpGain = monster.level * 10;
  const goldGain = monster.reward;
  gameSet.exp += xpGain;
  gameSet.gold += goldGain;

  UI.text.innerText += `\n你打败了 ${monster.name}，获得 ${xpGain} XP 和 ${goldGain} 金币！`;

  checkLevelUp();
  goTown();
  updateUI();
}

// 升级判断逻辑
function checkLevelUp() {
  while (gameSet.exp >= 50) {
    gameSet.exp -= 50;
    gameSet.level += 1;
    gameSet.hp += 10;
    UI.text.innerText += `\n你升级了！当前等级：${gameSet.level}，生命值增加为：${gameSet.hp}`;
  }
  updateUI();
}

// 购买生命
function buyHealth() {
  if (gameSet.gold >= 10) {
    gameSet.gold -= 10;
    gameSet.hp += 10;
    UI.text.innerText = "你花了10金币，恢复了10点血量。";
  } else {
    UI.text.innerText = "你的金币不足，无法购买生命。";
  }
  updateUI();
}

// 游戏失败
function loseGame() {
  UI.text.innerText += "\n你倒下了……游戏结束！";
  UI.button1.innerText = "重启游戏";
  UI.button2.style.display = "none";
  UI.button3.style.display = "none";
  UI.button1.onclick = restartGame;
}

// 重启游戏
function restartGame() {
  gameSet.exp = 0;
  gameSet.hp = 100;
  gameSet.gold = 50;
  gameSet.level = 1;
  gameSet.monsterHp = null;
  gameSet.fightingIndex = null;

  UI.button2.style.display = "inline-block";
  UI.button3.style.display = "inline-block";

  goTown();
  updateUI();
}

// 启动游戏
initUI();
updateUI();
goTown();
