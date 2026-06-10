export interface Character {
  name: string;
  role: string;
  desc: string;
  img: string;
  alt: string;
  tags: string[];
}

export const characters: Character[] = [
  {
    name: "LABUBU",
    role: "淘气明星 · 女主角",
    desc: "整个系列最著名的主角！尖耳朵、毛茸茸的身体和标志性的九颗锯齿牙。乐于助人但经常帮倒忙，内心善良却总爱恶作剧。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG1.png",
    alt: "LABUBU - 淘气精灵女主角",
    tags: ["女生", "九颗锯齿牙", "无尾巴"],
  },
  {
    name: "ZIMOMO",
    role: "温柔领袖 · 大家长",
    desc: "The Monsters 部落的首领，体型是 Labubu 的两倍大。冷静、温和、内敛，用宽厚的肩膀为所有成员遮风挡雨，是家族中最可靠的守护者。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG6.png",
    alt: "ZIMOMO - 部落首领",
    tags: ["男生", "尖刺尾巴", "部落首领"],
  },
  {
    name: "MOKOKO",
    role: "粉色特别精灵 · 最稀有",
    desc: "天生粉色毛发、白色肚皮、卷翘睫毛和桃心形鼻子。仅在北京 Pop Land 主题乐园发售，某次发售12分钟内即告罄。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG44.png",
    alt: "MOKOKO - 粉色稀有精灵",
    tags: ["女生", "心形鼻子", "超稀有"],
  },
  {
    name: "TYCOCO",
    role: "骷髅乐天派 · Labubu男友",
    desc: "Labubu 的男朋友，一个骷髅外形的素食主义者。对 Labubu 无限包容，即使她的恶作剧有点过火也从不生气。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG41.png",
    alt: "TYCOCO - 骷髅男友",
    tags: ["男生", "骷髅外形", "素食主义"],
  },
  {
    name: "SPOOKY",
    role: "好奇雪人 · 夜游精灵",
    desc: "住在森林深处的雪人精灵，头部因独特的褶皱被形容为像饺子一样。只在夜间出没，害怕阳光却又爱凑热闹。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG46.png",
    alt: "SPOOKY - 雪人精灵",
    tags: ["雪人", "夜间出没", "饺子头"],
  },
  {
    name: "PATO",
    role: "垂耳梦想家 · 紫皮精灵",
    desc: "家族中的乐观梦想家，标志性的大大下垂耳朵和紫色皮肤。爱幻想，经常冒出各种鬼点子，总能给大家带来欢笑。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG32.png",
    alt: "PATO - 垂耳梦想家",
    tags: ["垂耳", "紫色皮肤", "爱幻想"],
  },
  {
    name: "PIPPO",
    role: "河流精灵 · 派对达人",
    desc: "住在河道里的自由精灵，有一对向两侧伸展的大耳朵。幽默风趣、热爱派对，经常邀请 Labubu 们参加酒会。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG43.png",
    alt: "PIPPO - 河流派对精灵",
    tags: ["大耳朵", "爱派对", "河流精灵"],
  },
  {
    name: "YAYA",
    role: "深山迷路精灵 · 探险家",
    desc: "居住于深山中的精灵，头顶尖尖的犄角。精力无限、天真可爱，却是个十足的路痴。一次误打误撞走进 Labubu 村庄后便决定留下。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG37.png",
    alt: "YAYA - 迷路探险家",
    tags: ["尖犄角", "路痴", "探险家"],
  },
  {
    name: "VOS",
    role: "社交达人 · Tycoco表哥",
    desc: "Tycoco 的表哥，外形像毛茸茸的小熊。性格活泼好动、喜欢社交，认识森林里每一个生物，是大家公认的消息灵通人士。",
    img: "https://pngimg.com/uploads/labubu/labubu_PNG38.png",
    alt: "VOS - 社交小熊",
    tags: ["熊状", "外向", "Tycoco表哥"],
  },
];

export interface Series {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  count: string;
  price: number;
  tag: string;
  tagClass: string;
  desc: string;
  img: string;
}

export const seriesData: Series[] = [
  { id: 1, name: "Fall in Wild", nameEn: "LABUBU Fall in Wild", category: "new", count: "12款 + 隐藏款", price: 69, tag: "新品", tagClass: "tag-new", desc: "LABUBU 的野外冒险系列，探索北欧森林深处。", img: "https://pngimg.com/uploads/labubu/labubu_PNG22.png" },
  { id: 2, name: "心动马卡龙", nameEn: "LABUBU Exciting Macaron", category: "classic", count: "12款 + 隐藏款", price: 59, tag: "经典", tagClass: "tag-classic", desc: "柔和的马卡龙配色，每一只都像一个甜美的梦。", img: "https://pngimg.com/uploads/labubu/labubu_PNG29.png" },
  { id: 3, name: "Hello Kitty 联名", nameEn: "LABUBU x Hello Kitty", category: "collab", count: "12款 + 隐藏款", price: 89, tag: "联名", tagClass: "tag-collab", desc: "LABUBU 与 Hello Kitty 的跨界奇遇，可爱加倍！", img: "https://pngimg.com/uploads/labubu/labubu_PNG30.png" },
  { id: 4, name: "美食诱惑", nameEn: "LABUBU Tasty Series", category: "classic", count: "12款 + 隐藏款", price: 59, tag: "经典", tagClass: "tag-classic", desc: "以世界各地美食为灵感，每一口都是惊喜。", img: "https://pngimg.com/uploads/labubu/labubu_PNG16.png" },
  { id: 5, name: "Zimomo 十周年", nameEn: "Zimomo 10th Anniversary", category: "limited", count: "限定款", price: 129, tag: "限定", tagClass: "tag-limited", desc: "庆祝 Zimomo 诞生十周年的特别限定款。", img: "https://pngimg.com/uploads/labubu/labubu_PNG19.png" },
  { id: 6, name: "森林童话", nameEn: "LABUBU Forest Fairy Tale", category: "new", count: "12款 + 隐藏款", price: 69, tag: "新品", tagClass: "tag-new", desc: "走进精灵森林的童话世界，与 LABUBU 一起冒险。", img: "https://pngimg.com/uploads/labubu/labubu_PNG25.png" },
  { id: 7, name: "万圣节南瓜", nameEn: "LABUBU Halloween Pumpkin", category: "limited", count: "限定款", price: 89, tag: "限定", tagClass: "tag-limited", desc: "万圣节特别限定款，Spooky 也会爱上的南瓜精灵。", img: "https://pngimg.com/uploads/labubu/labubu_PNG14.png" },
  { id: 8, name: "可口可乐联名", nameEn: "LABUBU x Coca-Cola", category: "collab", count: "12款 + 隐藏款", price: 79, tag: "联名", tagClass: "tag-collab", desc: "LABUBU 与可口可乐的跨界奇遇，快乐冒泡！", img: "https://pngimg.com/uploads/labubu/labubu_PNG15.png" },
];

