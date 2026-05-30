"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/assets/interior-bathing.png",
    alt: "高端宠物洗护区",
    title: "洗护区",
    text: "独立浴缸、恒温吹护、一宠一消毒。"
  },
  {
    image: "/assets/interior-grooming.png",
    alt: "高端宠物美容造型区",
    title: "美容造型区",
    text: "明亮镜面、专业工具墙、低压安抚护理。"
  },
  {
    image: "/assets/interior-lounge.png",
    alt: "宠物护理接待与休息区",
    title: "接待休息区",
    text: "预约接待、主人等候、护理用品陈列。"
  }
];

const services = [
  {
    image: "/assets/service-golden.png",
    alt: "洗护后的金毛犬",
    title: "洁净洗护",
    text: "温和清洁、吹干梳理、耳道护理、指甲修剪，适合每月基础保养。"
  },
  {
    image: "/assets/service-cat-grooming.png",
    alt: "正在被梳理的宠物猫",
    title: "造型美容",
    text: "按品种、毛量和生活习惯设计造型，包含局部修剪和全身造型。"
  },
  {
    image: "/assets/service-calm-cat.png",
    alt: "安静坐着的宠物猫",
    title: "猫咪护理",
    text: "低刺激环境、分段安抚、去浮毛、清洁护理，减少猫咪洗护压力。"
  }
];

