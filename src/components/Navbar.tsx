"use client";

import { useEffect, useState } from "react";

const LABUBU_LOGO = "/labubu-logo.png";
// const LABUBU_SVG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYm9keUdyYWQiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Q0QTU3NCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNDNDk0NjQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZhY2VHcmFkIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMEQ0QjgiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRThDNEEwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCw1MCkiPgogICAgPGVsbGlwc2UgY3g9Ii0yMSIgY3k9Ii0yNyIgcng9IjEwIiByeT0iMTYiIGZpbGw9InVybCgjYm9keUdyYWQpIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAgLTIxIC0yNykiLz4KICAgIDxlbGxpcHNlIGN4PSItMjEiIGN5PSItMjUiIHJ4PSI1IiByeT0iOSIgZmlsbD0idXJsKCNmYWNlR3JhZCkiIHRyYW5zZm9ybT0icm90YXRlKC0yMCAtMjEgLTI1KSIvPgogICAgPGVsbGlwc2UgY3g9IjIxIiBjeT0iLTI3IiByeD0iMTAiIHJ5PSIxNiIgZmlsbD0idXJsKCNib2R5R3JhZCkiIHRyYW5zZm9ybT0icm90YXRlKDIwIDIxIC0yNykiLz4KICAgIDxlbGxpcHNlIGN4PSIyMSIgY3k9Ii0yNSIgcng9IjUiIHJ5PSI5IiBmaWxsPSJ1cmwoI2ZhY2VHcmFkKSIgdHJhbnNmb3JtPSJyb3RhdGUoMjAgMjEgLTI1KSIvPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSIyIiByeD0iMzIiIHJ5PSIzMCIgZmlsbD0idXJsKCNib2R5R3JhZCkiLz4KICAgIDxlbGxpcHNlIGN4PSIwIiBjeT0iNyIgcng9IjI0IiByeT0iMjAiIGZpbGw9InVybCgjZmFjZUdyYWQpIi8+CiAgICA8Y2lyY2xlIGN4PSItMTMiIGN5PSItMiIgcj0iNC41IiBmaWxsPSIjMkQxRjBGIi8+CiAgICA8Y2lyY2xlIGN4PSIxMyIgY3k9Ii0yIiByPSI0LjUiIGZpbGw9IiMyRDFGMEYiLz4KICAgIDxjaXJjbGUgY3g9Ii0xMS41IiBjeT0iLTMuNSIgcj0iMS41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjkiLz4KICAgIDxjaXJjbGUgY3g9IjE0LjUiIGN5PSItMy41IiByPSIxLjUiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuOSIvPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSI2IiByeD0iMy41IiByeT0iMi41IiBmaWxsPSIjQjg4NDVBIi8+CiAgICA8cGF0aCBkPSJNIC0xOCAxMCBRIC04IDIzIDAgMjMgUSA4IDIzIDE4IDEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyRDFGMEYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxyZWN0IHg9Ii04IiB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIHJ4PSI0IiBmaWxsPSIjRTJDN0EwIi8+CiAgPC9nPgo8L3N2Zz4=";

const sections = ["story", "characters", "series", "forest", "community"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let navTicking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
      if (!navTicking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY + 120;
          let current = "";
          sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollY) current = id;
          });
          setActiveSection(current);
          navTicking = false;
        });
        navTicking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { href: "#story", label: "精灵传说", id: "story" },
    { href: "#characters", label: "精灵图鉴", id: "characters" },
    { href: "#series", label: "盲盒系列", id: "series" },
    { href: "#forest", label: "森林物语", id: "forest" },
    { href: "#community", label: "精灵访客", id: "community" },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar" aria-label="主导航">
        <a href="#" className="logo" aria-label="LABUBU 首页">
          <img src={LABUBU_LOGO} className="logo-img" alt="LABUBU" width="44" height="44" />
        </a>
        <ul className="nav-links" role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                data-section={item.id}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hamburger"
          id="hamburgerBtn"
          aria-label="打开菜单"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen(true)}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </div>
      </nav>

      <div
        className={`overlay${menuOpen ? " active" : ""}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`mobile-menu${menuOpen ? " active" : ""}`}
        id="mobileMenu"
        role="dialog"
        aria-label="导航菜单"
      >
        <div
          className="mobile-close"
          id="mobileClose"
          aria-label="关闭菜单"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen(false)}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </div>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
