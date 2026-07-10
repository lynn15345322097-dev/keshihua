from __future__ import annotations

import json
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib.patches import Polygon as MplPolygon


DATA_DIR = Path("outputs/suitang_vector")
OUT_DIR = DATA_DIR

STYLE = {
    "里坊": {"edge": "#9a8fc3", "face": "#dcd2fa", "alpha": 0.35, "lw": 0.35},
    "市": {"edge": "#498bb8", "face": "#87CEFA", "alpha": 0.45, "lw": 0.5},
    "太微城_内城": {"edge": "#b77b5f", "face": "#FFCBB4", "alpha": 0.48, "lw": 0.6},
    "紫薇城": {"edge": "#222222", "face": "#f7ead7", "alpha": 0.35, "lw": 0.9},
    "外郭城墙": {"edge": "#157a3f", "face": "none", "alpha": 0.95, "lw": 1.0},
    "桥": {"edge": "#008B00", "face": "none", "alpha": 0.95, "lw": 0.9},
    "城门": {"edge": "#157a3f", "face": "#157a3f", "alpha": 0.95, "lw": 0.5},
    "上阳宫": {"edge": "#6d6d6d", "face": "#dddddd", "alpha": 0.18, "lw": 0.35},
    "上阳宫城墙": {"edge": "#555555", "face": "none", "alpha": 0.45, "lw": 0.6},
    "上阳宫门": {"edge": "#555555", "face": "#555555", "alpha": 0.5, "lw": 0.4},
}


def iter_points(coords):
    if not coords:
        return
    if isinstance(coords[0], (int, float)):
        yield coords[0], coords[1]
        return
    for item in coords:
        yield from iter_points(item)


def draw_line(ax, coords, color, lw, alpha):
    if not coords:
        return
    if isinstance(coords[0][0], (int, float)):
        xs = [p[0] for p in coords]
        ys = [p[1] for p in coords]
        ax.plot(xs, ys, color=color, linewidth=lw, alpha=alpha)
    else:
        for part in coords:
            draw_line(ax, part, color, lw, alpha)


def draw_polygon(ax, coords, edge, face, lw, alpha):
    if not coords:
        return
    if coords and coords[0] and isinstance(coords[0][0][0], (int, float)):
        outer = coords[0]
        patch = MplPolygon(
            [(p[0], p[1]) for p in outer],
            closed=True,
            edgecolor=edge,
            facecolor=face,
            linewidth=lw,
            alpha=alpha,
        )
        ax.add_patch(patch)
    else:
        for poly in coords:
            draw_polygon(ax, poly, edge, face, lw, alpha)


def draw_layer(ax, layer_name):
    path = DATA_DIR / f"{layer_name}.geojson"
    if not path.exists():
        return
    style = STYLE.get(layer_name, {"edge": "#999999", "face": "none", "alpha": 0.5, "lw": 0.4})
    data = json.loads(path.read_text(encoding="utf-8"))
    for feature in data.get("features", []):
        geom = feature.get("geometry") or {}
        gtype = geom.get("type")
        coords = geom.get("coordinates")
        if gtype in {"MultiPolygon", "Polygon"}:
            draw_polygon(ax, coords, style["edge"], style["face"], style["lw"], style["alpha"])
        elif gtype in {"MultiLineString", "LineString"}:
            draw_line(ax, coords, style["edge"], style["lw"], style["alpha"])
        elif gtype in {"MultiPoint", "Point"}:
            pts = list(iter_points(coords))
            if pts:
                ax.scatter(
                    [p[0] for p in pts],
                    [p[1] for p in pts],
                    s=10,
                    c=style["face"],
                    edgecolors=style["edge"],
                    linewidths=style["lw"],
                    alpha=style["alpha"],
                    zorder=8,
                )


def save_map(filename, extent=None):
    fig, ax = plt.subplots(figsize=(9, 7), dpi=220)
    for layer in ["里坊", "市", "上阳宫", "太微城_内城", "紫薇城", "外郭城墙", "上阳宫城墙", "桥", "城门", "上阳宫门"]:
        draw_layer(ax, layer)
    if extent:
        ax.set_xlim(extent[0], extent[1])
        ax.set_ylim(extent[2], extent[3])
    ax.set_aspect("equal", adjustable="box")
    ax.grid(color="#dddddd", linewidth=0.35, alpha=0.65)
    ax.set_xlabel("Longitude")
    ax.set_ylabel("Latitude")
    ax.set_title(filename.replace("_", " ").replace(".png", ""))
    fig.savefig(OUT_DIR / filename, bbox_inches="tight")
    plt.close(fig)


def main():
    save_map("suitang_luoyang_vector_full.png")
    save_map("suitang_luoyang_palace_core.png", extent=[112.438, 112.472, 34.672, 34.692])


if __name__ == "__main__":
    main()
