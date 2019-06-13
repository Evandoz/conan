const role = [
  {
    "name": "贝尔摩德",
    "role": "组织成员，代号 Vermouth",
    "desc": "由于不明原因不会衰老，曾经是美国女星莎朗·温亚德，和工藤新一的母亲工藤有希子是好友。后来Vermouth假造了自己的死亡，以莎朗的女儿克里斯·温亚德的身份活动。（A SECRET MAKES A WOMAN WOMAN）"
  },
  {
    "name": "宫野志保",
    "role": "（原）组织成员，代号 Sherry，雪莉",
    "desc": "组织里的科学家，继承父母工作在组织中研究代号为APTX4869的药物，目的很可能是让人长生不老或死而复生。（130-131，223，309）志保的姐姐宫野明美为了帮助妹妹脱离组织，策划十亿元抢劫案，不料被Gin枪杀。志保得知后拒绝继续为组织工作，被Gin和Vodka囚禁，被迫服下APTX4869，不料身体同样缩小，得以逃脱，投奔柯南，化名灰原哀住在阿笠博士家中。【剧集：129】"
  },
  {
    "name": "伏特加",
    "role": "组织成员，代号 Vodka，伏特加",
    "desc": "组织"
  },
  {
    "name": "琴酒",
    "role": "组织成员，代号 Gin，琴酒",
    "desc": "组织"
  },
  {
    "name": "宫野明美",
    "role": "（原）组织成员，化名广田雅美，赤井秀一女友，灰原哀姐姐）",
    "desc": ""
  },
  {
    "name": "赤井秀一",
    "role": "（FBI 卧底）组织成员，代号 Rye，化名诸星大",
    "desc": "FBI探员，朱蒂前男友，宫野明美的男友，世良真纯大哥。潜入组织后表现出色，可惜因为FBI探员卡迈尔的失误，导致赤井秀一身份暴露，宫野明美被组织杀害。伪装死亡后，变身大学研究生，化名冲矢昴受柯南邀请住在新一家里"
  },
  {
    "name": "茱蒂·斯泰琳",
    "role": "化名茱蒂·圣提米利翁",
    "desc": "FBI探员，在日本调查黑衣组织，伪装身份是帝丹高中英文教师，曾经是赤井秀一的女友，并且其父亲多年前被Vermouth杀害，所以来日本调查Vermouth并以报仇。"
  },
  {
    "name": "本堂瑛海",
    "role": "（CIA 卧底）组织成员，代号 Kir，化名水无怜奈",
    "desc": "电视台女主播，有一个弟弟本堂瑛祐。柯南在杯户中央医院（水无住院的医院）发现了假装患者住院的黑衣组织成员楠田陆道。不幸因FBI打草惊蛇，楠田陆道自杀身亡，尸体下落不明。Gin等人也因此推测出了水无住院的地点。在水无怜奈的住院地点暴露给组织之后，柯南、赤井和已经醒来的水无进行合作，让FBI探员安德烈·卡迈尔开车运送水无出医院，水无假装袭击卡迈尔，回到组织，以进一步取得组织信任。水无回到组织后，组织头目命令她杀害赤井秀一。水无成功枪杀了赤井，并引爆其尸体。尸体烧剩下的右手指纹通过与柯南手机上留下的指纹对比，证实死者是赤井秀一。本堂瑛祐拒绝了FBI的证人保护计划，推理出了柯南的真实身份，并且打算加入CIA与组织斗争。同时，柯南仿佛对赤井秀一“殉职”的消息并不感到惊慌。"
  },
  {
    "name": "苏格兰",
    "role": "（日本公安卧底）组织成员，代号 Scotch，苏格兰威士忌",
    "desc": "与波本同为日本公安在组织卧底，Scotch身份暴露后正想自杀时被赤井秀一制止。赤井告诉他自己是FBI的卧底，想帮助他逃脱。没想到Scotch听到远处有脚步声，以为是其他组织成员，所以开枪自杀。没想到赶来的人正是安室透，来到现场后看见赤井站在Scotch的尸体前，并声称Scotch是他杀的，所以对赤井恨之入骨。"
  },
  {
    "name": "降谷零",
    "role": "（日本公安卧底）组织成员，代号 Bourbon，波本",
    "desc": "日本公安，与赤井秀一有过节，原因是赤井秀一声称自己杀了与他同是日本公安在组织中卧底的 Scotch（苏格兰威士忌），但其实是因为身份暴露自杀。化名安室透在毛利小五郎楼下餐厅打工。"
  },
  {
    "name": "朗姆",
    "role": "组织成员，代号 Rum，朗姆",
    "desc": "地位在Gin之上，是一个重要人物。灰原听说了关于Rum的情报后告诉柯南Rum是组织的二把手，对其形象的描述众说纷纭，曾被描述成壮汉、像女人一样的男人和上了年纪的老人。Rum因某次事故伤了眼睛，有一只眼是义眼。"
  },
  {
    "name": "伊森本堂",
    "role": "前黑衣组织成员，前CIA",
    "desc": ""
  },
  {
    "name": "羽田秀吉",
    "role": "日本将棋高手，赤井秀一的弟弟，世良真纯二哥，女警宫本由美男友。赤井秀一、羽田秀吉和世良真纯兄妹三人的母亲是英国人，名叫玛丽（Mary），也就是住在世良酒店房间中的“领域外的妹妹”，因某种原因吃了APTX4869导致身体变小。他们的父亲赤井务武好像在调查黑衣组织期间死亡，但没有找到尸体。",
    "desc": ""
  },
  {
    "name": "羽田浩司",
    "role": "羽田秀吉义兄，将棋棋手，在美国参加国际象棋大赛时因不明原因死亡。灰原回忆起她曾在服用过APTX4869的人的名单中看见过羽田浩司的名字。（850）柯南后来发现，羽田浩司的死亡与美国资本家阿曼达·修斯的死亡有关。羽田的房间里留有一个暗号，表示阿曼达当时的保镖浅香（Asaka）很可能就是Rum（朗姆）。",
    "desc": ""
  },
  {
    "name": "玛丽",
    "role": "世良真纯称之为领域外的妹妹，实为其母亲，长得和灰原哀很像，有特工的身手及非一般的推理能力，疑似也服了变小的药",
    "desc": ""
  },
  {
    "name": "安德雷卡梅隆",
    "role": "FBI,两年前失误导致赤井秀一FBI身份暴露被迫离开组织，两年后再次失误使波本发现赤井秀一活着的事实",
    "desc": ""
  },
  {
    "name": "榎本梓",
    "role": "（安室透咖啡馆同事）=克丽丝·温亚德 = 莎朗·温亚德（黑衣组织成员贝尔摩德vermouth，朱蒂的杀父仇人，有希子好友，被工藤新一及毛利兰救过）",
    "desc": ""
  },
  {
    "name": "水无玲奈",
    "role": "（黑衣组织的基尔Kir）=本堂瑛海（CIA,本堂瑛佑姐姐，伊森本堂女儿）",
    "desc": ""
  }
]

export default role
