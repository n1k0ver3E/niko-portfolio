const en = {
  heroGreetingPrefix: "Hi, I'm ",
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
  contactPill: "Contact",
  contactHeading: "Get in Touch",
  contactBeforeLink: "Want to chat? Just shoot me a dm ",
  contactLink: "with a direct question on twitter",
  contactAfterLink:
    " and I'll respond whenever I can. I will ignore all soliciting.",
  langTooltip: "切换到中文",
};

export type UIStrings = { [K in keyof typeof en]: string };

const zh: UIStrings = {
  heroGreetingPrefix: "你好，我是 ",
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
  contactPill: "联系",
  contactHeading: "联系我",
  contactBeforeLink: "想聊聊？欢迎",
  contactLink: "在 X（Twitter）上直接私信我",
  contactAfterLink: "，看到后我会尽快回复。推销信息一律无视。",
  langTooltip: "Switch to English",
};

export const UI: { en: UIStrings; zh: UIStrings } = {
  en,
  zh,
};