export interface ForestScene {
  icon: string;
  title: string;
  text: string;
  color: string;
}

export const forestScenes: ForestScene[] = [
  { icon: "fa-home", title: "蘑菇小屋", text: "Labubu 们住在森林深处的蘑菇小屋里，屋顶上长满青苔，烟囱里飘出甜甜的烤面包香气。清晨，露珠会顺着蘑菇伞滑落到窗台——那是精灵们最喜爱的天然闹钟。", color: "var(--gold)" },
  { icon: "fa-seedling", title: "梦幻花园", text: "在森林的边缘，有一片永远绽放着花朵的秘密花园。Mokoko 最喜欢在这里跳舞，她的脚步所及之处，花朵会随之绽放。", color: "var(--forest-light)" },
  { icon: "fa-cloud", title: "棉花糖云海", text: "每当夕阳西下，森林上方的云海会变成棉花糖般的粉色。Zimomo 会带着大家爬上最高的树顶，一边看日落一边分享森林里最新鲜的浆果。", color: "var(--gold-pale)" },
  { icon: "fa-cookie-bite", title: "甜品工坊", text: "Tycoco 的甜品工坊是森林里最受欢迎的地方。虽然他是个骷髅，但做出的马卡龙和焦糖布丁却是最棒的！每个精灵都会带着自己采集的食材来交换甜品。", color: "var(--wood-light)" },
  { icon: "fa-star", title: "星空许愿池", text: "森林深处有一口古老的许愿池，传说在满月之夜投下一片落叶，愿望就会实现。Labubu 每次都会许同一个愿望——希望所有的精灵都能永远快乐地生活在一起。", color: "var(--gold)" },
  { icon: "fa-music", title: "精灵音乐会", text: "每月一次的森林音乐会是最盛大的聚会。Pippo 负责打鼓，Pato 吹奏他自制的长笛，Yaya 唱歌虽然有点跑调但大家都爱听——这是属于精灵们最快乐的时刻。", color: "var(--gold-pale)" },
];

export interface CommunityReview {
  name: string;
  location: string;
  date: string;
  text: string;
  stars: string;
  ariaLabel: string;
  avatar: string;
  images: string[];
}

export const communityReviews: CommunityReview[] = [
  {
    name: "Mika Tanaka",
    location: "东京",
    date: "2026.05",
    text: "在东京银座泡泡玛特门店看到了 LABUBU，一眼就爱上了！做工精致，配色高级，和朋友一起买了好多盒，每次都有惊喜！",
    stars: "fas fa-star fa-star fa-star fa-star fa-star",
    ariaLabel: "5星评价",
    avatar: "https://pngimg.com/uploads/labubu/labubu_PNG3.png",
    images: [
      "https://pngimg.com/uploads/labubu/labubu_PNG7.png",
      "https://pngimg.com/uploads/labubu/labubu_PNG8.png",
    ],
  },
  {
    name: "Sarah Lee",
    location: "首尔",
    date: "2026.05",
    text: "Macaron 系列是我的入坑款，粉粉嫩嫩的配色太治愈了！放在桌上每次看到都会微笑。LABUBU 就是快乐本身！",
    stars: "fas fa-star fa-star fa-star fa-star fa-star-half-alt",
    ariaLabel: "4.5星评价",
    avatar: "https://pngimg.com/uploads/labubu/labubu_PNG4.png",
    images: [
      "https://pngimg.com/uploads/labubu/labubu_PNG9.png",
      "https://pngimg.com/uploads/labubu/labubu_PNG10.png",
      "https://pngimg.com/uploads/labubu/labubu_PNG11.png",
    ],
  },
  {
    name: "Emma Chen",
    location: "上海",
    date: "2026.04",
    text: "第一次拆盲盒就抽到了隐藏款！那种心跳加速的感觉太棒了。现在家里已经摆满了各种 LABUBU，每天回家看到它们心情都变好了。",
    stars: "fas fa-star fa-star fa-star fa-star fa-star",
    ariaLabel: "5星评价",
    avatar: "https://pngimg.com/uploads/labubu/labubu_PNG5.png",
    images: [
      "https://pngimg.com/uploads/labubu/labubu_PNG12.png",
      "https://pngimg.com/uploads/labubu/labubu_PNG13.png",
    ],
  },
];
