const plots = [
  {
    case: "云霄飞车杀人事件",
    japanese: "ジェットコースター殺人事件",
    datetime: "1996-01-08",
    content: "工藤新一目睹黑衣组织琴酒，伏特加交易，被灌下毒药变成了小孩，黑暗组织成员琴酒和伏特加初登场。元太、光彦、步美初登场。",
    japan_episode: "001",
    oversea_episode: "001",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x00174aq5no.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321808"
  },
  {
    case: "董事长千金诱拐事件",
    japanese: "社長令嬢誘拐事件",
    datetime: "1996-01-15",
    content: "阿笠博士知道他的身份，工藤新一化名为江户川柯南（知晓其身份第 1 人）",
    japan_episode: "002",
    oversea_episode: "002",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/w0017mxh0c4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321809"
  },
  {
    case: "江户川柯南诱拐事件",
    japanese: "江戸川コナン誘拐事件",
    datetime: "1997-01-13",
    content: "父母知道其变小（知晓其身份第 2、3 人），柯南不想离开日本的理由是因为小兰。",
    japan_episode: "043",
    oversea_episode: "044",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/q00175e13b4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321851"
  },
  {
    case: "外交官杀人事件（前、后篇）",
    japanese: "外交官殺人事件（前、後編）",
    datetime: "1997-02-17/1997-02-24",
    content: "平次登场，柯南喝白干，工藤新一第 1 次恢复（后面让灰原也喝了白干）",
    japan_episode: "048-049",
    oversea_episode: "049-050",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x0017gmwxhm.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321856"
  },
  {
    case: "游戏公司杀人事件",
    japanese: "ゲーム会社殺人事件",
    datetime: "1997-04-14",
    content: "黑衣组织成员龙舌兰出场，被炸死，提到了组织似乎是在收集电脑程式设计师的名单，与 307-308 无声的证据相连接",
    japan_episode: "054",
    oversea_episode: "056",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/f0017abt7al.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321863"
  },
  {
    case: "福尔摩斯迷杀人事件",
    japanese: "ホームズフリーク殺人事件（前、後編）",
    datetime: "1997-05-05/1997-05-12",
    content: "服部平次判断出柯南就是工藤新一，二人成挚友。（知晓其身份第 4 人）",
    japan_episode: "057-058",
    oversea_episode: "059-060",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/z0017aqojnx.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321866"
  },
  {
    case: "黑暗组织10亿元抢劫事件",
    japanese: "黒の組織10億円強奪事件",
    datetime: "1998-12-14",
    content: "广田雅美（宫野明美）死亡，临死前告知其自己真实身份（知晓其身份第 5 人）黑衣组织浮出水面，关于黑暗组织很重要的一集，引出下一集同样服下毒药变成灰原哀的宫野志保。",
    japan_episode: "128",
    oversea_episode: "135",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/v0019fnvdkq.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321942"
  },
  {
    case: "来自黑暗组织的女子 大学教授杀人事件【2小时特别篇】",
    japanese: "黒の組織から来た女　大学教授殺人事件",
    datetime: "1999-01-04",
    content: "超人气偶像灰原哀的登场，组织代号“雪莉”，说出药名是APTX4869。哀趴在柯南身上哭得声嘶力竭，这大概是哀最本色的时候。值得关注点：灰原开枪射击，酷到极点。故事结尾，灰原带着一丝让人琢磨不透的微笑对柯南说：看来我们要相处很长一段日子了，江户川君，柯南则是警惕的瞪视灰原。伴奏音乐响起，两人相对而立，背景是 Gin 和 Vodka 的巨大身影。顿时整个画面给人一种柯南和灰原双雄对决的气氛，感觉特别好！",
    japan_episode: "129",
    oversea_episode: "136-139",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e0019bdn82b.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321943"
  },
  {
    case: "竞技场无差别胁迫事件（前、后篇）【*】",
    japanese: "競技場無差別脅迫事件（前、後編）",
    datetime: "1999-01-11/1999-01-18",
    content: "故事内容和主线情节无关，但结尾灰原突然冒出的一句话曾让人迷浮想联翩：“工藤，我想你从来没想过吧，半世纪前你已经在我们组织进行的秘密计划中了。这究竟是怎么一回事？半个世纪前优作大概都没出生呢！",
    japan_episode: "130-131",
    oversea_episode: "140-141",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i00193hqig8.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321947"
  },
  {
    case: "黑暗中的死角（前、后篇）",
    japanese: "暗闇の中の死角（前、後編）",
    datetime: "1999-11-29/1999-12-06",
    content: "新一与小兰，毛利与妃英理的情感花絮。柯南吃醋小兰，小兰回忆新一小时候，小兰送新一毛衣。重要人物新出医生初登场。案情初看没什么，却为345与黑衣组织直面对决埋下了大伏笔",
    japan_episode: "170-171",
    oversea_episode: "181-182",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e0019purndd.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321988"
  },
  {
    case: "与黑暗组织的再会（灰原、柯南、解决篇）",
    japanese: "黒の組織との再会（灰原、コナン、解決編）",
    datetime: "2000-01-17/2000-01-24/2000-01-31",
    content: "柯哀重头戏，黑衣组织皮斯克发现灰原哀就是宫野志保，但被琴酒灭口。灰原哀被皮斯克关进小黑屋，灰原听了柯南的话喝了白干变回了宫野志保从壁橱爬出（变大后柯南问她有没有穿衣服，被骂色狼，哈哈哈，柯南你个撩妹狂魔），被 Gin 打了 N 枪，但未伤及要害，又从壁橱跳了回去，可怜的孩，呜呜呜。",
    japan_episode: "176-178",
    oversea_episode: "190-192",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x0019mitvaw.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep321997"
  },
  {
    case: "危命的复活 洞窟中的侦探团",
    japanese: "命がけの復活 洞窟の探偵団",
    datetime: "2000-05-01",
    content: "",
    japan_episode: "188",
    oversea_episode: "203",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d00190ahu1c.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322010"
  },
  {
    case: "危命的复活 负伤的名侦探",
    japanese: "命がけの復活 負傷した名探偵",
    datetime: "2000-05-08",
    content: "",
    japan_episode: "189",
    oversea_episode: "204",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/j0019wilz6p.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322011"
  },
  {
    case: "危命的复活 第三种选择",
    japanese: "命がけの復活 第三の選択",
    datetime: "2000-05-15",
    content: "工藤新一第 2 次恢复",
    japan_episode: "190",
    oversea_episode: "205",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d0019ja03he.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322012"
  },
  {
    case: "危命的复活 黑衣骑士",
    japanese: "命がけの復活 黒衣の騎士",
    datetime: "2000-05-22",
    content: "",
    japan_episode: "191",
    oversea_episode: "206",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/c00193qtlmg.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322013"
  },
  {
    case: "危命的复活 归来的新一…",
    japanese: "命がけの復活 帰ってきた新一…",
    datetime: "2000-05-29",
    content: "",
    japan_episode: "192",
    oversea_episode: "207",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0019heoz1d.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322014"
  },
  {
    case: "危命的复活 约定的场所",
    japanese: "命がけの復活 約束の場所",
    datetime: "2000-06-05",
    content: "",
    japan_episode: "193",
    oversea_episode: "208",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e0019ltbg2n.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322015"
  },
  {
    case: "人鱼失踪记（事件、推理、解决篇）【*】",
    japanese: "そして人魚はいなくなった（事件、推理、解决編）",
    datetime: "2001-01-29/2000-02-05/2000-02-12",
    content: "提到了宫野志保，暗示灰原的研究与长生不老有关。",
    japan_episode: "222-224",
    oversea_episode: "241-243",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/l0019raz098.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322048"
  },
  {
    case: "战斗游戏的陷阱（前、后篇）",
    japanese: "バトルゲームの罠（前、後編）",
    datetime: "2001-02-26/2001-03-05",
    content: "朱蒂登场，称呼柯南为Cool guy？？",
    japan_episode: "226-227",
    oversea_episode: "245-246",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/a0019ka2p2s.html",
    bilibili_link: "https://https://www.bilibili.com/bangumi/play/ep322052"
  },
  {
    case: "谜一样的乘客（前、后篇）",
    japanese: "謎めいた乗客（前、後編）",
    datetime: "2001-04-16/2000-04-23",
    content: "赤井秀一登场，灰原感觉到汽车上有强烈的组织成员气息。车中炸弹要爆炸时，灰原仍然没有逃走，她想就此结束自己的生命。此时柯南再次出现，用灭火器砸碎了车窗，并且在炸弹爆炸前的一秒中抱起灰原跳出窗外，被炸弹的冲击波推出老远。",
    japan_episode: "230-231",
    oversea_episode: "249-250",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e001978st74.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322056"
  },
  {
    case: "少年元太的灾难【*】",
    japanese: "元太少年の災難",
    datetime: "2001-07-16",
    content: "案情与主线无关，柯南知道了琴酒 GIN 是左撇子",
    japan_episode: "242",
    oversea_episode: "261",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/y0019ny9hkm.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322068"
  },
  {
    case: "陷入网中的谜团（前、后篇）【*】",
    japanese: "網にかかった謎（前、後編）",
    datetime: "2001-08-13、2000-08-20",
    content: "哀和兰握手",
    japan_episode: "246-247",
    oversea_episode: "265-266",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/v0019xn2css.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322072"
  },
  {
    case: "本厅刑事恋爱物语4（前、后篇）【*】",
    japanese: "本庁の刑事恋物語4（前、後編）",
    datetime: "2001-10-15/2000-10-22",
    content: "案件本身无意义。有两个值得注意的地方是，一是小兰在饭店里看到赤井秀一居然有似曾相识的感觉（原因见 工藤新一纽约事件 [286-288] ），二是柯南和新出合力扮演了高木警官，一个出身材和动作，一个出配音。柯南可能对新出的身份产生了怀疑，因为他注意到新出超强的模仿能力。新出医生可能也发现了柯南分析案情并利用变声器。（伏笔见 直面黑色组织的对决！满月之夜的二元神秘事件 [345]）",
    japan_episode: "253-254",
    oversea_episode: "272-273",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/s00195oo3m4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322079"
  },
  {
    case: "来自芝加哥的男人（前、后篇）",
    japanese: "シカゴから来た男（前、後編）",
    datetime: "2001-11-19/2000-11-26",
    content: "詹姆斯·布莱克登场，称呼柯南为福尔摩斯、Cool guy",
    japan_episode: "258-259",
    oversea_episode: "277-278",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i0019ygxeuy.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322084"
  },
  {
    case: "犯罪的纪念品（前、后篇）",
    japanese: "犯罪の忘れ形見（前、後編）",
    datetime: "2002-02-18/2000-03-04",
    content: "提到警察局关于毛利的案卷被偷一事",
    japan_episode: "269-270",
    oversea_episode: "291-292",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d00192r6c96.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322098"
  },
  {
    case: "急忙掩饰的忽略（前、后篇）",
    japanese: "隠して急いで省略（前、後編）",
    datetime: "2002-03-11/2000-03-18",
    content: "柯南被怀疑，形势危急",
    japan_episode: "271-272",
    oversea_episode: "293-294",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/c0019wxp48j.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322100"
  },
  {
    case: "英语教师vs西部名侦探（前、后篇）",
    japanese: "英語教師vs西の名探偵（前、後編）",
    datetime: "2002-05-13/2002-05-20",
    content: "柯南让博士调查克丽斯·温亚德",
    japan_episode: "277-278",
    oversea_episode: "299-300",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i00190c1gqh.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322106"
  },
  {
    case: "迷宫的足球流氓（前、后篇）【*】",
    japanese: "迷宮のフーリガン（前、後編）",
    datetime: "2002-05-27/2000-06-03",
    content: "这集哀说了很多话，主线情节只被带到了一点，柯哀对话值得一看。博士应柯南的要求去克里斯的网站上查过信息，发现她就是美国已故大明星莎隆.宾亚德的女儿。在母亲的葬礼上，面对记者的追问，克里斯曾神秘的回答道：A SECRET MAKES A WOMAN WOMAN（记住这句话，后面还会出现）。另外，有希子也出现在了莎隆的葬礼中，但是她的帽檐压的很低，所以美国的网站上显示当时并没有人认出有希子的身份，只是谣传说日本的前人气女明星也出席了葬礼。",
    japan_episode: "279-280",
    oversea_episode: "301-302",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/b0019mhiay9.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322108"
  },
  {
    case: "中华街 雨中的似曾相识（前、后篇）",
    japanese: "中華街　雨のデジャビュ（前、後編）",
    datetime: "2002-07-01/2000-07-08",
    content: "",
    japan_episode: "284-285",
    oversea_episode: "306-307",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/b0019l5erlv.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322113"
  },
  {
    case: "工藤新一纽约事件（事件、推理、解决篇）",
    japanese: "工藤新一NYの事件（事件、推理、解决編）",
    datetime: "2002-07-15/2002-07-22/2002-07-29",
    content: "知道克丽斯是美国已故大明星莎朗·温亚德的女儿。回忆事件：黑衣组织的贝尔摩德伪装成杀人魔，被FBI赤井秀一发现（小兰见到 FBI 赤井秀一），却被小兰和新一所救（伏笔 贝尔摩德不伤害新（柯）兰）。",
    japan_episode: "286-288",
    oversea_episode: "308-310",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/o0019csotva.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322115"
  },
  {
    case: "迷途森林中的光彦（前、后篇）【*】",
    japanese: "迷いの森の光彦（前、後編）",
    datetime: "2002-08-05/2002-08-12",
    content: "提到到灰原哀对组织气味已经不敏感，沼渊己一郎是组打算培养的杀手，却被其逃脱。最后沼渊再次被警方逮捕。",
    japan_episode: "289-290",
    oversea_episode: "311-312",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x001925xbu9.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322118"
  },
  {
    case: "被留下的无声的证言（前、后篇）",
    japanese: "残された声なき証言（前、後編）",
    datetime: "2003-01-27/2003-02-03",
    content: "得知龙舌兰生前信息，再次抓住黑暗组织的尾巴，为309-311提供背景资料，与 54 游戏公司杀人事件相连接",
    japan_episode: "307-308",
    oversea_episode: "332-333",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i0019w6pr1r.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322139"
  },
  {
    case: "与黑色组织的接触（交涉、追击、决死篇）",
    japanese: "黒の組織との接触（交渉、追跡、決死編）",
    datetime: "2003-02-10/2003-02-17/2003-02-24",
    content: "柯南、小兰路上偶遇赤井秀一。小兰告诉柯南秀一是FBI。柯南得知组织在雇佣电脑工程师编写一个神秘的系统软件；对板仓卓的日记进行详细研究，获得情报；追踪组织，险些被琴酒发现。灰原哀对赤井秀一有感觉。",
    japan_episode: "309-311",
    oversea_episode: "334-336",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d0019ljv92c.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322141"
  },
  {
    case: "夕阳染红的女儿节人偶（前、后篇）【*】",
    japanese: "夕陽に染まった雛人形（前、後編）",
    datetime: "2003-03-03/2003-03-10",
    content: "关于灰原哀的父母的过去，灰原哀说了关于夕阳的话",
    japan_episode: "312-313",
    oversea_episode: "337-338",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0019wztxyv.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322144"
  },
  {
    case: "金钱买不到的友情（前、后篇）",
    japanese: "お金で買えない友情（前、後編）",
    datetime: "2003-07-28/2003-08-04",
    content: "提到了灰原的父亲：宫野厚司。原来他是化学领域非常有名的科学家，被称为“被科学界放逐的疯狂科学家”，待人和气有礼，并且是阿笠博士的旧识。步美与灰原的双边关系达到新的高度。",
    japan_episode: "329-330",
    oversea_episode: "354-355",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/g0019nah2mf.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322161"
  },
  {
    case: "东都显影所的秘密（前、后篇）",
    japanese: "東都現像所の秘密（前、後編）",
    datetime: "2003-09-08/2003-09-15",
    content: "柯南、灰原被跟踪，山雨欲来，追踪者为秀一手下，跟踪失败。秀一对着灰原的照片说：真是像啊。",
    japan_episode: "335-336",
    oversea_episode: "360-361",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/l0019vdfhxx.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322167"
  },
  {
    case: "4辆保时捷（前、后篇）",
    japanese: "4台のポルシェ（前、後編）",
    datetime: "2003-10-20/2003-10-27",
    content: "茱蒂、赤井发现灰原与黑衣组织有联系，贝尔摩德在博士家安装窃听器，得知了灰原的身份",
    japan_episode: "338-339",
    oversea_episode: "363-364",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0019f5w5qt.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322170"
  },
  {
    case: "隐藏在厕所里的秘密（前、后篇）",
    japanese: "トイレに隠した秘密（前、後編）",
    datetime: "2003-11-03/2003-11-10",
    content: "博士找到哀的父母的线索，带着柯南和灰原去了解详情，却意外发现了她的姐姐明美藏在卫生间里的，小哀的母亲留给她的磁带",
    japan_episode: "340-341",
    oversea_episode: "365-366",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/u00190aqb84.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322172"
  },
  {
    case: "便利店的陷阱（前、后篇）",
    japanese: "コンビニの落とし穴（前、後編）",
    datetime: "2003-12-01/2003-12-08",
    content: "小兰发现朱蒂藏的照片，怀疑朱蒂（下一集小兰藏身朱蒂车后备箱，救了灰原哀）",
    japan_episode: "343-344",
    oversea_episode: "369-370",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/u001999nvyz.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322176"
  },
  {
    case: "与黑之组织直面对决　满月之夜的双重迷案【2个半小时特别篇】",
    japanese: "黒の組織と真っ向勝負　満月の夜の二元ミステリー",
    datetime: "2004-01-05",
    content: "（必看，柯南女装哈哈哈，都流行伪装）茱蒂老师、赤井、詹姆斯身份为FBI，贝尔摩德真实身份是工藤新一母亲有希子的好友沙朗，假装沙朗死亡的假象扮演成自己的女儿克里斯，为的是避免被拆穿自己不老的秘密。称柯南为cool guy（知晓其真实身份第 6 人）, 小兰为 angel, 并一直避免伤害他俩。之前一段时间一直扮演新出医生潜伏在柯南附近。她知道灰原哀也是吃药变小的。最后贝尔摩德对柯南承诺：放弃雪莉。",
    japan_episode: "345",
    oversea_episode: "371-375",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/t00197mvgcq.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322178"
  },
  {
    case: "寻找屁股上的印记（前、后篇）",
    japanese: "お尻のマークを探せ（前、後編）",
    datetime: "2004-01-12/2004-01-19",
    content: "上集事件扫尾，灰原哀拒绝茱蒂提出的证人保护计划",
    japan_episode: "346-347",
    oversea_episode: "376-377",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/p0019ql8ost.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322183"
  },
  {
    case: "沉默的航线（后篇）",
    japanese: "物言わぬ航路（後編）",
    datetime: "2004-08-30",
    content: "柯南对345集中贝尔摩德给Boss发邮件时的按键音有些奇怪的感觉",
    japan_episode: "372",
    oversea_episode: "403",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/p0019psuvh0.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322210"
  },
  {
    case: "星星和香烟的暗号（后篇）",
    japanese: "星と煙草の暗号（後編）",
    datetime: "2004-10-25",
    content: "柯南听到山村警官给他奶奶打电话的按键音和贝尔摩德的按键音相似，推测Boss在鸟取县",
    japan_episode: "375",
    oversea_episode: "406",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d00190k01et.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322213"
  },
  {
    case: "斯特拉迪瓦里小提琴的不和谐音（前奏、间奏、后奏曲）",
    japanese: "ストラディバリウスの不協和音（前奏、間奏、後奏曲）",
    datetime: "2005-01-24/2005-01-31/2005-02-07",
    content: "柯南发现组织Boss的邮件地址是《七个孩子》的旋律，关于贝尔摩多手机按键声的线索突破，主要在头和尾有涉及，同时案件也很精彩",
    japan_episode: "385-387",
    oversea_episode: "419-421",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/v0019ty1w15.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322226"
  },
  {
    case: "奇异屋宇大冒险（封印篇）",
    japanese: "奇抜な屋敷の大冒険（封印編）",
    datetime: "2005-04-18",
    content: "组织Boss的邮件地址被柯南破解。哀似乎有些了解Boss，警告柯南这个邮件地址是“潘多拉的魔盒”",
    japan_episode: "394",
    oversea_episode: "428",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0019x2i07c.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322235"
  },
  {
    case: "奇异屋宇大冒险（解决篇）",
    japanese: "奇抜な屋敷の大冒険（解决編）",
    datetime: "2005-05-02",
    content: "怪盗基德出场案件，在开头柯南推测出了黑暗组织BOSS的邮件地址。机关大师三水及右卫门的第一次杰作展现”",
    japan_episode: "396",
    oversea_episode: "430",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d00193nayh6.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322237"
  },
  {
    case: "心存疑惑的兰",
    japanese: "疑惑を持った蘭",
    datetime: "2005-05-30",
    content: "由于一次疏忽，引发小兰的大疑惑，柯南身份再次差点被揭穿，可怜又可爱的小兰",
    japan_episode: "400",
    oversea_episode: "434",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e0019q6cx5q.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322241"
  },
  {
    case: "宝石抢劫现行犯（前、后篇）",
    japanese: "宝石強盗現行犯（前、後編）",
    datetime: "2005-06-06/2005-06-13",
    content: "关于帮助柯南掩饰身份后柯南和灰原的对话，以及可怜的被由美利用的高木",
    japan_episode: "401-402",
    oversea_episode: "435-436",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/v00192ani84.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322242"
  },
  {
    case: "黑色的冲击！黑色组织魔爪伸来的瞬间【2个半小时特别篇】",
    datetime: "2006-01-09",
    japanese: "ブラックインパクト！組織の手が届く瞬間",
    content: "组织成员水无怜奈、基安蒂、科恩出场，暗杀任务被柯南、FBI阻止。烽烟再起。黑暗组织新成员出场，情节步入新进展，呼吸加速，最后对狙很精彩，主线情节",
    japan_episode: "425",
    oversea_episode: "459-463",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/z0019bbwfff.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322266"
  },
  {
    case: " 回不去的两人（前、后篇）",
    japanese: "もう戻れない二人（前、後編）",
    datetime: "2006-02-06/2006-02-13",
    content: "本堂瑛佑登场，让柯南疑惑十几集的人物。",
    japan_episode: "429-430",
    oversea_episode: "467-468",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/s0019p7oqr7.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322274"
  },
  {
    case: "黑衣组织的影子 年幼的目击者",
    japanese: "黒の組織の影　幼い目撃者",
    datetime: "2007-01-29",
    content: "本堂瑛佑行事奇妙，引起柯南注意。",
    japan_episode: "462",
    oversea_episode: "502",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e00192dw40m.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322309"
  },
  {
    case: "黑衣组织的影子 奇妙的照明",
    japanese: "黒の組織の影　奇妙な照明",
    datetime: "2007-02-05",
    content: "",
    japan_episode: "463",
    oversea_episode: "503",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/o0019idjdx6.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322310"
  },
  {
    case: "黑衣组织的影子 谜样的高额报酬",
    japanese: "黒の組織の影　謎の高額報酬",
    datetime: "2007-02-12",
    content: "",
    japan_episode: "464",
    oversea_episode: "504",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/u00198g82cu.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322311"
  },
  {
    case: "黑衣组织的影子 珍珠的流星",
    japanese: "黒の組織の影　真珠の流れ星",
    datetime: "2007-02-19",
    content: "结尾提到贝尔摩德的口头禅。",
    japan_episode: "465",
    oversea_episode: "505",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x0019qxl9ga.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322312"
  },
  {
    case: "坚不可摧的雪人（前、后篇）",
    japanese: "割れない雪だるま（前、後編）",
    datetime: "2007-02-26/2007-03-05",
    content: "本堂瑛佑相关案件，而且在开头柯南推测到组织已经知道组织成员水无怜奈受伤住院的事实。",
    japan_episode: "466-467",
    oversea_episode: "506-507",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/h0019sqbcbm.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322313"
  },
  {
    case: "黑色照片的行踪（前、后篇）",
    japanese: "黒い写真の行方（前、後編）",
    datetime: "2007-08-20/2007-08-27",
    content: "找到本堂瑛佑的父亲的照片。",
    japan_episode: "484-485",
    oversea_episode: "527-528",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/s0019tcfqi5.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322334"
  },
  {
    case: "红与黑的碰撞（开端、血缘、疾呼、冥土、昏睡、侵入、觉醒、扰乱、伪装、遗言、嫌疑、洁白、决死、殉职）",
    japanese: "赤と黒のクラッシュ（発端、血縁、絶叫、冥土、昏睡、侵入、覚醒、攪亂、偽裝、遺言、嫌疑、潔白、決死、殉職）",
    datetime: "2008-01-14/.../2008-05-19",
    content: "女主播水无玲奈被FBI发现是黑衣组织的Kir, 受伤昏迷后被保护起来了。期间小兰同班同学本堂瑛佑在找失踪的姐姐，确认了水无玲奈就是其姐姐本堂瑛海。而水无玲奈真实身份是CIA探员。黑衣组织抢回水无玲奈，并命令其枪杀赤井秀一。赤井秀一疑似死亡。",
    japan_episode: "491-504",
    oversea_episode: "538-551",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i0019rqf88r.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322345"
  },
  {
    case: "卡拉OK包房的死角（前、后篇）",
    japanese: "カラオケボックスの死角（前、後編）",
    datetime: "2008-06-30/2008-07-07",
    content: "本堂瑛佑推断出柯南真实身份（知晓其真实身份第 7 人）。当他说FBI发生了事情时，柯南一边笑，一边说：嗯，没事。使赤井之死显得更加神秘。",
    japan_episode: "507-508",
    oversea_episode: "554-555",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/o0019eubhpy.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322361"
  },
  {
    case: "红白黄色与侦探团",
    japanese: "赤白黄色と探偵団",
    datetime: "2008-07-14",
    content: "水无玲奈透露黑衣组织的波本开始行动，专门调查雪莉。冲矢昴出场，灰原哀从其身上感受到黑衣组织的气息。",
    japan_episode: "509",
    oversea_episode: "556",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e0019xchgqf.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322363"
  },
  {
    case: "真正想问的事",
    japanese: "本当に聞きたいコト",
    datetime: "2009-02-02",
    content: "服部平次继续出场，工藤新一第 3 次恢复。在此次案件中柯南变回了新一，在第二个案件中更是柯南首次以新一的身份和服部同时出场解决案子哦，当然的最后柯南和小兰的感情又一次经受考验。",
    japan_episode: "523",
    oversea_episode: "574",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/n00199dtjyl.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322381"
  },
  {
    case: "侦探团VS劫匪团（骚动、沉默）",
    japanese: "探偵団VS強盗団（騒然、沈黙）",
    content: "伤疤“赤井”登场，还有FBI成员也有出场。回忆秀一潜入组织前与茱蒂分手。与脸上有烧伤、疑似秀一的人登场。茱蒂被卷入强盗案。“伤疤男”自始至终没有说话，最后右手开枪救了柯南。少年侦探团知道茱蒂身份。",
    datetime: "2010-01-23/2010-01-30",
    japan_episode: "563-564",
    oversea_episode: "614-615",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/f0019vfb3zl.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322421"
  },
  {
    case: "召唤危机的红色预兆",
    japanese: "危機呼ぶ赤い前兆",
    content: "侦探团说道银行抢案中看到类似秀一的人物，柯南大吃一惊。FBI在寻找秀一；冲矢昴也出现在米花百货商厦。",
    datetime: "2010-06-26",
    japan_episode: "578",
    oversea_episode: "629",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x0019hj5pp4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322436"
  },
  {
    case: "黑色13的提示",
    japanese: "黒き13の暗示",
    content: "疑似秀一的男子和冲矢昴同时出现。商厦遭炸弹劫持，局势再次混乱，赤井之死遭疑。",
    datetime: "2010-07-03",
    japan_episode: "579",
    oversea_episode: "630",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/j0019pi6cm3.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322437"
  },
  {
    case: "迫近的黑之时限",
    japanese: "迫る黒の刻限",
    content: "基尔被怀疑身份，琴酒准备让基安蒂狙击疑似秀一的人。",
    datetime: "2010-07-10",
    japan_episode: "580",
    oversea_episode: "631",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/l00198g9rdu.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322438"
  },
  {
    case: "摇曳的红色目标",
    japanese: "赤く揺れる照準",
    content: "冲矢昴称组织为“笨狼”，对柯南似乎很了解，言语中好像对柯南传递了某些信息似的。“伤疤男”对着狙击枪轻蔑的一笑。贝尔摩德传达Boss指令，琴酒下令撤退，并似乎不再对基尔表示怀疑。“伤疤男”是否为真秀一被质疑。黑暗组织剧情，冲矢昴与伤疤“赤井”同台登场案件。开头有提到赤木英雄和比护隆佑。",
    datetime: "2010-07-17",
    japan_episode: "581",
    oversea_episode: "632",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/m00192gtpuh.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322439"
  },
  {
    case: "福尔摩斯之默示录（0 is Start）",
    japanese: "ホームズの黙示録（0〈ゼロ〉is Start）",
    datetime: "2011-06-25",
    content: "工藤新一第 4 次恢复，工藤新一第一次向小兰正面表白。",
    japan_episode: "621",
    oversea_episode: "672",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/t0019yuvhtx.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322479"
  },
  {
    case: "幽灵旅馆的推理对决（前、后篇）",
    japanese: "幽霊ホテルの推理対決（前、後編）",
    datetime: "2012-02-18/2012-02-25",
    content: "世良真纯登场，似乎对“新一”的名字有耳闻，之后转到小兰班上高中生女侦探，似乎认识新一。世良来侦探事务所打听柯南信息，柯南感觉她可能很像自己认识的某个人。侦探事务所遭炸弹劫持，事态危急。",
    japan_episode: "646-647（伪651-652）",
    oversea_episode: "697-698",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/j0019carcbg.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322504"
  },
  {
    case: "柯南VS平次 东西侦探推理对决【1小时特别篇】",
    japanese: "コナンvs平次　東西探偵推理勝負",
    datetime: "2012-03-24",
    content: "FBI的茱蒂、卡迈尔等人对世良真纯有似曾相识的感觉，詹姆斯则一眼就认出世良是女生，显得更加可疑。",
    japan_episode: "651（伪656）",
    oversea_episode: "702",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0019qm8b6r.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322509"
  },
  {
    case: "侦探们的夜想曲（波本）",
    japanese: "探偵たちの夜想曲〈ノクターン〉（バーボン）",
    datetime: "2012-10-27",
    content: "柯南发现波本就是世良真纯，冲矢昴和安室透其中一个。",
    japan_episode: "674（伪682）",
    oversea_episode: "726",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/m0019dbxn31.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322533"
  },
  {
    case: "逼近灰原秘密的暗影（前、后篇）",
    japanese: "灰原の秘密に迫る影（前、後編）",
    datetime: "2013-06-08/2013-06-15",
    content: "灰原恢复真身，为接下来的主线剧情做铺垫。",
    japan_episode: "699-700（伪710-711）",
    oversea_episode: "751-752",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/g0019p88skc.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322558"
  },
  {
    case: "漆黑的特快列车（发车、隧道、交叉、终点）",
    japanese: "漆黒の特急（発車、隧道、交差、終点）",
    datetime: "2013-07-13/.../2013-08-03",
    content: "安室透就是波本，贝尔摩德和波本打算在火车上杀掉雪莉，但柯南和基德合作救下雪莉。",
    japan_episode: "701-704（伪712-715）",
    oversea_episode: "753-756",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/q0019kfcv3i.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322560"
  },
  {
    case: "气氛僵硬的茶会（前、后篇）",
    japanese: "ギスギスしたお茶会（前、後編）",
    datetime: "2015-03-07/2015-03-14",
    content: "柯南得知波本的外号是zero",
    japan_episode: "770-771（伪782-783）",
    oversea_episode: "823-824",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/z001982ntj8.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322630"
  },
  {
    case: "绯色的序章 ~ 追寻 ~ 交织 ~ 回归 ~ 绯色的真相",
    japanese: "緋色の序章 ~ 追求 ~ 交錯 ~ 帰還 ~ 緋色の真相",
    datetime: "2015-05-30/.../2015-06-27",
    content: "柯南通过波本外号zero推测其实为日本公安降谷零。赤井秀一当初在柯南安排下假死后伪装成冲矢昴住进工藤家，暗中保护灰原哀。波本怀疑冲矢昴就是赤井秀一于是去工藤家拜访当时由工藤优作假扮的冲矢昴，却接到赤井秀一打来的电话，告诫他自己已得知他日本公安的身份，不要再追查他以免惹祸上身。另外，水无玲奈给赤井秀一发短信，提醒组织中的朗姆开始活动了。世良真纯的大哥确实是赤井秀一。",
    japan_episode: "779-783（伪791-795）",
    oversea_episode: "832-836",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d0019tuwe45.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322639"
  },
  {
    case: "太阁之恋名人赛",
    japanese: "緋色の序章 ~ 追求 ~ 交錯 ~ 帰還 ~ 緋色の真相",
    datetime: "2015-05-30/.../2015-06-27",
    content: "日本将棋高手羽田秀吉再次登场。他棋术高超，记忆力惊人，并且推理能力很强。藏在世良房间里的“领妹”和冲矢昴似乎都对他有所关注。",
    japan_episode: "785-786（伪797-798）",
    oversea_episode: "838-839",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/k0017fv2f7o.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322645"
  },
  {
    case: "沉入盛夏游泳池的谜团（前、后篇）",
    japanese: "沉入盛夏游泳池的谜团（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "世良和“领妹”似乎有什么事情想告诉柯南，故约柯南独自来她们住的酒店。没想到小兰和园子也跟来了，导致世良没有找到与柯南单独谈话的机会。案件结束后，小兰第一次看见“领妹”，觉得以前好像在哪见过她。",
    japan_episode: "787-788（伪799-800）",
    oversea_episode: "840-841",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/v00175h2283.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322647"
  },
  {
    case: "三个第一发现人（前、后篇）",
    japanese: "三个第一发现人（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "灰原听说了关于Rum的情报后告诉柯南Rum是组织的二把手，对其形象的描述众说纷纭，曾被描述成彪形大汉、娘娘腔和上了岁数的老人。Rum曾因为某次事故毁了一只眼睛，不知是左眼还是右眼，装了假眼珠。",
    japan_episode: "792-793（伪804-805）",
    oversea_episode: "845-846",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/g0018hn9ymc.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322652"
  },
  {
    case: "镰鼬之家（前、后篇）",
    japanese: "镰鼬之家（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "开头，柯南和服部平次打电话调侃，柯南播放了764集中录下来的平次在危急之中对和叶说出的类似表白的话。案件发生后，柯南突然意识到长野县的大和敢助警部是独眼，身材魁梧，留有长发，手拄拐杖，完全符合灰原听到的对Rum的描述。",
    japan_episode: "808-809（伪820-821）",
    oversea_episode: "863-864",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/y0019xray5f.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322670"
  },
  {
    case: "悄悄逼近安室的黑影",
    japanese: "悄悄逼近安室的黑影",
    datetime: "2019-02-02/2019-02-09",
    content: "本集为动画原创，与剧场版20《纯黑的噩梦》联动。结尾Vermouth给安室透打电话，问他在组织里进行的调查，并告诉他要注意分寸，Gin正在对他进行监控。此部分剧情与剧场版20有关，但剧场版20本身对主线没有重大推动。",
    japan_episode: "813（伪825）",
    oversea_episode: "868",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/q0020z7qih4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322675"
  },
  {
    case: "好吃到要命的拉面2（前、后篇）",
    japanese: "好吃到要命的拉面2（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "警视厅女交警宫本由美的前男友、日本将棋高手羽田秀吉再次登场。本次剧情强烈暗示秀吉就是世良的二哥，并且柯南意识到自己曾经听说过藏在世良酒店房间里的少女——她的名字叫Mary。",
    japan_episode: "827-828（伪839-840）",
    oversea_episode: "882-883",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/e00213777mv.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322689"
  },
  {
    case: "关系恶劣的女子乐队（前、后篇）",
    japanese: "关系恶劣的女子乐队（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "世良终于告诉了柯南她的大哥就是赤井秀一。她还回忆起曾经看见过秀一的一个朋友，代号叫“苏威”（苏格兰威士忌，也就是《绯色篇》结尾提到的Scotch）。安室透的内心独白表明，“苏威”是警视厅公安部派出的卧底，而且就是被赤井秀一杀死的。",
    japan_episode: "836-837",
    oversea_episode: "891-892",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/k0026deuu78.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322698"
  },
  {
    case: "不明真相的侦探团（前、后篇）",
    japanese: "不明真相的侦探团（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "结尾处，柯南突然意识到灰原和“领妹”的脸型很相似。",
    japan_episode: "843-844",
    oversea_episode: "898-899",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/i0026d0vekw.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322705"
  },
  {
    case: "千叶的UFO疑难案件（前、后篇）",
    japanese: "千叶的UFO疑难案件（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南想到，如果藏在世良宾馆里的“领妹”和灰原有血缘关系的话，那么世良的哥哥赤井秀一也就和灰原有血缘关系。但是赤井秀一又和灰原的姐姐宫野明美是恋人关系……",
    japan_episode: "847-848",
    oversea_episode: "902-903",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0026drst5l.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322709"
  },
  {
    case: "结婚登记表的密码（前、后篇）",
    japanese: "结婚登记表的密码（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "结尾处，羽田秀吉在电话里提到了他的义兄羽田浩司，是曾经最接近七冠王的将棋棋手，在美国参加国际象棋大赛时卷入某个事件去世了。灰原回忆起她曾在服用过APTX4869的人的名单中看见过羽田浩司的名字。",
    japan_episode: "849-850",
    oversea_episode: "904-905",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/o0026z8timb.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322711"
  },
  {
    case: "与17年前一样的案发现场（前、后篇）",
    japanese: "与17年前一样的案发现场（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南通过调查发现，17年前羽田浩司死亡的那一天，美国资本家阿曼达·修斯在同一家酒店的另一个房间里也因不明原因死亡。阿曼达是羽田的忠实粉丝，并且案发当天去了羽田的房间。阿曼达有一个来历不明的保镖，名叫浅香（Asaka），在阿曼达死亡之后失踪了，至今下落不明。阿曼达好像在FBI和CIA都很吃得开，所以她的死亡可能与组织有关。灰原透露，APTX4869大概是她父母开发的，但他们最终死于研究所发生的一场火灾，据说只是一场事故。灰原后来把烧剩下的资料凑了起来，把药重新制作了出来。但是灰原的内心独白表明，17年前，她被迫研究的是另一种药物。冲矢昴/赤井秀一表示，17年前的羽田案与他父亲有直接关系，并且也是他加入FBI的重要原因。羽田浩司死亡的房间里有一面打碎的镜子。柯南和赤井后来意识到，打碎的镜子上其实隐藏了一个暗号——“ASACA RUM”。",
    japan_episode: "861-862",
    oversea_episode: "916-917",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/w0026svg4eq.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322723"
  },
  {
    case: "灵魂侦探凶杀案（前、后篇）",
    japanese: "灵魂侦探凶杀案（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南回忆起最初被Gin灌下APTX4869的时候，Gin说那是组织最新开发的毒药，还没有做过人体实验。这说明柯南当时服下的是灰原重制的药，而且是第一个服用者。毛利接到电视台邀请，前去和自称“灵魂侦探”的堀田凯人进行访谈。堀田自称能够让羽田浩司案真相大白。没想到堀田已经遇害，案件本身与主线无关。世良和“领妹”为了调查羽田案搬到了堀田所住酒店房间的隔壁，遇上案件后世良帮助柯南侦破。没想到“领妹”碰巧捡到了柯南的变声器，用沉睡的小五郎破了案。“领妹”原来是世良的妈妈，而且有像特工一样的格斗水平。世良通过调查堀田掌握的情报，得知当时有人看到浅香拿着那面打碎的镜子，并且堀田好像查到浅香是一个女的。“领妹”提到10年前她和世良见过新一。柯南开始怀疑“领妹”的身份。Gin得知了堀田遇害的案件后开始怀疑毛利，并且说17年前的羽田案是Rum的一次失手。",
    japan_episode: "863-864",
    oversea_episode: "918-919",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/x00269kgzbg.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322725"
  },
  {
    case: "背叛的舞台（前、后篇）",
    japanese: "背叛的舞台（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "园子提到摇滚歌手波土禄道17年前写了一首歌，最近宣布要发表，名字故意拼写成“Asaca”，引起柯南和冲矢昴的注意。于是柯南、冲矢昴、小兰和园子一同前往波土禄道演唱会前一天的彩排，没想到遇上了安室透和假扮成波洛咖啡店女服务生榎本梓的贝尔摩德。波土禄道随后被害，案件与组织无关。破案后柯南等人得知歌名拼写成“Asaca”也和羽田案中的浅香无关。这是冲矢昴和安室透在《绯色篇》之后的第一次见面，安室透越加怀疑冲矢昴就是赤井秀一。同时，两个人也回忆了Scotch殉职的真相。原来，Scotch身份暴露后正想自杀时被赤井秀一制止。赤井告诉他自己是FBI的卧底，想帮助他逃脱。没想到Scotch听到远处有脚步声，以为是其他组织成员，所以开枪自杀。没想到赶来的人正是安室透，来到现场后看见赤井站在Scotch的尸体前，并声称Scotch是他杀的，所以对赤井恨之入骨。另外，本集中贝尔摩德再次表现出了希望保护小兰和柯南的意愿，让安室透承诺不伤害小兰和柯南。",
    japan_episode: "866-867",
    oversea_episode: "921-922",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/g00264wmc3x.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322728"
  },
  {
    case: "柯南和平次的鵺传说（鸣声、爪迹、解决篇）",
    japanese: "柯南和平次的鵺传说（鸣声、爪迹、解决編）",
    datetime: "2019-02-02/2019-02-09",
    content: "开头小兰在波洛咖啡店与榎本梓核实情况，确认了《背叛的舞台》中遇到的榎本梓是别人假扮的。安室透谎称那个假扮的榎本梓是他在门口遇到的，他也被骗了。柯南意识到，贝尔摩德特意来调查波土禄道的这首歌，说明黑衣组织对17年前羽田案中的“ASACA RUM”这个暗号非常重视。",
    japan_episode: "872-874",
    oversea_episode: "927-929",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/l0026v21phi.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322734"
  },
  {
    case: "试衣间的死角（前、后篇）",
    japanese: "试衣间的死角（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南陪小兰和世良在商场买泳衣的时候突然回忆起自己小时候和小兰在一个海滩上好像见到过世良和赤井。随后柯南意识到世良留学的地方不是美国，而是英国。",
    japan_episode: "878-879",
    oversea_episode: "933-934",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/d00261175py.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322740"
  },
  {
    case: "涟漪上的魔法师（前、后篇）",
    japanese: "涟漪上的魔法师（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南终于记起来了曾经与世良和赤井相遇的经过。10年前，新一的妈妈工藤有希子带着新一和小兰去海滩上玩，遇见了赤井秀一一家——母亲玛丽、弟弟羽田秀吉和妹妹世良真纯。玛丽是英国人，她的丈夫（也就是赤井、羽田和世良兄妹三人的父亲）赤井务武好像在调查黑衣组织期间死亡，但没有找到尸体。当时，赤井秀一已在美国留学七年，并且已经拿到了美国国籍，准备加入FBI调查他父亲死亡的真相。海滩上出现了命案，有希子把案情发给了新一的爸爸工藤优作，没想到工藤优作和赤井秀一同时破了案。柯南意识到，世良在商场故意穿了和10年前见面时相似的泳装，好让柯南记起这段经过。这说明世良已经知道了柯南的真实身份。柯南随后推测，“领域外的妹妹”很可能就是因某种原因吃了APTX4869身体变小的玛丽。",
    japan_episode: "881-882",
    oversea_episode: "936-937",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/b0026dewxdk.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322743"
  },
  {
    case: "红色的修学旅行 鲜红篇（前、后篇） ~ 红色的修学旅行 恋红篇（前、后篇）",
    japanese: "鲜红的修学旅行（鲜红、恋红編）",
    datetime: "2019-02-02/2019-02-09",
    content: "柯南从灰原那里要到了APTX4869的解药，在服部平次的帮助下，变回新一与小兰、园子和世良去京都参加修学旅行。在京都清水寺的舞台上，新一向小兰提起之前在伦敦的表白，想知道她的答复。小兰亲了一下新一的脸，但两人正要接吻时，新一的解药开始失效，所以被迫逃跑。之后，小兰和新一通过短信，正式确定开始交往。已经发现柯南身份的世良通过这次观察新一，得知APTX4869有解药，告知了藏在她酒店房间中同样身体变小的母亲 Mary。（Mary 说要抢过来，什么人啊这是）",
    japan_episode: "927-928（伪939-940）",
    oversea_episode: "982-985",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/p0029h3glj5.html",
    bilibili_link: "https://www.bilibili.com/bangumi/media/md28228775/"
  },
  {
    case: "伫立在窗边的女人（前、后篇）",
    japanese: "窓辺にたたずむ女（前、後編）",
    datetime: "2019-02-02/2019-02-09",
    content: "女警由美的棋手男友羽田秀吉就是世良真纯的二哥",
    japan_episode: "929-930（伪941-942）",
    oversea_episode: "986-987",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/b0029dcw042.html",
    bilibili_link: "https://www.bilibili.com/bangumi/media/md28228775/"
  },
  {
    case: "巨人塔洛斯的必杀拳（前、后篇）",
    japanese: "巨人タロスの必殺拳（前、後編）",
    datetime: "2019-04-20/2019-04-27",
    content: "世良真纯提到大哥（也就是赤井秀一）曾经的一位朋友苏格兰教他弹贝斯，让波本回想起了自己日本警察同样潜伏在黑衣组织的苏格兰惨遭赤井秀一杀害的事情",
    japan_episode: "937-938",
    oversea_episode: "994-995",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/w0030g8gd8a.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322837"
  },
  {
    case: "寻找玛利亚！（后篇）",
    japanese: "マリアちゃんをさがせ！（後編）",
    datetime: "2019-06-08",
    content: "在修学旅行期间，新一不小心被记者拍到，引起网络和媒体的广泛关注，包括暗中观察的黑田、若狭和胁田。服部平次和新一的父母最终帮助掩盖了新一还活着的传闻。之后，Rum让安室透迅速提供关于工藤新一的情报。，片尾工藤新一和工藤优作在赤井秀一提示下，推理出当年在羽田浩司房间留下的暗号不是指浅香（Asaca,Asaka）和朗姆（Rum）两个词，而是一个词 CARASUMA 乌丸莲耶（死去20年的大富豪，219），BOSS 身份疑似知晓。因此，新一的父母决定回到日本，帮助柯南与组织斗争。",
    japan_episode: "942",
    oversea_episode: "999",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/p00317hqu6i.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322842"
  },
  {
    case: "充满谜团的鸡尾酒（前、中、后篇）",
    japanese: "迷宫カクテル（前、中、後編）",
    datetime: "2019-08-31/.../2019-09-21",
    content: "主体内容与主线无关，但有三处处细节相关，一是朗姆让安室尽快调查清楚工藤新一的死活（修学旅行被记者拍到留下了隐患，引起了怀疑），二是安室透伺机从小兰处偷来了新一家的钥匙，三是安室透回忆起，自己小时候和宫野明美是玩伴，因为自己是混血，受人欺负，时常打架受伤。宫野艾莲娜医生因为自己也是混血，所以很同情安室，对他加以照顾。安室因此对她很有好感。当时，宫野艾莲娜和她的丈夫宫野厚司一起开着一家小诊所，并已怀上了宫野志保。艾莲娜决定关掉诊所，陪她丈夫去一个由乌丸财团资助的科研所工作（乌丸集团出现疑似印证了之前的推断，BOSS 为乌丸莲耶，所研制的药物为长生药）。结尾处，安室透用偷来的新一家的钥匙，夜里潜入新一家，被赤井秀一发现，并见到了工藤夫妇。",
    japan_episode: "952-954",
    oversea_episode: "1009-1011",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/a0032m7fsx4.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322852"
  },
  {
    case: "目标是警视厅交通部（一、二、三、四）",
    japanese: "迷宫カクテル（一、二、三、四）",
    datetime: "2020-08-31/.../2020-09-21",
    content: "主体剧情与主线无关，在（四）的结尾，黑田管理官暗中指示安室，让他帮助柯南破案，并称他为波本，向他询问之前与冲矢昴和工藤夫妇的见面，细节没有交代。",
    japan_episode: "971-974",
    oversea_episode: "1028-1031",
    tencent_link: "https://v.qq.com/x/cover/53q0eh78q97e4d1/r0033pmk8r3.html",
    bilibili_link: "https://www.bilibili.com/bangumi/play/ep322871"
  }
];

export default plots;
