"use client";

import { useState } from "react";
import { seriesData } from "@/lib/data";

const tabs = [
  { filter: "all", label: "全部精灵" },
  { filter: "classic", label: "经典系列" },
  { filter: "new", label: "新品上市" },
  { filter: "limited", label: "限定珍藏" },
  { filter: "collab", label: "联名系列" },
];

export default function SeriesSection() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? seriesData
    : seriesData.filter((s) => s.category === filter);

  return (
    <section className="section series-section" id="series" aria-label="盲盒系列">
      <div className="section-header reveal">
        <div className="section-label">盲盒系列</div>
        <h2 className="section-title">召唤你的精灵</h2>
        <p className="section-subtitle">超过300种不同颜色、形状和尺寸的精灵等待被发现</p>
      </div>
      <div className="series-tabs reveal" id="seriesTabs" role="tablist" aria-label="系列筛选">
        {tabs.map((tab) => (
          <button
            key={tab.filter}
            className={`series-tab${filter === tab.filter ? " active" : ""}`}
            data-filter={tab.filter}
            role="tab"
            aria-selected={filter === tab.filter}
            onClick={() => setFilter(tab.filter)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="series-grid" id="seriesGrid" role="tabpanel">
        {filtered.map((s) => (
          <div className="series-card reveal" key={s.id}>
            <div className="series-card-img">
              <img src={s.img} alt={s.name} width="460" height="460" loading="lazy" />
              <span className={`series-card-tag ${s.tagClass}`}>{s.tag}</span>
            </div>
            <div className="series-card-body">
              <h3 className="series-card-name">{s.name}</h3>
              <p className="series-card-en">{s.nameEn}</p>
              <div className="series-card-meta">
                <span className="series-card-count">
                  <i className="fas fa-puzzle-piece" aria-hidden="true"></i> {s.count}
                </span>
                <span className="series-card-price">¥{s.price}</span>
              </div>
              <p className="series-card-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