const prices = [
  ["基础", "日常洗护", "¥88 起", "洗澡、吹干、梳毛、耳眼清洁、指甲修剪。"],
  ["推荐", "洗护 + 修剪", "¥168 起", "基础洗护加脚底毛、腹底毛、脸部或局部造型。"],
  ["高级", "全身造型", "¥268 起", "专属造型沟通、全身修剪、护理记录和养护建议。"]
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const closeNav = () => setNavOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() || "主人";
    const pet = form.get("pet") || "宠物";
    const service = form.get("service") || "护理";

    setStatus(`${name}，已收到 ${pet} 的「${service}」预约信息。上线后这里可以接入表单、微信或门店 CRM。`);
    event.currentTarget.reset();
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""} ${navOpen ? "nav-open" : ""}`}>
        <a className="brand" href="#top" aria-label="暖爪宠物护理首页" onClick={closeNav}>
          <span className="brand-mark">P</span>
          <span>暖爪宠物护理</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
        <nav id="site-nav" className="site-nav" aria-label="主导航">
          {[
            ["#services", "服务"],
            ["#store", "环境"],
            ["#pricing", "价格"],
            ["#location", "位置"],
            ["#booking", "预约"]
          ].map(([href, label]) => (
            <a href={href} key={href} onClick={closeNav}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img src="/assets/interior-bathing.png" alt="暖爪宠物护理高端洗护区" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="eyebrow">珠海平沙镇时代港 · 高端宠物洗护</p>
            <h1 id="hero-title">暖爪宠物护理</h1>
            <p>
              为猫狗提供温和、透明、可预约的日常护理服务。明亮的洗护环境、独立护理台和细致记录，让毛孩子舒服一点，也让主人放心一点。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#booking">立即预约</a>
              <a className="button secondary" href="#store">查看门店环境</a>
              <a className="phone-link" href="tel:07566966658">预约电话：0756-6966658</a>
            </div>
          </div>
        </section>

        <section className="quick-stats" aria-label="门店亮点">
          <div><strong>4.9/5</strong><span>顾客评分</span></div>
          <div><strong>30min</strong><span>基础护理起</span></div>
          <div><strong>1v1</strong><span>独立护理台</span></div>
          <div><strong>时代港</strong><span>平沙镇店铺位置</span></div>
        </section>

        <section id="services" className="section services">
          <SectionHeading eyebrow="Services" title="常用护理服务">
            从日常清洁到造型修剪，流程清楚、价格透明，适合初次到店和长期护理。
          </SectionHeading>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.alt} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="store" className="section store">
          <SectionHeading eyebrow="Store View" title="门店环境轮播">
            三张图分别展示洗护区、美容造型区和接待休息区，整体是中国高端宠物洗护店的清爽、明亮、温柔风格。
          </SectionHeading>
          <div className="carousel" aria-roledescription="carousel" aria-label="店内环境轮播">
            <div className="carousel-track">
              {slides.map((slide, index) => (
                <article className={`carousel-slide ${activeSlide === index ? "active" : ""}`} key={slide.title}>
                  <img src={slide.image} alt={slide.alt} />
                  <div>
                    <strong>{slide.title}</strong>
                    <span>{slide.text}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="carousel-controls" aria-label="轮播控制">
              <button type="button" className="carousel-prev" aria-label="上一张" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)}>‹</button>
              <div className="carousel-dots" role="tablist" aria-label="选择环境图片">
                {slides.map((slide, index) => (
                  <button
                    type="button"
                    className={activeSlide === index ? "active" : ""}
                    aria-label={`显示${slide.title}`}
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                  ></button>
                ))}
              </div>
              <button type="button" className="carousel-next" aria-label="下一张" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>›</button>
            </div>
          </div>
        </section>

        <section className="section experience">
          <div className="experience-copy">
            <p className="eyebrow">Care Process</p>
            <h2>让主人放心，也让宠物放松</h2>
            <p>到店先做皮毛状态确认，护理中实时记录，结束后提供护理建议。对敏感、年长或第一次洗护的宠物，会预留更充足的时间。</p>
            <ul className="check-list">
              <li>独立消毒护理台，工具一宠一清洁</li>
              <li>可提前备注过敏、胆小、咬毛巾等习惯</li>
              <li>护理完成后发送照片和注意事项</li>
            </ul>
          </div>
          <div className="experience-image">
            <img src="/assets/interior-grooming.png" alt="暖爪宠物护理美容造型区" />
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <SectionHeading eyebrow="Pricing" title="开业试运营套餐">
            价格可按体型、毛量和打结程度微调，到店确认后再开始服务。
          </SectionHeading>
          <div className="price-grid">
            {prices.map(([tag, title, price, text], index) => (
              <article className={`price-card ${index === 1 ? "featured" : ""}`} key={title}>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p className="price">{price}</p>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="section team">
          <SectionHeading eyebrow="Team" title="护理师团队">
            更懂宠物行为的护理流程，降低紧张感，让护理不再像一场硬仗。
          </SectionHeading>
          <div className="team-list">
            {services.map((service, index) => (
              <article key={service.title}>
                <img src={service.image} alt={service.alt} />
                <h3>{["性格评估", "护理档案", "预约制"][index]}</h3>
                <p>{["根据宠物状态安排洗护节奏，不强迫、不赶工。", "记录皮肤、毛发、耳朵和指甲情况，方便长期跟踪。", "错峰接待，减少等待和陌生宠物之间的互相刺激。"][index]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="section location">
          <SectionHeading eyebrow="Location" title="门店位置">
            根据你提供的地图位置绘制：门店位于珠海市平沙镇时代港，靠近升平大道与美平二街交汇区域。
          </SectionHeading>
          <div className="map-panel">
            <img src="/assets/location-map.png" alt="珠海市平沙镇时代港暖爪宠物护理位置示意图" />
            <div className="map-card">
              <strong>暖爪宠物护理</strong>
              <span>珠海市平沙镇时代港</span>
              <a className="button primary" href="#booking">预约到店</a>
            </div>
          </div>
        </section>

        <section id="booking" className="section booking">
          <div className="booking-copy">
            <p className="eyebrow">Book Now</p>
            <h2>预约到店体验</h2>
            <p>填写基础信息后，门店会在营业时间内联系确认体型、服务内容和可选时间。</p>
            <address>
              珠海市平沙镇时代港<br />
              靠近升平大道与美平二街交汇区域<br />
              预约电话：0756-6966658<br />
              每日 10:00 - 20:00
            </address>
          </div>
          <form className="booking-form" id="booking-form" onSubmit={handleSubmit}>
            <label>主人姓名<input name="name" autoComplete="name" required /></label>
            <label>联系电话<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label>宠物类型<select name="pet" required><option value="">请选择</option><option>狗狗</option><option>猫咪</option><option>其他小宠</option></select></label>
            <label>需要的服务<select name="service" required><option value="">请选择</option><option>日常洗护</option><option>洗护 + 修剪</option><option>全身造型</option><option>上门接送</option></select></label>
            <label className="full">备注<textarea name="note" rows="4" placeholder="例如：体重、毛发打结、是否胆小、希望预约时间"></textarea></label>
            <button className="button primary full" type="submit">提交预约</button>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 暖爪宠物护理</p>
        <div>
          <a href="#services">服务项目</a>
          <a href="#store">门店环境</a>
          <a href="#location">门店位置</a>
          <a href="#booking">预约咨询</a>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
