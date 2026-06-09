export default function Story() {
  return (
    <section className="section story-section" id="story" aria-label="精灵传说">
      <div className="section-header reveal">
        <div className="section-label">关于精灵</div>
        <h2 className="section-title">精灵森林的传说</h2>
        <p className="section-subtitle">
          由香港艺术家龙家昇（Kasing Lung）于2015年创作的奇幻世界，灵感源自北欧民间传说
        </p>
      </div>
      <div className="story-wrap reveal">
        <div className="story-img">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80"
            alt="精灵森林深处"
            width="800"
            height="533"
            loading="lazy"
          />
        </div>
        <div className="story-content">
          <h3>一个关于精灵与森林的故事</h3>
          <p>
            LABUBU 的故事始于香港艺术家龙家昇（Kasing Lung）的笔下。他受北欧民间传说启发，创造了这群生活在森林深处的精灵——The Monsters。他们看起来有点吓人，但内心善良、乐于助人。
          </p>
          <p>
            每一只精灵都有独特的性格和外貌：有的调皮捣蛋，有的温柔内敛，有的爱幻想，有的爱派对。他们在森林里建造蘑菇小屋、开设甜品工坊、举办月光音乐会，过着无忧无虑的生活。
          </p>
          <p>
            2015年首次推出以来，The Monsters
            系列已经成长为全球最受欢迎的潮玩 IP 之一，从盲盒到毛绒玩具，从钥匙扣到大型摆件，每一个系列都让粉丝们欲罢不能。
          </p>
          <div className="story-tags">
            <span className="story-tag">北欧灵感</span>
            <span className="story-tag">手工质感</span>
            <span className="story-tag">独特设计</span>
            <span className="story-tag">全球收藏</span>
          </div>
        </div>
      </div>
    </section>
  );
}
