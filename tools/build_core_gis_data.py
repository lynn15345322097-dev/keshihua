import csv
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "2.0 GIS图_考古报告位置信息提取表.csv"
OUT_DIR = ROOT / "data" / "structured"
WEB_OUT = ROOT / "web_prototype" / "assets" / "gis-core-data.js"


CORE_OBJECTS = [
    {
        "key": "palace_city",
        "name": "宫城/紫微城范围",
        "category": "city_boundary",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "",
        "rows": ["GIS-A001", "GIS-L001", "GIS-L002", "GIS-L003", "GIS-L004"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "rect", "x": 160, "y": 112, "width": 570, "height": 398},
    },
    {
        "key": "danei",
        "name": "大内范围",
        "category": "palace_core",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-A002", "GIS-L005", "GIS-L006"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "rect", "x": 255, "y": 165, "width": 385, "height": 297},
    },
    {
        "key": "east_gecheng",
        "name": "东隔城",
        "category": "palace_subarea",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-A003", "GIS-DOC001", "GIS-DOC002", "GIS-DOC052", "GIS-DOC053"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "rect", "x": 650, "y": 164, "width": 70, "height": 298},
    },
    {
        "key": "west_gecheng",
        "name": "西隔城",
        "category": "palace_subarea",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-A004", "GIS-DOC015", "GIS-DOC016"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "rect", "x": 170, "y": 164, "width": 75, "height": 298},
    },
    {
        "key": "east_jiacheng",
        "name": "东夹城",
        "category": "palace_subarea",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-DOC010", "GIS-DOC011", "GIS-DOC012", "GIS-DOC013", "GIS-DOC014"],
        "coord_status": "待回查",
        "svg_geometry": {"type": "rect", "x": 715, "y": 390, "width": 48, "height": 120},
    },
    {
        "key": "west_jiacheng",
        "name": "西夹城",
        "category": "palace_subarea",
        "layer": "叠城",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-DOC031", "GIS-DOC032", "GIS-DOC079", "GIS-DOC080", "GIS-DOC082"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "rect", "x": 132, "y": 392, "width": 58, "height": 118},
    },
    {
        "key": "yingtian",
        "name": "应天门",
        "category": "gate",
        "layer": "寻址",
        "geometry": "point_area",
        "parent": "palace_city",
        "rows": ["GIS-G001", "GIS-G002"],
        "coord_status": "OSM锚点，遗址范围待GIS校准",
        "svg_geometry": {"type": "point", "x": 444, "y": 510},
    },
    {
        "key": "xuanwu",
        "name": "玄武门",
        "category": "gate",
        "layer": "寻址",
        "geometry": "point",
        "parent": "palace_city",
        "rows": ["GIS-G007", "GIS-DOC043"],
        "coord_status": "中轴推算，待GIS控制点",
        "svg_geometry": {"type": "point", "x": 444, "y": 112},
    },
    {
        "key": "qianyuan",
        "name": "乾元门",
        "category": "gate",
        "layer": "寻址",
        "geometry": "point_area",
        "parent": "danei",
        "rows": ["GIS-X013"],
        "coord_status": "中轴推算，待GIS控制点",
        "svg_geometry": {"type": "point", "x": 444, "y": 426},
    },
    {
        "key": "mingtang",
        "name": "明堂",
        "category": "ritual_building",
        "layer": "寻址",
        "geometry": "point_area",
        "parent": "danei",
        "rows": ["GIS-X014"],
        "coord_status": "中轴推算，待基址中心复核",
        "svg_geometry": {"type": "point", "x": 444, "y": 346},
    },
    {
        "key": "tiantang",
        "name": "天堂",
        "category": "ritual_building",
        "layer": "寻址",
        "geometry": "point_area",
        "parent": "danei",
        "rows": [],
        "coord_status": "2.0总表暂无独立天堂记录，需补明堂天堂专题资料",
        "svg_geometry": {"type": "point", "x": 444, "y": 278},
    },
    {
        "key": "yongtai_bulang",
        "name": "永泰门步廊",
        "category": "corridor",
        "layer": "寻址",
        "geometry": "line_area",
        "parent": "danei",
        "rows": ["GIS-X011"],
        "coord_status": "待配准",
        "svg_geometry": {"type": "line", "points": [[444, 452], [444, 510]]},
    },
    {
        "key": "jiuzhou",
        "name": "九洲池",
        "category": "garden_water",
        "layer": "寻址",
        "geometry": "polygon",
        "parent": "palace_city",
        "rows": ["GIS-DOC021", "GIS-DOC061", "GIS-DOC075", "GIS-DOC076", "GIS-DOC077", "GIS-DOC078"],
        "coord_status": "OSM园区锚点，池体边界待图6-64/图6-65矢量化",
        "svg_geometry": {"type": "ellipse_area", "cx": 286, "cy": 220, "rx": 78, "ry": 48},
    },
]


