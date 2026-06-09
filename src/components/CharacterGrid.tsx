import { characters } from "@/lib/data";

export default function CharacterGrid() {
  return (
    <section className="section char-section" id="characters" aria-label="精灵图鉴">
      <div className="section-header reveal">
        <div className="section-label">精灵图鉴</div>
        <h2 className="section-title">认识 The Monsters 家族</h2>
        <p className="section-subtitle">每一只精灵都有自己的故事，等待被你发现</p>
      </div>
      <div className="char-grid">
        {characters.map((c, i) => (
          <div className="char-card reveal" key={i}>
            <div className="char-card-img">
              <img src={c.img} alt={c.alt} width="460" height="460" loading="lazy" />
            </div>
            <div className="char-card-body">
              <h3 className="char-card-name">{c.name}</h3>
              <p className="char-card-role">{c.role}</p>
              <p className="char-card-desc">{c.desc}</p>
              <div className="char-card-tags">
                {c.tags.map((tag, j) => (
                  <span className="char-card-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
