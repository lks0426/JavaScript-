// 状态栏标签文本
const labels = {
    zh: {
      xp: "经验值：",
      health: "生命值：",
      gold: "金币：",
      monsterName: "怪物名：",
      monsterHealth: "怪物生命："
    },
    en: {
      xp: "XP:",
      health: "Health:",
      gold: "Gold:",
      monsterName: "Monster Name:",
      monsterHealth: "Health:"
    }
  };
  
  // 场景语言包（只包含前三个页面示例，其他你可以仿写补全）
  const languagePacks = {
    en: [
      {
        text: 'You are in the town square. You see a sign that says "Store".',
        buttons: ["Go to store", "Go to cave", "Fight dragon"]
      },
      {
        text: "You enter the store.",
        buttons: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"]
      },
      {
        text: "You enter the cave. You see some monsters.",
        buttons: ["Fight slime", "Fight fanged beast", "Go to town square"]
      },
      {
        text: "You are fighting a monster.",
        buttons: ["Attack", "Dodge", "Run"]
      }
    ],
    zh: [
      {
        text: "你现在在城镇广场。你看到一块写着“商店”的牌子。",
        buttons: ["去商店", "去洞穴", "挑战巨龙"]
      },
      {
        text: "你进入了商店。",
        buttons: ["购买10生命（10金币）", "购买武器（30金币）", "返回城镇广场"]
      },
      {
        text: "你进入了洞穴。你看到一些怪物。",
        buttons: ["打史莱姆", "打野兽", "返回城镇广场"]
      },
      {
        text: "你正在和怪物战斗。",
        buttons: ["攻击", "闪避", "逃跑"]
      }
    ]
  };
  
  let currentLang = "en";
  let currentLocation = 0;
  
  const xpText = document.getElementById("xpText");
  const healthText = document.getElementById("healthText");
  const goldText = document.getElementById("goldText");
  
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const text = document.getElementById("text");
  
  const monsterStats = document.getElementById("monsterStats");
  const monsterName = document.getElementById("monsterName");
  const monsterHealthText = document.getElementById("monsterHealth");
  
  const labelXp = document.getElementById("labelsXp");
  const labelHealth = document.getElementById("labelsHealth");
  const labelGold = document.getElementById("labelsGold");
  const monsterLabelName = document.getElementById("monsterLabelName");
  const monsterLabelHealth = document.getElementById("monsterLabelHealth");
  
  document.getElementById("languageSelector").addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLabels();
    update(currentLocation);
  });
  
  function updateLabels() {
    labelXp.textContent = labels[currentLang].xp;
    labelHealth.textContent = labels[currentLang].health;
    labelGold.textContent = labels[currentLang].gold;
    monsterLabelName.textContent = labels[currentLang].monsterName;
    monsterLabelHealth.textContent = labels[currentLang].monsterHealth;
  }
  
  // 下面这个是最关键的，根据地点 id 更新文本
  function update(locationId) {
    currentLocation = locationId;
    const langContent = languagePacks[currentLang][locationId];
    text.textContent = langContent.text;
    button1.textContent = langContent.buttons[0];
    button2.textContent = langContent.buttons[1];
    button3.textContent = langContent.buttons[2];
  }
  
  // 你可以在下面设置每个按钮点击的跳转逻辑
  button1.onclick = () => update(1); // store
  button2.onclick = () => update(2); // cave
  button3.onclick = () => update(3); // fight
  
  // 初始显示
  updateLabels();
  update(0);
  