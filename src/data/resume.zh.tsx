import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { DATA } from "./resume";
import type { AppData } from "./types";

export const DATA_ZH: AppData = {
  name: "Niko Pang",
  initials: "NP",
  url: "https://www.nikopang.com",
  location: "中国 · 天津",
  locationLink: "https://www.google.com/maps/place/tianjin",
  description:
    "全栈工程师，专注 agent 平台 —— 实时语音 agent、agent harness，以及让 AI 驱动真实产品的基础设施。",
  summary:
    "我是 [Cookiy AI](https://www.cookiy.ai) 的创始团队成员。Cookiy 是一个实时用户调研平台（融资额八位数美元，生产环境累计服务 50k+ 受访者、700+ 研究项目）。\n\n" +
    "研究方面，我与人合著了 [AOI](https://arxiv.org/abs/2603.03378)（在投 SIGKDD 2026），一个面向云端自主诊断的多 agent 框架。",
  avatarUrl: "https://avatars.githubusercontent.com/u/14194564?v=4",
  skills: DATA.skills,
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    {
      href: "https://niko-pang.vercel.app",
      icon: NotebookIcon,
      label: "博客",
    },
  ],
  contact: {
    email: "niko.pang96@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/n1k0ver3E",
        icon: Icons.github,
        navbar: true,
      },
      GitWork: {
        name: "GitHub（Cookiy）",
        url: "https://github.com/Pn1ko",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/n1k0ver3_",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "发邮件",
        url: "mailto:niko.pang96@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cookiy AI",
      href: "https://www.cookiy.ai",
      badges: ["创始团队"],
      location: "Palo Alto, CA",
      title: "创始工程师 · 全栈 / Agent 平台",
      logoUrl: "/logos/cookiy.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Cookiy 是一个覆盖「研究计划 → 招募 → 访谈 → 报告」完整闭环的实时用户调研平台，目标是让 AI agent 端到端地驱动整个研究流程。我构建了实时多模态语音访谈 agent：级联 STT→LLM→TTS 流式管线，带 VAD、多语言 turn detection、barge-in 与低于一秒的首次响应（LLM ~300ms / TTS TTFT 150–250ms），并支持屏幕共享视觉，让 agent 能实时观察并追问用户的真实操作。我设计了团队的 agent 开发 harness（契约冻结进单一 CONTRACT.md，配 CI 校验与 drift 审计，现已是团队标准），以及基于单一事件循环 + 统一事件流的可插拔 agent runtime。我把整个平台封装为 30 个 MCP tools 并通过 OpenAI Apps 官方审核；用 RFC 8414/9728 OAuth discovery 统一了 agent / CLI 鉴权，compact token 比 JWT 小约 75%；759K+ 次 LLM 调用经 Cloudflare AI Gateway 路由，prompt-cache 命中率约 86%。招募模块由我从零搭建：supplier adapter（Prolific / CloudResearch / CINT）、可组合的甄别（screener）引擎、并发安全的匹配与计费引擎（钱包双写，drift=0），以及带确定性兜底、加了 guardrail 的 supplier-selection agent。",
    },
    {
      company: "Thoughtworks（思特沃克）",
      href: "https://www.thoughtworks.com",
      badges: [],
      location: "中国",
      title: "软件工程师 · 咨询师",
      logoUrl: "/logos/thoughtworks.png",
      start: "May 2022",
      end: "Sep 2025",
      description:
        "企业级后端架构与 AI 应用咨询，作为 Feature Owner 负责从需求澄清到上线运维的端到端交付。在小样本智能客服 RAG PoC 中（客户仅有约 1 万字中文 FAQ，无法微调）：系统性评估中文 embedding 模型（m3e / text2vec / E5），查准率提升约 20%；引入 BM25 + Cross-Encoder 双通道重排序；结合 HyDE 思路构建「预设问题」Query Store 做双路径检索；用 RAGAS 搭建可复用的评测流程 —— 开放测试问答准确率 90%+。另主导澳大利亚某流媒体平台的元数据后端平台化改造：Java 21 + Spring Boot + Orkes Conductor 分布式视频处理工作流，Kubernetes / ArgoCD / Terraform 的 GitOps 交付，AWS 上 Kafka + Elasticsearch 的事件驱动监控，以及统一 VOD 与 Live 的多租户元数据层 —— 新业务线一周内可接入，处理效率提升约 40%，上线周期从数小时缩短到数十分钟。",
    },
  ],
  education: [
    {
      school: "新南威尔士大学（UNSW）",
      href: "https://www.unsw.edu.au",
      degree: "计算机科学硕士（数据科学方向）",
      logoUrl: "/logos/unsw.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "集美大学",
      href: "https://www.jmu.edu.cn",
      degree: "网络工程 工学学士",
      logoUrl: "/logos/jmu.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "user-research-skill",
      href: "https://github.com/cookiy-ai/user-research-skill",
      dates: "2026 - Present",
      active: true,
      description:
        "Cookiy 的开源 skill：让任意 coding agent —— Claude Code、Codex、Cursor、OpenClaw —— 变成端到端的用户研究员：AI 主持访谈、合成用户、量化问卷、参与者招募。**GitHub 900+ star**，底层跑在我负责的 MCP / CLI 接入面上。",
      technologies: ["Claude Skills", "MCP", "CLI", "Shell"],
      links: [
        {
          type: "Source",
          href: "https://github.com/cookiy-ai/user-research-skill",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Realtime Voice Interview Agent",
      href: "https://www.cookiy.ai",
      dates: "2025 - Present",
      active: true,
      description:
        "在生产环境中独立完成整场用户访谈的语音 agent。级联 STT→LLM→TTS 流式管线，配合动态 TTS 分块、VAD + 多语言 turn detection、barge-in 与静默恢复 —— 端到端首次响应低于一秒。屏幕共享视觉能力让 agent 可以实时观看、暂停采集，并针对用户屏幕上的行为深入追问。",
      technologies: [
        "Python",
        "LiveKit Agents",
        "GCP Cloud Run",
        "ffmpeg",
        "WebRTC",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cookiy.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Agent Runtime Harness & cookiy-agent",
      href: "https://github.com/Pn1ko",
      dates: "2026 - Present",
      active: true,
      description:
        "从零构建的可插拔 agent runtime —— 单一事件循环（AgentLoop）、统一事件流（AgentEvent），以及三个可替换契约（Tool / LlmProvider / SessionStore），不依赖 LangChain。在此之上构建了 Slack 原生的调研 agent：通过 Gemini function-calling 把自然语言解析为工具调用，在临时的 E2B 沙箱中执行，并用 webhook 驱动的会话恢复来支撑长任务。",
      technologies: ["TypeScript", "Gemini", "E2B", "Slack", "MCP"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Pn1ko",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cookiy MCP Server & LLM Gateway",
      href: "https://www.cookiy.ai",
      dates: "2026 - Present",
      active: true,
      description:
        "把整个 SaaS 封装为 agent 可调用的 MCP server：30 个通过装饰器注册的工具，支持 SSE / StreamableHTTP / stdio，并通过了 OpenAI Apps 官方审核。用 RFC 8414/9728 OAuth discovery 统一 agent 与 CLI 鉴权，无状态 compact token 比 JWT 小约 75%。全部 LLM 流量经 Cloudflare AI Gateway 治理：多模型路由、限流、成本可观测，759K+ 次调用的 prompt-cache 命中率约 86%。",
      technologies: [
        "NestJS",
        "MCP",
        "OAuth 2.1",
        "Cloudflare AI Gateway",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cookiy.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "open-browser-use",
      href: "https://github.com/iFurySt/open-browser-use",
      dates: "2026",
      active: true,
      description:
        "参与 [iFurySt](https://github.com/iFurySt) 的平台中立 Browser Use 项目 —— 面向 AI agent 的真实 Chrome 自动化，提供 CLI 与 JS / Python / Go SDK，基于 JSON-RPC 协议，无厂商锁定、极简上手。GitHub 170+ star。",
      technologies: ["JavaScript", "CDP", "CLI", "SDK"],
      links: [
        {
          type: "Source",
          href: "https://github.com/iFurySt/open-browser-use",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HeyYo",
      href: "https://github.com/iFurySt",
      dates: "2026",
      active: true,
      description:
        "与 [iFurySt](https://github.com/iFurySt) 合作的 macOS 原生语音输入 app：按下 Fn 即可在任何地方语音输入 —— 本地 Ogg/Opus 采集，Go 服务端并行调用 Gemini / Soniox / Deepgram / Fireworks ASR，再由 Gemini refine 输出最终文本。Windows 预览版进行中。",
      technologies: ["SwiftUI", "Go", "ASR", "Gemini"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/iFurySt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title:
        "AOI: Turning Failed Trajectories into Training Signals for Autonomous Cloud Diagnosis",
      dates: "March 2026",
      location: "在投 SIGKDD 2026 · arXiv preprint · cs.LG / cs.AI",
      description:
        "与人合著的多 agent 框架，用 LLM 自动化 SRE 诊断：通过 GRPO 把专家知识蒸馏进开源模型，用读写分离的架构隔离执行，并把失败的操作尝试转化为训练信号 —— 基准任务成功率 66.3%，其中仅失败分析一项就贡献了 +4.8pp。",
      image: "",
      links: [
        {
          title: "arXiv",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://arxiv.org/abs/2603.03378",
        },
        {
          title: "PDF",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://arxiv.org/pdf/2603.03378",
        },
      ],
    },
  ],
};
