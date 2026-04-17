# CLAUDE.md — Ding Yunguang Portfolio

> 这个文件是 Claude Code 的项目上下文，每次启动 CC 会自动读取。
> 不要删除。更新项目重要决策时，请同步更新这里。

## 项目定位

这是丁韵光（视觉设计师）的**对外专业作品集网站**。

- **目标受众**：潜在客户、合作方、雇主、行业同行
- **核心目的**：用精选作品展示专业能力，促成合作与机会
- **域名**：`dingyunguang.com`

**这不是档案库**。所有内容都是精选的、经过策展的、视觉打磨到位的。
宁可 15 个完整案例，不要 60 个半成品。

## 核心设计原则

- **质量 > 数量**：每个项目都是 Case Study 级别，不是图集陈列
- **视觉即作品**：网站本身就是作品的一部分，视觉质感必须极高
- **编辑化叙事**：每个项目都有故事——问题、思考、方案、结果
- **内容与展示分离**：内容存 Notion，网站通过 API 读取渲染
- **低摩擦更新**：每天 15-30 分钟就能推进

## 技术栈

- **框架**：Next.js 14 (App Router) + TypeScript
- **样式**：Tailwind CSS + shadcn/ui
- **动效**：Framer Motion（默认）+ GSAP（复杂场景按需）
- **3D**：React Three Fiber（高级功能按需）
- **内容**：Notion API（作品库）
- **图床**：Cloudinary（免费版起步）
- **部署**：Vercel（自动部署 + ISR）
- **分析**：Vercel Analytics

## 信息架构

```
/                     首页（Hero + 精选 6-9 作品 + About 引子 + 联系）
/works                作品总览（全部精选，可按媒介筛选）
/works/[slug]         Case Study 详情页（每个都是深度案例）
/about                关于我（一页式叙事，不分模块堆砌）
/contact              联系方式 + 服务说明
/journal              日志/思考（可选，Phase 3 后再加）
```

**不做档案库分区**。所有上线内容都是对外可见的精选作品。

## 内容模型（Notion 数据库）

### Works（作品库 —— 唯一核心数据库）

| 字段 | 类型 | 说明 |
|---|---|---|
| Title | Title | 项目名 |
| Slug | Text | URL 用，如 `brand-x-2024` |
| Cover | Files | 主封面图（大图，Hero 用） |
| Thumbnail | Files | 列表缩略图（可与 Cover 相同） |
| Medium | Multi-select | 3D Animation / 3D Render / Web / Graphic / Video / Photography |
| Year | Number | |
| Client | Text | 客户或场景 |
| Role | Text | 你的角色 |
| Tools | Multi-select | 使用工具 |
| Summary | Text | 一句话（30 字内） |
| Challenge | Text | 项目挑战 / 问题背景（Case Study 第一段） |
| Approach | Text | 思考与方法（Case Study 第二段） |
| Solution | Text | 最终方案描述（Case Study 第三段） |
| Outcome | Text | 结果 / 反馈 / 反思（Case Study 第四段） |
| Media URLs | Text | 过程图、成果图、视频链接（换行分隔） |
| External Link | URL | 线上项目链接（如有） |
| Featured | Checkbox | 是否上首页（6-9 个） |
| Status | Select | Draft / Published |
| Order | Number | 手动排序权重（数字大的在前） |

**重要**：Status = Published 的项目才会显示。作品页默认按 Order DESC + Year DESC 排序。

## 开发约定

- 所有页面默认 SSG + ISR（revalidate: 60s）
- 图片统一走 Cloudinary，用 `next/image` + 自定义 loader
- 组件放 `/components`，业务组件按页面分目录
- Notion 查询封装在 `/lib/notion.ts`
- 环境变量：`NOTION_TOKEN`, `NOTION_WORKS_DB_ID`, `CLOUDINARY_*`
- Git 分支策略：`main` 自动部署到生产，`dev` 预览

## 视觉方向

（待确认，由用户决定 —— Phase 0 Day 7 定稿）

- [ ] 极简编辑化（大留白、衬线标题、黑白为主）
- [ ] 浓烈色彩表达（强视觉冲击、大色块、实验性排版）
- [ ] 科技未来感（网格、单色 Monospace、冷色调）
- [ ] 胶片质感（暖色、颗粒、慢节奏）
- [ ] 其他：________

**参考站点**：
- （用户补充）

**视觉关键词**：编辑化、克制、呼吸感、质感

## 当前进度

- [ ] Phase 0：项目搭建（Day 1-7）
- [ ] Phase 1：About 页完整 + 前 3 个 Case Study（Day 8-21）
- [ ] Phase 2：Case Study 持续产出（Day 22-75，目标 15-20 个）
- [ ] Phase 3：精修、打磨、上线推广（Day 76-90）

## 每周节奏

- **每天 15-30 分钟**：素材整理 / 文案打磨 / 视觉微调 / 为下一个 Case Study 做准备
- **每 3-5 天**：发布 1 个完整 Case Study
- **每周日**：回顾本周、挑选下周要做的项目、整理 Wishlist

## CC 工作指令（常用）

- 每次开工：`请先读 CLAUDE.md 了解项目上下文`
- 重要架构决策请同步更新本文件
- 不确定时优先询问用户，不要自行做产品决策
- 视觉改动先描述方案，确认后再写代码
- 保持代码简洁，Portfolio 项目不需要过度工程化
