"use client";
/* eslint-disable @next/next/no-img-element -- Vinext's local dev renderer is incompatible with next/image; fixed-dimension local HiDPI assets are intentional. */

import { useEffect, useRef, useState } from "react";
import { landing, type UseCaseCard } from "@/config/landing";
import { siteConfig } from "@/config/site";

type HeroIconName = "sparkle" | "arrow" | "shield" | "lock" | "check" | "send" | "double-check";

function HeroIcon({ name, size = 18 }: { name: HeroIconName; size?: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "sparkle") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7z"/><path {...common} d="m19 15-.7 2.3L16 18l2.3.7L19 21l.7-2.3L22 18l-2.3-.7z"/></svg>;
  if (name === "arrow") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 12h14M13 6l6 6-6 6"/></svg>;
  if (name === "shield") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6z"/><path {...common} d="m8.8 12 2.1 2.1 4.3-4.4"/></svg>;
  if (name === "lock") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="5" y="10" width="14" height="10" rx="2"/><path {...common} d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></svg>;
  if (name === "check") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="12" r="8.5"/><path {...common} d="m8.5 12 2.3 2.3 4.7-4.8"/></svg>;
  if (name === "send") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m4 4 16 8-16 8 3-8z"/><path {...common} d="M7 12h13"/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m4 12 3 3 6-7"/><path {...common} d="m11 12 3 3 6-7"/></svg>;
}

function Button({ children, outline = false, href = siteConfig.whatsappUrl, icon = false }: { children: React.ReactNode; outline?: boolean; href?: string; icon?: boolean }) {
  return <a className={`button ${outline ? "button-outline" : ""}`} href={href}>{children}{icon && <HeroIcon name="arrow" size={17} />}</a>;
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h2 id={id} className="section-title">{children}</h2>;
}

