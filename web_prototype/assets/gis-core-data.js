window.LUOYANG_GIS_CORE_DATA = {
  "generatedFrom": "2.0 GIS图_考古报告位置信息提取表.csv",
  "scope": "宫城核心区最小可用数据层",
  "notes": [
    "原始2.0总表保持不动，本文件只抽取网页原型需要的核心对象。",
    "svgGeometry用于当前原型叠合图定位，coord字段用于后续替换为GIS精确坐标。",
    "天堂在2.0总表中未检出独立记录，需继续补明堂天堂专题资料。"
  ],
  "objects": [
    {
      "key": "palace_city",
      "name": "宫城/紫微城范围",
      "category": "city_boundary",
      "parentKey": "",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-A001",
        "GIS-L001",
        "GIS-L002",
        "GIS-L003",
        "GIS-L004"
      ],
      "source": "第341页；图5-1；第342页；图5-1；第342页；图5-1；第360-361页；图5-1；图5-17；DT1、GT847、DT50-17、DT108、DT109、DT26、DT165、DT89-DT91；第364-366页；图5-1；图5-21；图5-22；GT442、GT450、GT795、QT3",
      "sourceStatus": "可入库；待配准",
      "modernAnchor": "今洛阳市西工区、老城区范围；东起金业路东侧；西至洛阳第二实验中学操场东南部；东起岳村东北隅；西抵洛阳春都集团厂区东侧；南起马市街西口；北抵驾鸡沟村西南；南起洛阳市第二实验中学操场东南部；北抵苗南村南",
      "ancientPosition": "郭城西北部；南接皇城；东邻东城和含嘉仓城；北接郭城北墙西部；西接郭城西墙北部；宫城南界；与皇城相隔；宫城北界；与郭城北墙西部相关；宫城东界；宫城西界",
      "metricInfo": "东西约2100米；南北约1840-2160米；方向约92度；全长约2100米；方向约96度；东西长约2130米；方向约2度；南北长约2160米；图5-1编号6-12；方向约2度；南北长约1840米；图5-1编号13-16；墙宽多为9-11米",
      "gisMethod": "先画范围框；再用图5-1配准修正；用起止参照和图5-1配准；先画粗线；后续用北墙门址修正；用7个发掘点约束墙线；用4个发掘点约束墙线",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 160,
        "y": 112,
        "width": 570,
        "height": 398
      }
    },
    {
      "key": "danei",
      "name": "大内范围",
      "category": "palace_core",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-A002",
        "GIS-L005",
        "GIS-L006"
      ],
      "source": "第417-418页；图5-64；第418-421页；图5-64至图5-68；GT518、GT412、GT357；第422-424页；图5-64、图5-69、图5-70；GT245、GT828、GT815、GT673、GT675、BT205",
      "sourceStatus": "可入库；待配准",
      "modernAnchor": "图5-1及大内分区图；豫通街小学；桑塔纳汽车维修中心；洛阳市起重机厂；洛阳市第三中学；洛玻集团家属区；洛玻集团商务大楼；洛玻集团浮法一线；洛玻集团仓储区",
      "ancientPosition": "宫城中部；东接东隔城；西接西隔城；北接玄武城；南接皇城；大内东界；南起宫城南墙；北至玄武城南墙；大内西界；南起宫城南墙；北至玄武城南墙",
      "metricInfo": "边长约1040米；南北长约1040米；3个发掘点；墙基残宽约2.1-3.8米；南北长约1040米；5个发掘点；早期墙宽约3.7-5米；晚期墙宽约2.6米",
      "gisMethod": "从图5-64数字化；用3个发掘点和图5-64约束墙线；用5个发掘点和图5-64约束墙线",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 255,
        "y": 165,
        "width": 385,
        "height": 297
      }
    },
    {
      "key": "east_gecheng",
      "name": "东隔城",
      "category": "palace_subarea",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "B",
      "sourceObjectIds": [
        "GIS-A003",
        "GIS-DOC001",
        "GIS-DOC002",
        "GIS-DOC052",
        "GIS-DOC053"
      ],
      "source": "第341页；图5-1；图5-64；20260707 考古报告.doc；20260707 考古报告.doc；第3册第六章宫城下开篇 p703；第3册第六章第一节东隔城 p703-p707 图6-1至图6-6",
      "sourceStatus": "已核目录与页图；待回查；待定位；待配准",
      "modernAnchor": "图5-1；图5-64；老城区公安分局；百业大市场；五金工具厂；坛角小学；唐宫东路住宅小区；洛阳机电公司；中州路南沿；老城区公安分局；百业大市场；五金工具厂；坛角小学；唐宫东路住宅小区；洛阳机电公司院内；中州路南沿；宫城大内东西两侧及北侧；老城区公安分局；百业大市场；五金工具厂；坛角小学；唐宫东路住宅小区；洛阳机电公司；中州路南沿",
      "ancientPosition": "大内东侧；大内东侧隔城区域；东隔城东界；大内四周拱卫结构；东夹城西墙/东隔城东墙",
      "metricInfo": "与宫城东墙、大内东墙之间；南北约970米；7次发掘；南北约970米；大内东西两侧各有两重隔城即东隔城与东夹城西隔城与西夹城北侧三重隔城；东墙南北长970米；相关探方GT753 GT521 GT321 GT648 GT546 GT177 GT846",
      "gisMethod": "从复原/分区图数字化；作为第3册补充线索；需回查页码、图号和边界；按发掘点组约束墙线；需回查原报告；建立宫城外围隔城结构总图层与DOC001-DOC051关联；把各探方作为墙线控制点核验DOC002",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 650,
        "y": 164,
        "width": 70,
        "height": 298
      }
    },
    {
      "key": "west_gecheng",
      "name": "西隔城",
      "category": "palace_subarea",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "B",
      "sourceObjectIds": [
        "GIS-A004",
        "GIS-DOC015",
        "GIS-DOC016"
      ],
      "source": "第341页；图5-1；图5-64；20260707 考古报告.doc；20260707 考古报告.doc",
      "sourceStatus": "待回查；待配准",
      "modernAnchor": "图5-1；图5-64；洛玻集团唐二小区；洛阳玻璃集团宾馆；浮法一线；浮法二线；铁路支线；高压炉房；洛玻集团唐二小区东南隅；道南路南侧；洛阳玻璃集团宾馆；浮法一线；浮法二线；铁路支线；高压炉房及其北侧院内",
      "ancientPosition": "大内西侧；大内西侧隔城；西隔城西界",
      "metricInfo": "与宫城西墙、大内西墙之间；南北约970米；6次发掘；全长约970米；南起洛玻集团唐二小区东南隅，北抵道南路南侧",
      "gisMethod": "从复原/分区图数字化；补宫城西侧外围结构；需回查边界；按发掘点组约束墙线；需回查原报告",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 170,
        "y": 164,
        "width": 75,
        "height": 298
      }
    },
    {
      "key": "east_jiacheng",
      "name": "东夹城",
      "category": "palace_subarea",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "B/C",
      "sourceObjectIds": [
        "GIS-DOC010",
        "GIS-DOC011",
        "GIS-DOC012",
        "GIS-DOC013",
        "GIS-DOC014"
      ],
      "source": "20260707 考古报告.doc；20260707 考古报告.doc；20260707 考古报告.doc；20260707 考古报告.doc；20260707 考古报告.doc",
      "sourceStatus": "待回查",
      "modernAnchor": "老城区公安分局；第二运输公司；黄金房地产开发公司商品住宅小区；老城区公安分局；第二运输公司院内；黄金房地产开发公司商品住宅小区院内；洛阳市铸造厂院内；黄金房地产开发公司商品住宅小区院内；二号隔墙东侧",
      "ancientPosition": "大内东侧夹城；东夹城内部街道；东夹城内部街道；东夹城内部隔墙；东夹城内部基址",
      "metricInfo": "南北长约970米；东西宽约180米；四面皆有城墙；2个发掘点；街道线索；2道隔墙；基址线索",
      "gisMethod": "补宫城东侧外围结构；需回查边界；按点组入库；需回查走向；先作线索点；需回查原报告；按隔墙点组入库；需回查走向；需回查具体位置和尺寸",
      "coordStatus": "待回查",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 715,
        "y": 390,
        "width": 48,
        "height": 120
      }
    },
    {
      "key": "west_jiacheng",
      "name": "西夹城",
      "category": "palace_subarea",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "叠城",
      "evidenceGrade": "B",
      "sourceObjectIds": [
        "GIS-DOC031",
        "GIS-DOC032",
        "GIS-DOC079",
        "GIS-DOC080",
        "GIS-DOC082"
      ],
      "source": "20260707 考古报告.doc；20260707 考古报告.doc；第3册第六章第四节 p829；第3册第六章第四节 p830 图6-104 图6-137；第3册第六章第四节 p831 图6-105",
      "sourceStatus": "待回查；待配准",
      "modernAnchor": "洛阳市西工区中部；玻璃厂北部；今洛阳市西工区中部；西接宫城西墙；北接玄武城；南接皇城；玻璃厂北部；玄武城南墙以南；洛阳玻璃集团唐二小区院内",
      "ancientPosition": "宫城西侧夹城；西夹城东界；宫城西侧夹城空间；西夹城东墙北段；西夹城南北向中线道路",
      "metricInfo": "平面南北向长方形；南北长约970米；东西宽约180米；城墙线索；西夹城东与西隔城相邻；南与皇城相邻；北与玄武城相邻；平面呈南北向长方形；南北长970米；东西宽180米；东墙即西隔城西墙；西墙即宫城西墙；南墙即宫城南墙；北墙即玄武城南墙；1960年钻探发现西夹城东墙北段；北段从玄武城南墙向南174米；宽25米；夯土距地表1.5米；夯土中有南北向沟长27米宽5米；南段城墙变窄宽16米；探方GT630；东距西夹城东墙95米；南距西夹城南墙80米；道路南北向；位于西夹城南北向中线上；图6-105示宋代一号街道和唐代一号街道路土关系",
      "gisMethod": "补宫城西侧外围结构；需回查边界；先作线索线；需回查图件；作为宫城西侧主边界背景面；解释九洲池和嘉豫门之间的空间归属；可作西夹城东界线段；与九洲池西侧和唐宫路附近关系需叠合；可作西夹城内部道路线；用于对照现代小区道路和唐宫路附近路网",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "rect",
        "x": 132,
        "y": 392,
        "width": 58,
        "height": 118
      }
    },
    {
      "key": "yingtian",
      "name": "应天门",
      "category": "gate",
      "parentKey": "palace_city",
      "geometry": "point_area",
      "displayLayer": "寻址",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-G001",
        "GIS-G002"
      ],
      "source": "第376-381页；图5-29至图5-35；GT851等；第377-381页；图5-31至图5-35",
      "sourceStatus": "可入库；待细化",
      "modernAnchor": "周公庙西侧；原洛阳市委党校东南；中州渠之北；定鼎南路穿过门址中部；定鼎南路两侧",
      "ancientPosition": "大内南墙正中/宫城正门；南墙外侧加宽处",
      "metricInfo": "南侧夯土宽约17.5米；两侧间距约83米；西飞廊南北约37米；东飞廊南北约33.5米",
      "gisMethod": "第一控制点；配准图5-30；应天门局部详图数字化",
      "coordStatus": "OSM锚点，遗址范围待GIS校准",
      "coord": {
        "lng": 112.4545641,
        "lat": 34.6769932,
        "source": "OSM historic/city_gate"
      },
      "svgGeometry": {
        "type": "point",
        "x": 444,
        "y": 510
      }
    },
    {
      "key": "xuanwu",
      "name": "玄武门",
      "category": "gate",
      "parentKey": "palace_city",
      "geometry": "point",
      "displayLayer": "寻址",
      "evidenceGrade": "B",
      "sourceObjectIds": [
        "GIS-G007",
        "GIS-DOC043"
      ],
      "source": "第414页；20260707 考古报告.doc",
      "sourceStatus": "可入库；待回查",
      "modernAnchor": "洛阳市唐宫路煤厂后院车库下；洛阳起重机厂北侧/煤厂北侧",
      "ancientPosition": "大内北墙正中；宫城轴线上的重要坐标",
      "metricInfo": "东距大内东墙约525米；玄武城南墙门址缺口宽约7.1米",
      "gisMethod": "现代地名+相对距离定位；与GIS-G007互证；需回查精确图件",
      "coordStatus": "中轴推算，待GIS控制点",
      "coord": {
        "lng": 112.4545641,
        "lat": 34.68461,
        "source": "axis-derived placeholder"
      },
      "svgGeometry": {
        "type": "point",
        "x": 444,
        "y": 112
      }
    },
    {
      "key": "qianyuan",
      "name": "乾元门",
      "category": "gate",
      "parentKey": "danei",
      "geometry": "point_area",
      "displayLayer": "寻址",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-X013"
      ],
      "source": "第476页；图5-113；GT347-GT353",
      "sourceStatus": "可入库",
      "modernAnchor": "洛阳市国安建设集团门附近",
      "ancientPosition": "宫城正殿所在宫院南面正门；位于宫城轴线上，南对应天门，北直宫城正殿明堂",
      "metricInfo": "南距应天门234米；北距明堂210米；南距大内南墙234米；东距大内东墙512米；GT347-GT353",
      "gisMethod": "中轴线核心控制点；优先配准",
      "coordStatus": "中轴推算，待GIS控制点",
      "coord": {
        "lng": 112.4545641,
        "lat": 34.67905,
        "source": "axis-derived placeholder"
      },
      "svgGeometry": {
        "type": "point",
        "x": 444,
        "y": 426
      }
    },
    {
      "key": "mingtang",
      "name": "明堂",
      "category": "ritual_building",
      "parentKey": "danei",
      "geometry": "point_area",
      "displayLayer": "寻址",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-X014"
      ],
      "source": "第479页；图5-89、图5-90；GT264-GT279",
      "sourceStatus": "可入库",
      "modernAnchor": "定鼎北路与中州路交叉口东北",
      "ancientPosition": "位于宫城大内居中位置；处在宫城轴线上",
      "metricInfo": "南距应天门445米；南距大内南墙445米；东距大内东墙510米；GT264-GT279",
      "gisMethod": "中轴线核心控制点；优先配准",
      "coordStatus": "中轴推算，待基址中心复核",
      "coord": {
        "lng": 112.4545641,
        "lat": 34.6805,
        "source": "axis-derived placeholder"
      },
      "svgGeometry": {
        "type": "point",
        "x": 444,
        "y": 346
      }
    },
    {
      "key": "tiantang",
      "name": "天堂",
      "category": "ritual_building",
      "parentKey": "danei",
      "geometry": "point_area",
      "displayLayer": "寻址",
      "evidenceGrade": "待补充",
      "sourceObjectIds": [
        "MISSING_IN_2_0_TABLE"
      ],
      "source": "需补充明堂天堂专题资料",
      "sourceStatus": "待补充",
      "modernAnchor": "axis-derived placeholder",
      "ancientPosition": "",
      "metricInfo": "",
      "gisMethod": "暂用中轴序列位置作为原型锚点",
      "coordStatus": "2.0总表暂无独立天堂记录，需补明堂天堂专题资料",
      "coord": {
        "lng": 112.4545641,
        "lat": 34.68173,
        "source": "axis-derived placeholder"
      },
      "svgGeometry": {
        "type": "point",
        "x": 444,
        "y": 278
      }
    },
    {
      "key": "yongtai_bulang",
      "name": "永泰门步廊",
      "category": "corridor",
      "parentKey": "danei",
      "geometry": "line_area",
      "displayLayer": "寻址",
      "evidenceGrade": "A",
      "sourceObjectIds": [
        "GIS-X011"
      ],
      "source": "第473-475页；图5-91、图5-111、图5-112；GT852、GT853",
      "sourceStatus": "可入库",
      "modernAnchor": "定鼎南路和周公路交叉路口",
      "ancientPosition": "东起大内东廊；西抵大内西廊；南距应天门约110米",
      "metricInfo": "GT852、GT853；东距大内东墙约580-590米；南距大内南墙约93-113米；唐代早期与晚期沿用",
      "gisMethod": "画东西向线/面；连接东西廊",
      "coordStatus": "待配准",
      "coord": null,
      "svgGeometry": {
        "type": "line",
        "points": [
          [
            444,
            452
          ],
          [
            444,
            510
          ]
        ]
      }
    },
    {
      "key": "jiuzhou",
      "name": "九洲池",
      "category": "garden_water",
      "parentKey": "palace_city",
      "geometry": "polygon",
      "displayLayer": "寻址",
      "evidenceGrade": "B",
      "sourceObjectIds": [
        "GIS-DOC021",
        "GIS-DOC061",
        "GIS-DOC075",
        "GIS-DOC076",
        "GIS-DOC077",
        "GIS-DOC078"
      ],
      "source": "20260707 考古报告.doc；第3册第八章第二节 p968；第3册第六章第三节 p766 图6-65；第3册第六章第三节 p769 图6-64；第3册第六章第三节 p769-p770 图6-64；第3册第六章第三节 p770-p771 图6-64 图6-70",
      "sourceStatus": "待回查；待矢量化；待配准",
      "modernAnchor": "洛阳玻璃集团厂区西北隅；九洲池及宫城皇城水渠；洛阳玻璃集团厂区西北隅；宫城西隔城中北部；宫城西北部；玄武城南250米处；西隔城北部；九洲池现有范围内；宫城西隔城中北部；洛阳玻璃集团厂区东南部和浮法三线成品库；大内西墙与西隔城东墙之间",
      "ancientPosition": "宫城西隔城中北部；九洲池与宫城皇城水系；九洲池池体及洑土范围；九洲池轮廓与东、西两支引水渠；九洲池I至VI号岛屿；九洲池七条水道及四号基址周边",
      "metricInfo": "当前考古资料不能准确界定范围；九洲池为宫城和皇城水系核心；支渠连接谷水与九洲池；谷水入池沉淀后流向宫城和皇城各池沼；遗址位于宫城西隔城中北部；1960年钻探确认宫城西北角大面积洑土；西距西墙5米；北距大内北墙148米；洑土呈斜置L形；东西280米；南北最宽260米；总面积约55600平方米；1982-1986年初步搞清九洲池轮廓；遗址位于宫城西北部玄武城南250米处；东西长约205米；南北宽约130米；池北东西两侧各有宽约5米渠道向北延伸至玄武城南墙附近后内折；引水渠钻探南北长约250米东西宽3-5米；钻探出六座岛屿；I号在九洲池东北隅东西40米南北25-30米；II号在I号西南部东西38米南北23-30米；III号在九洲池东南隅东西51米南北12-26米；IV号在西北隅东西34米南北27米；V号在IV号之南东西32米南北16-25米；VI号在西南隅东西46米南北13-45米；发掘发现唐代水道七条；一号位于九洲池东南；二三号在唐代四号基址建筑之间；四号在四号基址南侧；五号在五号基址东端；六号在七号基址西南；七号在七号基址东；一号水道GT365东距大内西墙40米南距大内南墙560米；二号水道GT505 GT506东距西隔城东墙180米南距西隔城南墙560米；三号水道GT504 GT505同距西隔城东墙180米南距西隔城南墙560米",
      "gisMethod": "作为九洲池弱范围；需回查第3册九洲池章节；解释DOC021-DOC030与宫城皇城水系的关系；需回查支渠图件；作为九洲池范围主面层；需与图6-64和现代底图配准；补九洲池与玄武城南侧水系关系；可作为水系线层和池体范围校准依据；可转为六个岛屿面或中心点；用于九洲池园林空间复原；可作为九洲池内部水道线层；优先画一至三号水道并标注其与四号基址关系",
      "coordStatus": "OSM园区锚点，池体边界待图6-64/图6-65矢量化",
      "coord": {
        "lng": 112.4462691,
        "lat": 34.6810348,
        "source": "OSM heritage park centroid"
      },
      "svgGeometry": {
        "type": "ellipse_area",
        "cx": 286,
        "cy": 220,
        "rx": 78,
        "ry": 48
      }
    }
  ]
};
