export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo" aria-label="The Monsters 首页">
            <img
              src="/labubu-logo.png"
              className="logo-img"
              alt="LABUBU"
              width="36"
              height="36"
            />
            The Monsters
          </a>
          <p>
            由龙家昇（Kasing Lung）创作的精灵世界，泡泡玛特（POP MART）出品。每一只精灵都有自己的故事，等待被你发现。
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#" aria-label="微博"><i className="fab fa-weibo" aria-hidden="true"></i></a>
            <a href="#" aria-label="微信"><i className="fab fa-weixin" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">探索</h4>
          <ul className="footer-links">
            <li><a href="#story">精灵传说</a></li>
            <li><a href="#characters">精灵图鉴</a></li>
            <li><a href="#series">盲盒系列</a></li>
            <li><a href="#forest">森林物语</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">支持</h4>
          <ul className="footer-links">
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">订单追踪</a></li>
            <li><a href="#">退换政策</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">关于</h4>
          <ul className="footer-links">
            <li><a href="#">品牌故事</a></li>
            <li><a href="#">艺术家</a></li>
            <li><a href="#">可持续发展</a></li>
            <li><a href="#">招贤纳士</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{"在北欧森林的深处，精灵们正在等待与你相遇。"}</p>
        <p style={{ marginTop: 8 }}>
          The Monsters · POP MART. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
