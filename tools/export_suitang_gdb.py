from __future__ import annotations

import csv
import json
from pathlib import Path

from osgeo import gdal, ogr


GDB_PATH = Path("/Users/lynnliu/Downloads/古代城市矢量/隋唐洛阳城.gdb")
OUT_DIR = Path("outputs/suitang_vector")
WEB_DIR = Path("web_prototype/assets/suitang_geojson")


def safe_name(name: str) -> str:
    return (
        name.replace("/", "_")
        .replace("\\", "_")
        .replace(" ", "_")
        .replace(":", "_")
    )


def layer_info(layer: ogr.Layer) -> dict[str, str | int]:
    srs = layer.GetSpatialRef()
    extent = layer.GetExtent()
    defn = layer.GetLayerDefn()
    fields = [defn.GetFieldDefn(i).GetName() for i in range(defn.GetFieldCount())]
    return {
        "layer_name": layer.GetName(),
        "geometry_type": ogr.GeometryTypeToName(layer.GetGeomType()),
        "feature_count": layer.GetFeatureCount(),
        "extent_min_x": extent[0],
        "extent_max_x": extent[1],
        "extent_min_y": extent[2],
        "extent_max_y": extent[3],
        "srs_name": srs.GetName() if srs else "",
        "fields": "；".join(fields),
    }


def export_layer(source: Path, layer_name: str, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    options = gdal.VectorTranslateOptions(
        format="GeoJSON",
        layers=[layer_name],
        dstSRS="EPSG:4326",
        accessMode="overwrite",
    )
    result = gdal.VectorTranslate(str(target), str(source), options=options)
    if result is None:
        raise RuntimeError(f"Failed to export layer: {layer_name}")
    result = None


def write_feature_collection_index(layer_rows: list[dict[str, str | int]]) -> None:
    index = {
        "source": str(GDB_PATH),
        "crs": "EPSG:4326",
        "note": "Exported from 隋唐洛阳城.gdb with GDAL. Use as spatial base data; evidence grades still come from the archaeological extraction table.",
        "layers": [
            {
                "name": row["layer_name"],
                "file": f"{safe_name(str(row['layer_name']))}.geojson",
                "geometry_type": row["geometry_type"],
                "feature_count": row["feature_count"],
            }
            for row in layer_rows
        ],
    }
    for folder in (OUT_DIR, WEB_DIR):
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "index.json").write_text(
            json.dumps(index, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    WEB_DIR.mkdir(parents=True, exist_ok=True)

    ds = ogr.Open(str(GDB_PATH))
    if ds is None:
        raise SystemExit(f"Cannot open {GDB_PATH}")

    rows: list[dict[str, str | int]] = []
    for i in range(ds.GetLayerCount()):
        layer = ds.GetLayerByIndex(i)
        info = layer_info(layer)
        rows.append(info)
        layer_name = str(info["layer_name"])
        filename = f"{safe_name(layer_name)}.geojson"
        export_layer(GDB_PATH, layer_name, OUT_DIR / filename)
        export_layer(GDB_PATH, layer_name, WEB_DIR / filename)

    csv_path = OUT_DIR / "layer_inventory.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)

    readme = OUT_DIR / "README.md"
    readme.write_text(
        "# 隋唐洛阳城 GDB 图层导出\n\n"
        f"源数据：`{GDB_PATH}`\n\n"
        "输出坐标系：`EPSG:4326`\n\n"
        "这些 GeoJSON 是网页和 GIS 叠合的空间底图。考古证据等级、页码、图号仍以 "
        "`2.0 GIS图_考古报告位置信息提取表.csv` 为准。\n\n"
        "## 图层\n\n"
        + "\n".join(
            f"- `{row['layer_name']}`：{row['geometry_type']}，{row['feature_count']} 条"
            for row in rows
        )
        + "\n",
        encoding="utf-8",
    )
    write_feature_collection_index(rows)
    print(f"Exported {len(rows)} layers to {OUT_DIR} and {WEB_DIR}")


if __name__ == "__main__":
    main()