function StepIcon({ step }: { step: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (step === 0) return <svg viewBox="0 0 32 32" aria-hidden="true"><circle {...common} cx="7" cy="16" r="3"/><path {...common} d="M10 16h4.5"/><path {...common} d="M16 7.5 23 10v5.9c0 4.2-2.7 7.9-7 9.8-4.3-1.9-7-5.6-7-9.8V10z"/><path {...common} d="m12.8 16.3 2.1 2.1 4.3-4.5"/></svg>;
  if (step === 1) return <svg viewBox="0 0 32 32" aria-hidden="true"><path {...common} d="M6 7.5h20v13H15l-5 4v-4H6z"/><path {...common} d="M11 13h10M11 17h6"/><path {...common} d="M25.5 5v3m-1.5-1.5h3"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect {...common} x="5" y="6" width="22" height="19" rx="4"/><path {...common} d="m10.5 16 3.5 3.5 7.5-8"/><path {...common} d="M20.5 21.5h2.5"/></svg>;
}

function UseCaseResult({ card }: { card: UseCaseCard }) {
  switch (card.resultType) {
    case "listing": return <div className="listing-preview"><i /><div><b>Samsung Galaxy A56 256 GB</b><small>Nuevo · Stock: 3 unidades</small></div></div>;
    case "photo-identification": return <div className="identified-product"><i>⌁</i><div><b>Xiaomi Redmi Note 14</b><small>✓ Modelo identificado</small></div></div>;
    case "technical": return <div className="technical-list"><span>Marca <b>Samsung</b></span><span>Memoria <b>256 GB</b></span><span>Pantalla <b>6.7″</b></span></div>;
    case "price-range": return <div className="price-insight"><small>RANGO COMPETITIVO</small><div><i /><b /></div><span>S/ 1,249 — S/ 1,349</span></div>;
    case "discount": return <div className="metric-pairs"><span>Precio actual <b>S/ 599</b></span><span>Mínimo rentable <b>S/ 529</b></span></div>;
    case "promotion": return <div className="promotion-summary"><b>Oferta de la semana</b><span><strong>10%</strong><small>8 productos · 7 días</small></span></div>;
    case "eligibility": return <div className="status-list"><span>✓ 5 agregados</span><span>! 1 requiere ajuste de precio</span></div>;
    case "excel": return <div className="excel-preview"><i>↙</i><div><b>Ganancias.xlsx</b><small>Precio · Comisión · Envío</small></div><span>Excel generado</span></div>;
    case "bulk-update": return <div className="metric-grid"><span><b>62</b> precios</span><span><b>18</b> stocks</span><span><b>4</b> revisar</span></div>;
    case "sale": return <div className="sale-summary"><b>Nintendo Switch OLED</b><span><i>✓</i> Pago aprobado</span><small>Listo para despachar</small></div>;
    case "ranking": return <div className="ranking"><span><b>Más vendidos</b> Audífonos · 48</span><span><b>Menos vendidos</b> Cámara web · 1</span></div>;
    case "restock": return <div className="restock-list"><span>Audífonos <b>+20</b></span><span>Smartwatch <b>+12</b></span><span>Freidora <b>+8</b></span></div>;
    case "stagnant": return <div className="alert-summary"><b>S/ 12,480</b><span>inmovilizados en stock</span><small>3 con precio sobre el mercado</small></div>;
    case "performance": return <div className="performance-list"><span>Ajustar precio</span><span>Completar atributos</span><span>Revisar fotos</span></div>;
    case "dashboard": return <div className="mini-dashboard"><div><i /><i /><i /></div><span><b>326</b> ventas este trimestre</span></div>;
  }
}

function UseCaseDemoCard({ card }: { card: UseCaseCard }) { return <article className={`example-card demo-card result-${card.resultType}`}><span>{card.category}</span><div className="example-bubble">{card.prompt}</div><UseCaseResult card={card} /><strong>{card.resultTitle}</strong>{card.resultDescription && <small>{card.resultDescription}</small>}</article>; }
function PhotoDemoCard({ demo }: { demo: (typeof landing.photoExamples)[number] }) { return <article className="example-card example-photo"><img src={demo.image} alt={demo.alt} width={1122} height={1402} loading="lazy" decoding="async" /><div className="photo-overlay"><span>{demo.eyebrow}</span><strong>{demo.note}</strong></div></article>; }
function ShowcaseCards({ duplicate = false }: { duplicate?: boolean }) {
  const photoAfterCase = [1, 3, 5, 7, 9];
  return <div className="carousel-set" aria-hidden={duplicate || undefined}>{landing.useCases.flatMap((card, index) => [<UseCaseDemoCard card={card} key={card.id} />, ...(photoAfterCase.includes(index) ? [<PhotoDemoCard demo={landing.photoExamples[photoAfterCase.indexOf(index)]} key={landing.photoExamples[photoAfterCase.indexOf(index)].eyebrow} />] : [])])}</div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeShowcasePage, setActiveShowcasePage] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const showcasePausedRef = useRef(false);
  const showcaseResumeTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const showcaseDragRef = useRef({ active: false, pointerId: 0, startX: 0, startScroll: 0 });
  const [isDraggingShowcase, setIsDraggingShowcase] = useState(false);
  const showcasePages = 4;
  useEffect(() => {
    let previousTime = Date.now();
    const interval = window.setInterval(() => {
      const time = Date.now();
      const carousel = showcaseRef.current;
      if (carousel && !showcasePausedRef.current) {
        const loopWidth = carousel.scrollWidth / 2;
        carousel.scrollLeft += (time - previousTime) * 0.018;
        if (carousel.scrollLeft >= loopWidth) carousel.scrollLeft -= loopWidth;
      }
      previousTime = time;
    }, 32);
    return () => window.clearInterval(interval);
  }, []);
  const moveShowcase = (page: number) => {
    const carousel = showcaseRef.current;
    if (!carousel) return;
    const loopWidth = carousel.scrollWidth / 2;
    showcasePausedRef.current = true;
    carousel.scrollLeft = (loopWidth * page) / showcasePages;
    setActiveShowcasePage(page);
    if (showcaseResumeTimerRef.current) window.clearTimeout(showcaseResumeTimerRef.current);
    showcaseResumeTimerRef.current = window.setTimeout(() => { showcasePausedRef.current = false; }, 700);
  };
  const startShowcaseDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const carousel = event.currentTarget;
    showcasePausedRef.current = true;
    showcaseDragRef.current = { active: true, pointerId: event.pointerId, startX: event.clientX, startScroll: carousel.scrollLeft };
    carousel.setPointerCapture(event.pointerId);
  };
  const dragShowcase = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = showcaseDragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 2) setIsDraggingShowcase(true);
    event.currentTarget.scrollLeft = drag.startScroll - distance;
  };
  const stopShowcaseDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = showcaseDragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;
    showcaseDragRef.current.active = false;
    setIsDraggingShowcase(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    showcasePausedRef.current = false;
  };
  return <main>
    <header className="header shell">
      <a href="#inicio" className="brand"><span>Chato</span><b>Merc</b><i /></a>
      <nav>{siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <Button>Solicitar demo</Button>
    </header>

    <section id="inicio" className="hero shell">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-panel" />
        <div className="hero-dots hero-dots-top" />
        <div className="hero-dots hero-dots-bottom" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow"><HeroIcon name="sparkle" size={16} />{landing.hero.eyebrow}</p>
        <h1>Gestiona Mercado Libre hablando con una IA que <em>entiende tu negocio.</em></h1>
        <p className="hero-description">{landing.hero.description}</p>
        <div className="button-row"><Button icon>Comenzar gratis</Button><Button outline href="#como-funciona">Ver cómo funciona</Button></div>
        <div className="quick-points"><span><HeroIcon name="shield" />Sin tarjetas de crédito</span><span><HeroIcon name="lock" />Datos seguros y privados</span><span><HeroIcon name="check" />Cancela cuando quieras</span></div>
      </div>
      <div className="hero-visual" aria-label="Ejemplo de una conversación con ChatoMerc">
        <div className="chat-window">
          <div className="chat-header"><strong>ChatoMerc</strong><span><i />En línea</span></div>
          <div className="chat-body">
            <div className="chat-message chat-message-user">¿Cuáles son mis productos más vendidos<br />en los últimos 30 días?<small>10:32 <b><HeroIcon name="double-check" size={15} /></b></small></div>
            <div className="chat-message chat-message-assistant">Aquí tienes tus productos más vendidos<br />en los últimos 30 días.<small>10:32</small></div>
            <div className="sales-table">
              <div className="sales-table-head"><span>Producto</span><span>Unidades vendidas</span><span>Facturación</span></div>
              {[['Auriculares Bluetooth Inalámbricos','263','$ 1.196.250'],['Cargador Rápido USB-C 20W','198','$ 683.100'],['Soporte para Celular de Auto','154','$ 354.200'],['Cable USB-C a Lightning 1m','142','$ 245.600'],['Smartwatch Deportivo IP68','116','$ 1.045.800']].map(([name, units, total]) => <div className="sales-table-row" key={name}><span>{name}</span><span>{units}</span><span>{total}</span></div>)}
            </div>
            <div className="chat-input">Escribí tu mensaje... <b><HeroIcon name="send" size={20} /></b></div>
            <p className="chat-disclaimer">ChatoMerc puede cometer errores. Verificá siempre la información importante.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="funciones" className="features shell"><SectionTitle>Todo lo que necesitas en un solo asistente</SectionTitle><div>{landing.features.map(([icon, title, items]) => <article key={title}><span className="feature-icon"><img src={icon} alt="" width="96" height="96" /></span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="showcase shell"><SectionTitle>Mira lo que puedes lograr en segundos</SectionTitle><div ref={showcaseRef} className={`showcase-carousel ${isDraggingShowcase ? "is-dragging" : ""}`} aria-label="Ejemplos de conversaciones y resultados en ChatoMerc" onPointerDown={startShowcaseDrag} onPointerMove={dragShowcase} onPointerUp={stopShowcaseDrag} onPointerCancel={stopShowcaseDrag} onScroll={(event) => { const loopWidth = event.currentTarget.scrollWidth / 2; setActiveShowcasePage(Math.min(showcasePages - 1, Math.floor((event.currentTarget.scrollLeft % loopWidth) / (loopWidth / showcasePages)))); }}><div className="carousel"><ShowcaseCards /><ShowcaseCards duplicate /></div></div><div className="dots" aria-label="Navegación de ejemplos">{Array.from({ length: showcasePages }, (_, index) => <button key={index} className={activeShowcasePage === index ? "active" : ""} onClick={() => moveShowcase(index)} aria-label={`Ver ejemplos ${index + 1}`} aria-current={activeShowcasePage === index} />)}</div></section>

    <section id="como-funciona" className="steps shell"><SectionTitle>Funciona asi de simple</SectionTitle><div>{landing.steps.map(([number, title, description], i) => <article key={number}><span className="step-number">{number}</span><div className="step-symbol"><StepIcon step={i} /></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section id="planes" className="pricing shell"><div className="pricing-grid">{landing.plans.map((plan) => <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular">MÁS POPULAR</span>}<p className="plan-icon">{plan.name === 'Agencia' ? '♟' : '♙'}</p><h3>{plan.name}</h3><p className="audience">{plan.audience}</p><p className="price"><small>{plan.prefix}</small>S/{plan.price}<small> /mes</small></p><p className="setup">{plan.setup}</p><b>Todo lo del plan {plan.name === 'Vendedor' ? 'Vendedor' : plan.name === 'Vendedor Pro' ? 'Vendedor, más:' : 'Vendedor Pro, más:'}</b><ul>{plan.items.map((item) => <li key={item}>✓ {item}</li>)}</ul><Button outline={!plan.featured}>{plan.cta}</Button></article>)}</div></section>

    <section id="seguridad" className="trust shell"><SectionTitle>Tu cuenta y tus datos permanecen protegidos</SectionTitle><div>{landing.trust.map((item, i) => <article key={item}><span>{['⬟','◉','▣','✓'][i]}</span>{item}</article>)}</div></section>

    <section id="faq" className="faq shell"><SectionTitle>Preguntas frecuentes</SectionTitle><div className="faq-grid">{landing.faqs.map(([question, answer], index) => <article key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<span>{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>

    <section className="closing shell"><div><h2>Convierte tu cuenta de Mercado Libre en una herramienta <em>que puedes consultar con IA.</em></h2><p>Solicita una demostración y descubre cómo reducir el trabajo manual de tu operación desde hoy.</p><Button>Solicitar demostración por WhatsApp</Button><small>Respuesta rápida · Sin compromiso</small></div><div className="device-scene"><div className="laptop"><div className="screen"><b>ChatoMerc</b><strong>S/ 24,560.00</strong><div className="mini-line" /></div></div><div className="phone"><b>Ventas</b><span>S/ 3,842</span></div><i /><i /></div></section>
    <footer className="shell">© {new Date().getFullYear()} {siteConfig.name}. IA para vendedores de Mercado Libre.</footer>
  </main>;
}