REAL_COORDS = {
    "yingtian": {"lng": 112.4545641, "lat": 34.6769932, "source": "OSM historic/city_gate"},
    "qianyuan": {"lng": 112.4545641, "lat": 34.67905, "source": "axis-derived placeholder"},
    "mingtang": {"lng": 112.4545641, "lat": 34.6805, "source": "axis-derived placeholder"},
    "tiantang": {"lng": 112.4545641, "lat": 34.68173, "source": "axis-derived placeholder"},
    "jiuzhou": {"lng": 112.4462691, "lat": 34.6810348, "source": "OSM heritage park centroid"},
    "xuanwu": {"lng": 112.4545641, "lat": 34.68461, "source": "axis-derived placeholder"},
}


def read_source_rows():
    with SOURCE.open(encoding="utf-8-sig", newline="") as f:
        return {row["object_id"]: row for row in csv.DictReader(f)}


def best_grade(rows):
    order = {"A": 5, "A/B": 4, "B": 3, "B/C": 2, "C": 1, "": 0}
    grade = ""
    for row in rows:
        if order.get(row["evidence_grade"], 0) > order.get(grade, 0):
            grade = row["evidence_grade"]
    return grade or "待补充"


def csv_join(values):
    return "；".join(v for v in values if v)


def write_csv(path, fieldnames, rows):
    with path.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    source_by_id = read_source_rows()

    object_rows = []
    geometry_rows = []
    evidence_rows = []
    web_objects = []

    for index, item in enumerate(CORE_OBJECTS, start=1):
        source_rows = [source_by_id[row_id] for row_id in item["rows"] if row_id in source_by_id]
        missing_rows = [row_id for row_id in item["rows"] if row_id not in source_by_id]
        grade = best_grade(source_rows)
        source_ids = [row["object_id"] for row in source_rows]

        object_rows.append({
            "site_id": f"SITE_{index:03d}",
            "key": item["key"],
            "name": item["name"],
            "category": item["category"],
            "parent_key": item["parent"],
            "primary_geometry": item["geometry"],
            "display_layer": item["layer"],
            "evidence_grade": grade,
            "source_object_ids": csv_join(source_ids + missing_rows),
            "data_status": item["coord_status"],
        })

        coord = REAL_COORDS.get(item["key"], {})
        geometry_rows.append({
            "geom_id": f"GEOM_{index:03d}",
            "key": item["key"],
            "name": item["name"],
            "geometry_type": item["geometry"],
            "lng": coord.get("lng", ""),
            "lat": coord.get("lat", ""),
            "svg_geometry_json": json.dumps(item["svg_geometry"], ensure_ascii=False),
            "coord_source": coord.get("source", "current_overlay_svg"),
            "coord_status": item["coord_status"],
        })

        for row in source_rows:
            evidence_rows.append({
                "evidence_id": f"EVID_{len(evidence_rows) + 1:03d}",
                "key": item["key"],
                "name": item["name"],
                "source_object_id": row["object_id"],
                "source_object_name": row["object_name"],
                "source": row["source"],
                "evidence_type": row["evidence_type"],
                "evidence_grade": row["evidence_grade"],
                "geometry_type_raw": row["geometry_type"],
                "modern_anchor": row["modern_anchor"],
                "ancient_position": row["ancient_position"],
                "metric_info": row["metric_info"],
                "gis_method": row["gis_method"],
                "source_status": row["status"],
            })

        if not source_rows:
            evidence_rows.append({
                "evidence_id": f"EVID_{len(evidence_rows) + 1:03d}",
                "key": item["key"],
                "name": item["name"],
                "source_object_id": "MISSING_IN_2_0_TABLE",
                "source_object_name": "2.0总表暂无独立记录",
                "source": "需补充明堂天堂专题发掘/保护展示资料",
                "evidence_type": "待补充",
                "evidence_grade": "待补充",
                "geometry_type_raw": item["geometry"],
                "modern_anchor": "",
                "ancient_position": "",
                "metric_info": "",
                "gis_method": "暂用中轴序列位置作为原型锚点",
                "source_status": "待补充",
            })

        web_objects.append({
            "key": item["key"],
            "name": item["name"],
            "category": item["category"],
            "parentKey": item["parent"],
            "geometry": item["geometry"],
            "displayLayer": item["layer"],
            "evidenceGrade": grade,
            "sourceObjectIds": source_ids or ["MISSING_IN_2_0_TABLE"],
            "source": csv_join([row["source"] for row in source_rows]) or "需补充明堂天堂专题资料",
            "sourceStatus": csv_join(sorted(set(row["status"] for row in source_rows))) or "待补充",
            "modernAnchor": csv_join([row["modern_anchor"] for row in source_rows]) or coord.get("source", ""),
            "ancientPosition": csv_join([row["ancient_position"] for row in source_rows]),
            "metricInfo": csv_join([row["metric_info"] for row in source_rows]),
            "gisMethod": csv_join([row["gis_method"] for row in source_rows]) or "暂用中轴序列位置作为原型锚点",
            "coordStatus": item["coord_status"],
            "coord": coord or None,
            "svgGeometry": item["svg_geometry"],
        })

    write_csv(
        OUT_DIR / "gis_core_objects.csv",
        ["site_id", "key", "name", "category", "parent_key", "primary_geometry", "display_layer", "evidence_grade", "source_object_ids", "data_status"],
        object_rows,
    )
    write_csv(
        OUT_DIR / "gis_core_geometries.csv",
        ["geom_id", "key", "name", "geometry_type", "lng", "lat", "svg_geometry_json", "coord_source", "coord_status"],
        geometry_rows,
    )
    write_csv(
        OUT_DIR / "gis_core_evidence.csv",
        ["evidence_id", "key", "name", "source_object_id", "source_object_name", "source", "evidence_type", "evidence_grade", "geometry_type_raw", "modern_anchor", "ancient_position", "metric_info", "gis_method", "source_status"],
        evidence_rows,
    )

    payload = {
        "generatedFrom": SOURCE.name,
        "scope": "宫城核心区最小可用数据层",
        "notes": [
            "原始2.0总表保持不动，本文件只抽取网页原型需要的核心对象。",
            "svgGeometry用于当前原型叠合图定位，coord字段用于后续替换为GIS精确坐标。",
            "天堂在2.0总表中未检出独立记录，需继续补明堂天堂专题资料。",
        ],
        "objects": web_objects,
    }
    WEB_OUT.write_text(
        "window.LUOYANG_GIS_CORE_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )

    print(f"objects: {len(object_rows)}")
    print(f"geometries: {len(geometry_rows)}")
    print(f"evidence: {len(evidence_rows)}")
    print(f"wrote: {OUT_DIR}")
    print(f"wrote: {WEB_OUT}")


if __name__ == "__main__":
    main()
