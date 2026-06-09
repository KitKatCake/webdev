import { forestScenes } from "@/lib/data";

export default function ForestSection() {
  return (
    <section className="section forest-section" id="forest" aria-label="森林物语">
      <div className="section-header reveal">
        <div className="section-label">森林秘境</div>
        <h2 className="section-title">精灵们的北欧森林</h2>
        <p className="section-subtitle">
          在龙家昇先生的笔下，北欧森林是这些小精灵的家——这里有蘑菇小屋、梦幻花园、棉花糖云海
        </p>
      </div>
      <div className="forest-grid">
        {forestScenes.map((scene, i) => (
          <div className="forest-card reveal" key={i}>
            <div className="forest-card-icon">
              <i className={`fas ${scene.icon}`} aria-hidden="true" style={{ color: scene.color }}></i>
            </div>
            <h3 className="forest-card-title">{scene.title}</h3>
            <p className="forest-card-text">{scene.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
