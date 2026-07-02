const en = {
  heroGreetingPrefix: "Hi, I'm Niko (Yifan Pang)",
  about: "About",
  work: "Work Experience",
  education: "Education",
  skills: "Skills",
  present: "Present",
  projectsPill: "My Projects",
  projectsHeading: "Check out my latest work",
  projectsIntro:
    "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
  researchPill: "Research",
  researchHeading: "Research & Publications",
  researchIntro:
    "Alongside product engineering, I work on research about agentic systems — how agents fail, and how those failures become training signals.",
  myWorkPill: "My Work",
  myWorkHeading: "Building, every single day",
  myWorkIntro:
    "A year of commits across my two GitHub accounts — and how hard I push AI coding tools.",
  usageTitle: "Claude Code Usage Dashboard",
  usageDates: "2026 · auto-updated daily",
  usageP1:
    "I'm a heavy user of AI coding tools — roughly 2B tokens and $1.6k+ in API-equivalent cost burned in the last month alone.",
  usageP2:
    "This dashboard is a small GitHub Actions project: a pipeline auto-syncs my daily Claude Code token usage to a public page, split by input / output / cache with per-day cost.",
  contactPill: "Contact",
  contactHeading: "Get in Touch",
  contactBeforeLink: "Want to chat? Just ",
  contactLink: "send me an email",
  contactAfterLink:
    " and I'll respond whenever I can. I will ignore all soliciting.",
  langTooltip: "切换到中文",
};

export type UIStrings = { [K in keyof typeof en]: string };

const zh: UIStrings = {
  heroGreetingPrefix: "你好，我是 Niko",
  about: "关于我",
  work: "工作经历",
  education: "教育经历",
  skills: "技能",
  present: "至今",
  projectsPill: "我的项目",
  projectsHeading: "看看我最近在做什么",
  projectsIntro:
    "从简单的网站到复杂的 Web 应用，我做过各种类型的项目。下面是几个我最喜欢的。",
  researchPill: "研究",
  researchHeading: "研究与论文",
  researchIntro:
    "在产品工程之外，我也做 agentic systems 方向的研究 —— agent 是如何失败的，以及这些失败如何变成训练信号。",
  myWorkPill: "我的工作",
  myWorkHeading: "每一天都在构建",
  myWorkIntro:
    "过去一年我在两个 GitHub 账号下的提交记录，以及我把 AI coding 工具用到了什么程度。",
  usageTitle: "Claude Code Usage Dashboard",
  usageDates: "2026 · 每日自动更新",
  usageP1:
    "我是 AI coding 工具的重度使用者 —— 仅过去一个月就消耗了约 20 亿 token、$1.6k+ 的 API 等值成本。",
  usageP2:
    "这个看板本身是一个 GitHub Actions 小项目：流水线每天自动同步我的 Claude Code token 用量到公开页面，按 input / output / 缓存拆分，并展示每日成本。",
  contactPill: "联系",
  contactHeading: "联系我",
  contactBeforeLink: "想聊聊？欢迎",
  contactLink: "给我写邮件",
  contactAfterLink: "，看到后我会尽快回复。推销信息一律无视。",
  langTooltip: "Switch to English",
};

export const UI: { en: UIStrings; zh: UIStrings } = {
  en,
  zh,
};
