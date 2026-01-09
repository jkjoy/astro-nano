import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "玩呢笔记",
  EMAIL: "jkjoy@126.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "玩呢笔记是一个极简而轻量级的博客和作品集。",
};

export const BLOG: Metadata = {
  TITLE: "博客",
  DESCRIPTION: "一个关于我热衷话题的文章集合。",
};

export const WORK: Metadata = {
  TITLE: "关于",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "一个关于我项目。",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Mastodon",
    HREF: "https://jiong.us/@jkjoy",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/jkjoy"
  },
  { 
    NAME: "telegram",
    HREF: "https://t.me/imsunpw",
  }
];

export const TWIKOO = {
  ENV_ID: "https://t.memos.ee",
  EL_ID: "twikoo-comments",
  REGION: "",
  LANG: "zh-CN",
} as const;
