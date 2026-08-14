export type Priority = "P0" | "P1" | "P2" | "P3";

export const ACCOUNT = {
  name: "G-Snipers Demo",
  channel: "Google Ads",
  balance: "未配置",
  spendToDate: "$12,480.00",
  bind: "未绑定 / 未测",
  cid: "—",
  mcc: "—",
};

export const PRIORITY_COUNTS = [
  { level: "P0" as const, count: 9, hint: "转化中断 · 授权缺失 · 空耗" },
  { level: "P1" as const, count: 23, hint: "浪费点击 · 创意疲软 · 出价偏离" },
  { level: "P2" as const, count: 62, hint: "观察项 · 结构与时段" },
  { level: "P3" as const, count: 44, hint: "低优先级整理" },
];

export const METRICS = [
  { key: "spend", label: "消耗", value: "$3,286", delta: "+6.2%", up: true, sample: true },
  { key: "clicks", label: "点击", value: "8,412", delta: "-3.1%", up: false, sample: true },
  { key: "impr", label: "展现", value: "196.4K", delta: "+1.8%", up: true, sample: true },
  { key: "leads", label: "线索", value: "—", delta: "未测", up: null, sample: false },
  { key: "cpc", label: "CPC", value: "$0.39", delta: "+9.4%", up: true, sample: true },
  { key: "cpl", label: "CPL", value: "—", delta: "未测", up: null, sample: false },
];

export const TREND = [
  { day: "08-08", spend: 420, clicks: 1280 },
  { day: "08-09", spend: 468, clicks: 1210 },
  { day: "08-10", spend: 392, clicks: 1184 },
  { day: "08-11", spend: 512, clicks: 1256 },
  { day: "08-12", spend: 458, clicks: 1192 },
  { day: "08-13", spend: 530, clicks: 1148 },
  { day: "08-14", spend: 506, clicks: 1142 },
];

export const DEVICES = [
  { name: "PC", share: 54.9, clicks: "4,618", cpc: "$0.32" },
  { name: "Mobile", share: 38.2, clicks: "3,214", cpc: "$0.51" },
  { name: "Tablet", share: 6.9, clicks: "580", cpc: "$0.28" },
];

export const INSIGHTS = {
  findings: [
    { level: "P0" as const, text: "转化追踪 7 日无回传，线索 / CPL 显示未测，不能把消耗当效果。" },
    { level: "P0" as const, text: "搜索词 cheap / free / job 空耗明显，需否定词提案进人审。" },
    { level: "P1" as const, text: "移动端 CPC 偏高且落地页未测，先观察，不自动降价。" },
  ],
  actions: [
    "完成账户授权（当前未配置 / 未测，无可用 CID）",
    "把浪费搜索词写入否定词变更单，等人审后才可执行",
    "低 CTR 创意进入创意优化队列，不直接改线上 RSA",
  ],
};

export type AlertRow = {
  id: string;
  level: Priority;
  type: string;
  object: string;
  reason: string;
  suggestion: string;
  status: string;
  statusTone: "warn" | "muted" | "danger";
  time: string;
};

