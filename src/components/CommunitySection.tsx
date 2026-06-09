import { communityReviews } from "@/lib/data";

export default function CommunitySection() {
  return (
    <section className="section community-section" id="community" aria-label="精灵访客评价">
      <div className="section-header reveal">
        <div className="section-label">精灵访客</div>
        <h2 className="section-title">来自森林的声音</h2>
        <p className="section-subtitle">全球粉丝与精灵们的温暖故事</p>
      </div>
      <div className="community-grid">
        {communityReviews.map((review, i) => (
          <div className="community-card reveal" key={i}>
            <div className="community-header">
              <img
                className="community-avatar"
                src={review.avatar}
                alt={`${review.name} 头像`}
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <div className="community-name">{review.name}</div>
                <div className="community-date">{review.location} · {review.date}</div>
              </div>
            </div>
            <div className="community-stars" aria-label={review.ariaLabel}>
              {review.stars.split(" ").map((cls, j) => (
                <i className={cls} aria-hidden="true" key={j}></i>
              ))}
            </div>
            <p className="community-text">{review.text}</p>
            <div className="community-images">
              {review.images.map((img, j) => (
                <img key={j} src={img} alt="" width="64" height="64" loading="lazy" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
