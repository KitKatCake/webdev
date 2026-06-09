"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="newsletter-section" id="newsletter" aria-label="邮件订阅">
      <div className="section-header reveal">
        <div className="section-label">精灵来信</div>
        <h2 className="section-title">收到来自精灵森林的邀请函</h2>
        <p className="section-subtitle">
          订阅即可获得新品首发通知、限定款抢购提醒和专属森林福利
        </p>
      </div>
      <form className="newsletter-form reveal" id="newsletterForm" noValidate onSubmit={handleSubmit}>
        <input
          type="email"
          className={`newsletter-input${error ? " error" : ""}`}
          id="newsletterEmail"
          placeholder="输入你的邮箱地址..."
          required
          aria-label="邮箱地址"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
        />
        <button
          type="submit"
          className="newsletter-submit"
          id="newsletterBtn"
          disabled={submitted}
        >
          {submitted ? "欢迎加入森林！" : "加入森林"}
        </button>
      </form>
    </section>
  );
}