export const ALERTS: AlertRow[] = [
  {
    id: "A-01",
    level: "P0",
    type: "转化",
    object: "Google Ads CID",
    reason: "近 7 日无转化回传",
    suggestion: "核验标签与转化操作",
    status: "未测",
    statusTone: "danger",
    time: "2026-08-14 09:12",
  },
  {
    id: "A-02",
    level: "P0",
    type: "授权",
    object: "账户绑定",
    reason: "账户未绑定，MCC / CID 为空",
    suggestion: "完成授权（入口未开放）",
    status: "未配置",
    statusTone: "warn",
    time: "2026-08-14 08:40",
  },
  {
    id: "A-03",
    level: "P0",
    type: "消耗",
    object: "非品牌搜索",
    reason: "高消耗低转化（转化未测）",
    suggestion: "下调日预算提案",
    status: "待入审",
    statusTone: "warn",
    time: "2026-08-14 08:05",
  },
  {
    id: "A-04",
    level: "P1",
    type: "搜索词",
    object: "cheap / free / job",
    reason: "搜索词空耗",
    suggestion: "添加否定词提案",
    status: "提案中",
    statusTone: "warn",
    time: "2026-08-13 21:18",
  },
  {
    id: "A-05",
    level: "P1",
    type: "落地页",
    object: "/pricing",
    reason: "页面与广告诉求可能不匹配",
    suggestion: "复核落地页（速度未测）",
    status: "观察",
    statusTone: "muted",
    time: "2026-08-13 18:02",
  },
  {
    id: "A-06",
    level: "P1",
    type: "出价",
    object: "品牌计划",
    reason: "CPC 抬升，转化信号缺失",
    suggestion: "出价系数提案",
    status: "本周",
    statusTone: "muted",
    time: "2026-08-13 11:40",
  },
  {
    id: "A-07",
    level: "P2",
    type: "创意",
    object: "RSA #04",
    reason: "CTR 低于账户中位",
    suggestion: "新标题进入人审队列",
    status: "观察",
    statusTone: "muted",
    time: "2026-08-12 16:22",
  },
  {
    id: "A-08",
    level: "P2",
    type: "受众",
    object: "In-market SaaS",
    reason: "受众重叠，观察投放",
    suggestion: "收窄或改为观察",
    status: "观察",
    statusTone: "muted",
    time: "2026-08-12 10:08",
  },
  {
    id: "A-09",
    level: "P2",
    type: "设备",
    object: "Mobile",
    reason: "移动 CPC 偏高",
    suggestion: "设备系数提案",
    status: "提案中",
    statusTone: "warn",
    time: "2026-08-11 19:33",
  },
  {
    id: "A-10",
    level: "P3",
    type: "时段",
    object: "周末",
    reason: "周末点击稀、转化未测",
    suggestion: "时段观察，不自动启停",
    status: "本周",
    statusTone: "muted",
    time: "2026-08-11 09:00",
  },
  {
    id: "A-11",
    level: "P3",
    type: "地域",
    object: "Tier-2 geos",
    reason: "量级偏薄",
    suggestion: "保持观察",
    status: "观察",
    statusTone: "muted",
    time: "2026-08-10 15:41",
  },
  {
    id: "A-12",
    level: "P3",
    type: "质量度",
    object: "QS < 5 词",
    reason: "相关性与落地页未测",
    suggestion: "先改创意提案",
    status: "本周",
    statusTone: "muted",
    time: "2026-08-10 11:16",
  },
];

export type BudgetProposal = {
  id: string;
  title: string;
  level: Priority;
  current: string;
  suggested: string;
  why: string;
};

export const BUDGET_PROPOSALS: BudgetProposal[] = [
  {
    id: "B-01",
    title: "非品牌搜索日预算",
    level: "P0",
    current: "$420 / 天",
    suggested: "$260 / 天",
    why: "转化未回传时继续放量只会放大空耗。提案只写入变更单，不改线上预算。",
  },
  {
    id: "B-02",
    title: "移动设备出价系数",
    level: "P1",
    current: "+20%",
    suggested: "-15%",
    why: "移动 CPC $0.51（示例）高于 PC，落地页速度未测，先降系数观察。",
  },
  {
    id: "B-03",
    title: "品牌防护日预算",
    level: "P1",
    current: "$80 / 天",
    suggested: "$120 / 天",
    why: "品牌词需保住位置；上调仍须人审确认，本页不会自动加预算。",
  },
];

export const KEYWORDS = [
  { term: "overseas seo tool", match: "精确", qs: "未测", spend: "$486", clicks: "612", status: "观察", sample: true },
  { term: "google ads agency cheap", match: "广泛", qs: "未测", spend: "$318", clicks: "904", status: "待否定", sample: true },
  { term: "free ai seo", match: "短语", qs: "未测", spend: "$204", clicks: "771", status: "待否定", sample: true },
  { term: "g-snipers", match: "精确", qs: "未测", spend: "$62", clicks: "140", status: "品牌防护", sample: true },
  { term: "multilingual seo platform", match: "短语", qs: "未测", spend: "$255", clicks: "388", status: "提案中", sample: true },
];

export const NEGATIVE_PROPOSALS = [
  { term: "cheap", why: "求廉搜索，与产品客单不匹配" },
  { term: "free", why: "免费意向，转化路径未测" },
  { term: "job / jobs / career", why: "招聘流量" },
  { term: "download", why: "非询盘意图" },
];

export const CREATIVES = [
  {
    id: "RSA-01",
    campaign: "非品牌-搜索",
    ctr: "3.1%",
    status: "观察",
    headlines: ["出海 SEO 工作台", "三条链一次盯完", "洞察只投喂不空转"],
    note: "主创意，数字为示例。",
  },
  {
    id: "RSA-04",
    campaign: "非品牌-搜索",
    ctr: "1.2%",
    status: "待优化",
    headlines: ["最好的海外广告工具", "一键提升 Google 排名", "免费试用 SEM"],
    note: "CTR 偏低且承诺过满，建议换成可核验卖点后人审。",
  },
  {
    id: "RSA-07",
    campaign: "品牌-搜索",
    ctr: "8.4%",
    status: "稳定",
    headlines: ["G-Snipers 海外版", "官方 SEM / SEO 工作台", "人审后才改线上"],
    note: "品牌词创意，保持官方口径。",
  },
];

