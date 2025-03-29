// === Node.js 后端（使用 Express + 新版 OpenAI SDK + Agent-style Prompt） ===

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());

// OpenAI 初始化
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 路由
app.post('/generate', async (req, res) => {
  const { industry, keywords, tone = "专业" } = req.body;

  try {
    const prompt = `你是一个具有10年经验的文案营销 Agent，擅长为不同行业定制广告文案。

请按照以下步骤执行任务：
1. 分析行业 "${industry}" 的核心痛点与用户关注点
2. 根据关键词 "${keywords}" 构思一条符合"${tone}"风格的情感打动用户的文案
3. 文案语言简洁、生动，适合发布到社交媒体平台（如微信、推特、Instagram）
4. 字数要求1000字到2000字
5. 请直接输出最终文案，不要解释分析过程

请输出最终文案：`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: '你是一位文案写作专家。' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const result = completion.choices[0].message.content.trim();

    const a = completion.choices[0].message.content;
    const b = completion.choices[0].message;
    const c = completion.choices[0];
    // const d = completion.choices[0].message.content.trim();
    console.log('------------a-----------');
    console.log(a);
    console.log('------------b-----------');
    console.log(b);
    console.log('------------c-----------');
    console.log(c);




    res.json({ result });
    console.log('-----------------------');
    console.log(result);
    console.log('-----------------------');
  } catch (error) {
    console.error('生成失败:', error);
    if (error.status === 429) {
      res.status(429).json({ error: 'API 调用频率过高或已超出配额，请检查你的 OpenAI 帐户。' });
    } else {
      res.status(500).json({ error: '生成失败，请稍后再试。' });
    }
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`✅ AI 写作助手后端运行于 http://localhost:${port}`);
});
