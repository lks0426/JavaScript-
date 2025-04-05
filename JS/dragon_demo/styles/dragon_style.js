// ========= 游戏状态管理 ========= //
const gameState = {
    xp: 0, // 玩家经验值
    health: 100, // 玩家当前血量
    gold: 50, // 玩家当前金币
    currentWeaponIndex: 0, // 当前装备武器在 weapons 数组中的索引
    fightingIndex: null, // 当前正在战斗的怪物索引
    monsterHealth: null, // 当前怪物的剩余血量
    // inventory: ['棍子'] // 初始武器背包（字符串数组）
  };

// ========= UI 元素管理 ========= //
const UI = {

  // 页面中用于显示文字的元素
  text: document.querySelector('#text'),
  xp: document.querySelector('#xpText'), // 经验值文字框
  health: document.querySelector('#hpText'), // 血量文字框
  gold: document.querySelector('#goldText'), // 金币文字框
  monsterStats: document.querySelector('#monsterStats'), // 怪物状态框（可显示/隐藏）
  monsterName: document.querySelector('#monsterName'), // 当前怪物名字
  monsterHealth: document.querySelector('#monsterHealth'), // 当前怪物血量

  updateStats() {
    this.xp.innerText = gameState.xp;
    this.health.innerText = gameState.health;
    this.gold.innerText = gameState.gold;
    this.monsterHealth.innerText = gameState.monsterHealth;
  }
};

UI.updateStats();