export const AUDIENCES = [
  { name: "In-market · Marketing SaaS", type: "市场内", bid: "观察 +10%", note: "重叠未测，不自动加码" },
  { name: "Affinity · SMB Owners", type: "兴趣", bid: "观察", note: "搜索计划建议只观察" },
  { name: "再营销 · 定价页 30 日", type: "再营销", bid: "未配置", note: "像素 / 转化未测，名单为空" },
  { name: "客户匹配 · CRM", type: "客户匹配", bid: "未配置", note: "未上传名单，禁止假装有种子用户" },
];

export const ASSETS = [
  { kind: "站点链接", name: "产品 / 定价 / 案例 / 登录", status: "示例结构", extra: "未测展示份额" },
  { kind: "宣传语", name: "人审后改线上 · 未测不编造", status: "草稿", extra: "未同步到 Ads" },
  { kind: "结构化摘要", name: "能力: 站内 / GEO / 外链", status: "示例", extra: "未配置账户" },
  { kind: "图片资产", name: "深色工作台截图 × 4", status: "本地占位", extra: "未上传" },
];

export const CAMPAIGNS = [
  {
    name: "品牌-搜索",
    status: "只读 · 示例",
    spend: "$412",
    children: [
      { name: "品牌核心", status: "只读", spend: "$288" },
      { name: "品牌竞品", status: "只读", spend: "$124" },
    ],
  },
  {
    name: "非品牌-搜索",
    status: "只读 · 示例",
    spend: "$2,410",
    children: [
      { name: "核心词", status: "只读", spend: "$1,120" },
      { name: "竞品词", status: "只读", spend: "$640" },
      { name: "泛词", status: "只读 · 空耗观察", spend: "$650" },
    ],
  },
  {
    name: "展示-再营销",
    status: "状态未测",
    spend: "—",
    children: [{ name: "定价页访客", status: "未配置", spend: "—" }],
  },
];

export const LANDING_PAGES = [
  { url: "https://example.com/", intent: "首页", speed: "未测", match: "未测", note: "未接 PageSpeed / Ads 落地页报告" },
  { url: "https://example.com/pricing", intent: "定价", speed: "未测", match: "待核", note: "与非品牌广告诉求需人工核对" },
  { url: "https://example.com/login", intent: "登录", speed: "未测", match: "不宜作搜索落地", note: "避免把获客词指到登录页" },
];

export const CONVERSIONS = [
  { name: "表单提交", type: "主要", status: "未配置", window: "—", count: "—" },
  { name: "预约演示", type: "主要", status: "未测", window: "—", count: "—" },
  { name: "加购 / 注册", type: "次要", status: "未配置", window: "—", count: "—" },
  { name: "增强转化", type: "增强", status: "未配置", window: "—", count: "—" },
];

export const STRATEGIES = [
  {
    title: "转化未回传时禁用智能出价自动应用",
    level: "P0" as const,
    body: "没有稳定转化信号时，Maximize conversions / tCPA 容易乱花。本原型关闭自动应用。",
  },
  {
    title: "先收窄空耗，再谈放量",
    level: "P1" as const,
    body: "否定词与非品牌预算下调进入人审队列。策略卡不是线上开关。",
  },
  {
    title: "品牌与非品牌分预算",
    level: "P2" as const,
    body: "品牌防护单独看；非品牌在转化未测期间按消耗纪律收缩。",
  },
];

export const REPORTS = [
  { name: "每日盯盘摘要", range: "近 7 天", status: "可本地生成", note: "数字均为示例，不含真实消耗" },
  { name: "空耗搜索词", range: "近 7 天", status: "示例", note: "待人审否定词清单" },
  { name: "创意 CTR 对照", range: "近 30 天", status: "示例", note: "无 Ads API 拉取" },
  { name: "授权与转化体检", range: "当前", status: "未配置 / 未测", note: "不生成虚假健康分" },
];

export const AUTH_FIELDS = [
  { k: "渠道", v: "Google Ads" },
  { k: "MCC", v: "未绑定" },
  { k: "CID", v: "未绑定" },
  { k: "登录邮箱", v: "未授权" },
  { k: "权限范围", v: "未授予" },
  { k: "Token 有效期", v: "—" },
  { k: "最近同步", v: "从未" },
];

export const AUTH_CHECKLIST = [
  { n: 1, text: "配置 Google Ads API / OAuth 客户端", status: "未配置" },
  { n: 2, text: "绑定 MCC 或单个 CID，并完成只读核验", status: "未测" },
  { n: 3, text: "拉取消耗、点击、转化（转化未回传则标未测）", status: "未测" },
  { n: 4, text: "开放授权入口（避免空链跳转）", status: "阻塞中" },
];
