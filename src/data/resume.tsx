import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Niko Pang",
  initials: "NP",
  url: "https://www.nikopang.com",
  location: "Tianjin, China",
  locationLink: "https://www.google.com/maps/place/tianjin",
  description:
    "Full-stack engineer building agent platforms — realtime voice agents, agent harnesses, and the infrastructure that lets AI drive real products.",
  summary:
    "I'm a founding team member at [Cookiy AI](https://www.cookiy.ai), a Silicon Valley–based realtime user-research platform (funded at eight figures USD, 50k+ respondents and 700+ studies in production).\n\n" +
    "On the research side, I co-authored [AOI](https://arxiv.org/abs/2603.03378) (under review at SIGKDD 2026), a multi-agent framework for autonomous cloud diagnosis.",
  avatarUrl: "https://avatars.githubusercontent.com/u/14194564?v=4",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: undefined },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "LiveKit", icon: undefined },
    { name: "MCP", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "GCP / AWS", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://niko-pang.vercel.app",
      icon: NotebookIcon,
      label: "Blog",
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
        name: "GitHub (Cookiy)",
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
        name: "Send Email",
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
      badges: ["Founding Team"],
      location: "Palo Alto, CA",
      title: "Founding Engineer · Full-Stack / Agent Platform",
      logoUrl: "/logos/cookiy.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Cookiy is a realtime user-research platform covering the full loop from research plan → recruitment → interview → report, built to let AI agents drive an entire study end to end. I built the realtime multimodal voice interview agent: a cascaded STT→LLM→TTS streaming pipeline with VAD, multilingual turn detection, barge-in and sub-second first response (~300ms LLM / 150–250ms TTFT), plus screen-share vision so the agent can watch and probe real user behavior. I designed the team's agent development harness (contracts frozen into a single CONTRACT.md with CI checks and drift audits — now the team standard) and a pluggable agent runtime built on one event loop and one unified event stream. I exposed the whole platform as 30 MCP tools that passed the official OpenAI Apps review, unified agent/CLI auth via RFC 8414/9728 OAuth discovery with compact tokens ~75% smaller than JWT, and routed 759K+ LLM calls through Cloudflare AI Gateway with ~86% prompt-cache hit rate. I also built the recruitment module from zero: supplier adapters (Prolific / CloudResearch / CINT), a composable screener engine, a concurrency-safe matching & billing engine (wallet dual-write, drift=0), and a guardrailed supplier-selection agent with deterministic fallback.",
    },
    {
      company: "BoundlessAI",
      href: "https://www.linkedin.com/in/niko-pang-4010a2135/",
      badges: ["Co-Founder", "Part-time"],
      location: "New Zealand · Remote",
      title: "Co-Founder / AI Engineer",
      logoUrl: "",
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Co-founded a New Zealand AI startup as one of its part-time tech leads, alongside my Thoughtworks role. Spearheaded a RAG-powered AI bot product aimed at improving enterprise–client communication in traditional industries: designed, built and deployed the retrieval and generation stack in Python with LlamaIndex, set up the CI/CD pipelines, and built a prompt-evaluation pipeline to quantify how prompt variants affect product effectiveness. Departed when the company pivoted to a new business model, having laid the technical groundwork for its next phase.",
    },
    {
      company: "Thoughtworks",
      href: "https://www.thoughtworks.com",
      badges: [],
      location: "China",
      title: "Software Engineer · Consultant",
      logoUrl: "/logos/thoughtworks.png",
      start: "May 2022",
      end: "Sep 2025",
      description:
        "Enterprise consulting across backend architecture and AI applications, owning features end to end from requirement clarification to production. Built a small-sample RAG customer-support agent PoC on ~10k words of Chinese FAQ (no room for fine-tuning): systematically evaluated Chinese embedding models (m3e / text2vec / E5) for a ~20% precision gain, added BM25 + cross-encoder reranking, built a HyDE-style query store for dual-path retrieval, and set up a reusable RAGAS evaluation pipeline — 90%+ answer accuracy in open testing. Re-architected an Australian streaming platform's metadata backend: Java 21 + Spring Boot + Orkes Conductor video-processing workflows, GitOps delivery with Kubernetes / ArgoCD / Terraform, Kafka + Elasticsearch event-driven monitoring on AWS, and a unified multi-tenant metadata layer for VOD + Live — new business lines onboard within a week, processing efficiency up ~40%, launch cycles cut from hours to tens of minutes.",
    },
  ],
  education: [
    {
      school: "University of New South Wales (UNSW)",
      href: "https://www.unsw.edu.au",
      degree: "M.S. in Computer Science (Data Science)",
      logoUrl: "/logos/unsw.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Jimei University",
      href: "https://www.jmu.edu.cn",
      degree: "B.Eng. in Network Engineering",
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
      showStars: true,
      description:
        "Cookiy's open-source skill that turns any coding agent — Claude Code, Codex, Cursor, OpenClaw — into an end-to-end user researcher: AI-moderated interviews, synthetic users, quant surveys, participant recruitment. **900+ stars on GitHub**, driving the platform through the MCP / CLI surface I own.",
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
        "Production voice agent that runs full user-research interviews. Cascaded STT→LLM→TTS streaming with dynamic TTS chunking, VAD + multilingual turn detection, barge-in and silence recovery — end-to-end first response under one second. Screen-share vision lets the agent watch, pause capture, and probe on-screen behavior in realtime.",
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
        "A pluggable agent runtime built from scratch — single event loop (AgentLoop), unified event stream (AgentEvent), and three swappable contracts (Tool / LlmProvider / SessionStore); no LangChain. On top of it: a Slack-native research agent that parses natural language into tool calls via Gemini function-calling and executes them inside ephemeral E2B sandboxes, with webhook-driven session resume for long tasks.",
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
        "Wrapped the entire SaaS as an agent-callable MCP server: 30 decorator-registered tools over SSE / StreamableHTTP / stdio, approved through the official OpenAI Apps review. Unified agent & CLI auth with RFC 8414/9728 OAuth discovery and stateless compact tokens (~75% smaller than JWT). All LLM traffic governed through Cloudflare AI Gateway: multi-model routing, rate limiting, cost observability, ~86% prompt-cache hit across 759K+ calls.",
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
      showStars: true,
      description:
        "Contributor to [iFurySt](https://github.com/iFurySt)'s platform-neutral Browser Use for AI agents — real Chrome automation with a CLI plus JS / Python / Go SDKs over JSON-RPC, no lock-in, dead simple. 170+ stars on GitHub.",
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
        "Collaboration with [iFurySt](https://github.com/iFurySt) on a native macOS voice-input app: press Fn to dictate anywhere — local Ogg/Opus capture, a Go server fanning out to Gemini / Soniox / Deepgram / Fireworks ASR in parallel, Gemini-refined final text. Windows preview in the works.",
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
      location: "Under review at SIGKDD 2026 · arXiv preprint · cs.LG / cs.AI",
      description:
        "Co-authored a multi-agent framework for automating SRE diagnosis with LLMs: distills expert knowledge into open-source models via GRPO, isolates execution behind a read-write separated architecture, and converts failed operation attempts into training signals — 66.3% success on benchmark tasks, with failure analysis alone contributing +4.8pp.",
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
} as const;
