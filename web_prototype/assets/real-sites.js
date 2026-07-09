window.LUOYANG_REAL_SITES = {
  crs: "WGS84",
  projection: "local_bbox_to_svg_viewbox",
  viewBox: { width: 900, height: 620 },
  bounds: {
    west: 112.4426674,
    east: 112.4664608,
    south: 34.67545,
    north: 34.6866249,
    status: "web_prototype_projection_extent"
  },
  notes: [
    "The coordinates are used to drive the web prototype layer, not as final survey-grade GIS data.",
    "OSM-matched records can be replaced by Gaode/Baidu/GIS control points without changing page code.",
    "Inferred points are calibrated from the known Yingtianmen anchor and the current archaeological overlay sequence."
  ],
  sources: {
    osm_yingtian_city_gate: "OpenStreetMap Nominatim: historic/city_gate 应天门, osm_id 865951589",
    osm_heritage_park: "OpenStreetMap Nominatim: leisure/park 隋唐洛阳城国家遗址公园, osm_id 364355807",
    prototype_inference: "Derived from current GIS overlay, central axis order, and archaeological narrative sequence"
  },
  sites: [
    {
      key: "yingtian",
      name: "应天门",
      lng: 112.4545641,
      lat: 34.6769932,
      geometry: "point_area",
      evidenceGrade: "A",
      coordinateStatus: "OSM historic/city_gate matched",
      coordinateSource: "osm_yingtian_city_gate",
      modernAnchor: "应天门遗址 / 定鼎大道一带",
      confidence: "high_for_modern_anchor",
      evidenceSource: "《隋唐洛阳城 1959-2001 年考古发掘报告》第二册；OSM 应天门 historic/city_gate",
      evidenceNote: "门址、阙台与宫城南墙关系可作为硬证据定位；现代坐标先取 OSM 门址锚点。"
    },
    {
      key: "qianyuan",
      name: "乾元门",
      lng: 112.4545641,
      lat: 34.6790500,
      geometry: "point",
      evidenceGrade: "B",
      coordinateStatus: "axis-derived placeholder",
      coordinateSource: "prototype_inference",
      modernAnchor: "应天门以北中轴线方向",
      confidence: "needs_gis_control_point",
      evidenceSource: "第二册宫城中轴线相关材料；团队 GIS 叠合图",
      evidenceNote: "位置依赖中轴线序列关系，目前作为中轴过渡节点显示，需补页码与探方依据。"
    },
    {
      key: "mingtang",
      name: "明堂",
      lng: 112.4545641,
      lat: 34.6805000,
      geometry: "point_area",
      evidenceGrade: "A",
      coordinateStatus: "axis-derived placeholder",
      coordinateSource: "prototype_inference",
      modernAnchor: "明堂天堂景区范围内",
      confidence: "needs_site_center_verification",
      evidenceSource: "明堂与天堂遗址考古报告/简报；第二册中轴线建筑材料",
      evidenceNote: "明堂基址是礼制核心节点，后续应补充基址边界、图号和保护展示范围。"
    },
    {
      key: "tiantang",
      name: "天堂",
      lng: 112.4545641,
      lat: 34.6817300,
      geometry: "point_area",
      evidenceGrade: "B",
      coordinateStatus: "axis-derived placeholder",
      coordinateSource: "prototype_inference",
      modernAnchor: "明堂天堂景区范围内",
      confidence: "needs_site_center_verification",
      evidenceSource: "明堂与天堂遗址考古报告/简报；相关保护展示资料",
      evidenceNote: "当前为建筑组叙事锚点，需与天堂基址中心或展示建筑中心区分。"
    },
    {
      key: "jiuzhou",
      name: "九洲池",
      lng: 112.4462691,
      lat: 34.6810348,
      geometry: "area",
      evidenceGrade: "B",
      coordinateStatus: "OSM heritage park centroid / local inferred site anchor",
      coordinateSource: "osm_heritage_park",
      modernAnchor: "隋唐洛阳城国家遗址公园西北部 / 九洲池遗址公园",
      confidence: "medium_for_site_area",
      evidenceSource: "OSM 隋唐洛阳城国家遗址公园面；九洲池遗址发掘与遗址公园资料",
      evidenceNote: "目前以遗址公园/园区面作为现代锚点，池岸、岛屿、水道需要进一步录入为面和线。"
    },
    {
      key: "xuanwu",
      name: "玄武门",
      lng: 112.4545641,
      lat: 34.6846100,
      geometry: "point",
      evidenceGrade: "B",
      coordinateStatus: "axis-derived placeholder",
      coordinateSource: "prototype_inference",
      modernAnchor: "玄武门大街以南中轴线方向",
      confidence: "needs_gis_control_point",
      evidenceSource: "第二册/第三册宫城北部、玄武门与中轴关系材料",
      evidenceNote: "当前为人物路径北端叙事锚点，需用考古报告或 GIS 控制点复核。"
    }
  ]
};
