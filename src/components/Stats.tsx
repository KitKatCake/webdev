export default function Stats() {
  const stats = [
    { number: "50+", label: "精灵系列" },
    { number: "300+", label: "精灵造型" },
    { number: "80+", label: "覆盖国家" },
    { number: "10M+", label: "森林粉丝" },
  ];

  return (
    <section className="stats-section" aria-label="数据统计">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item reveal" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
