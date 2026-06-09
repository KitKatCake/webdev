export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" id="heroBg">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85"
          alt="北欧精灵森林"
          width="1920"
          height="1080"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-label">泡泡玛特 · 精灵森林</div>
        <h1 className="hero-title">
          欢迎来到 <span>The Monsters</span>
          <br />
          精灵森林
        </h1>
        <p className="hero-desc">
          在遥远的北欧森林深处，住着一群长着尖耳朵、咧着大嘴巴笑嘻嘻的小精灵。
          <br />
          他们有着毛茸茸的身体、淘气的性格和温暖的心。
        </p>
        <div className="hero-buttons">
          <a href="#series" className="btn btn-primary">
            开启奇遇
          </a>
          <a href="#story" className="btn btn-outline">
            了解传说
          </a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>向下探索</span>
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
