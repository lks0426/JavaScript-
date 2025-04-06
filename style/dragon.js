const gameSet = {
    exp: 1110,
    hp: 100,
    gold: 50,
    level: 10,
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
  }
  
  function updateUI() {
    UI.exp.innerText = gameSet.exp;
    UI.hp.innerText = gameSet.hp;
    UI.gold.innerText = gameSet.gold;
    UI.level.innerText = gameSet.level;
  }
  
  // 初始化执行
  initUI();
  updateUI();
  
  console.log(gameSet.level);