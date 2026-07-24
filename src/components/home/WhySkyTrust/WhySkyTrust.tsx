'use client';

import { 
  Lightbulb, 
  ShieldCheck, 
  RefreshCw, 
  Clock, 
  CheckCircle2, 
  Activity, 
  Lock, 
  Users, 
  Zap,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import styles from './WhySkyTrust.module.css';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Proactive Threat Hunting & Vulnerability Defense',
    desc: 'Beyond passive monitoring, our security engineers actively search for zero-days, misconfigurations, and anomalous behavior before automated alarms trigger.',
    themeClass: styles.themeBlue,
    badgeText: 'Proactive SOC',
  },
  {
    icon: ShieldCheck,
    title: 'Direct Access to Senior Security Architects',
    desc: 'Get immediate direct access to veteran security architects without automated bots, call centers, or ticketing delays when an urgent incident arises.',
    themeClass: styles.themePurple,
    badgeText: 'Human Expertise',
  },
  {
    icon: RefreshCw,
    title: 'Zero Trust & Cloud Native Infrastructure',
    desc: 'We architect security from the ground up, enforcing identity verification, micro-segmentation, and zero-trust policies across AWS, Azure, and GCP.',
    themeClass: styles.themeEmerald,
    badgeText: 'Cloud Native',
  },
  {
    icon: Clock,
    title: '<15 Minute Incident Containment SLA',
    desc: 'Our 24/7 SOC guarantees ultra-fast response times to isolate compromised endpoints and halt lateral threat movement across your enterprise network.',
    themeClass: styles.themeAmber,
    badgeText: 'Instant Containment',
  },
];

export default function WhySkyTrust() {
  return (
    <section className={styles.section} aria-label="Why Partner with SkyTrust">
      {/* Background ambient lighting */}
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className="section-label">Why Partner With Us</div>
          <h2 className="section-title">
            The Managed Security &amp; Software Partner<br />
            <span className="text-gradient">Built for Modern Enterprise Growth</span>
          </h2>
          <p className={styles.headerLead}>
            We act as a seamless extension of your engineering and security organization, delivering high-touch human expertise, rapid threat response, and enterprise-grade software capabilities.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Interactive Reason Cards */}
          <div className={styles.cardsGrid}>
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className={`${styles.reasonCard} ${reason.themeClass}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.categoryBadge}>{reason.badgeText}</span>
                  </div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDesc}>{reason.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Tech & Live Telemetry Deck */}
          <div className={styles.showcaseColumn}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseHeader}>
                <div className={styles.socStatus}>
                  <span className={styles.statusDot} />
                  <span className={styles.statusText}>Live 24/7 SOC Active</span>
                </div>
                <span className={styles.metricBadge}>
                  <Zap size={13} /> SLA &lt;15m
                </span>
              </div>

              <div className={styles.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                  alt="SkyTrust Security Operations Center"
                  className={styles.showcaseImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.showcaseStatsGrid}>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>99.99%</div>
                  <div className={styles.statKey}>Uptime &amp; Availability</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>0</div>
                  <div className={styles.statKey}>Uncontained Breaches</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>24/7</div>
                  <div className={styles.statKey}>SOC Engineers On-Call</div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className={styles.floatingGlassBadge}>
                <div className={styles.badgeIconWrap}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                </div>
                <div>
                  <div className={styles.badgeTitle}>SOC 2 &amp; ISO 27001 Certified</div>
                  <div className={styles.badgeSub}>Enterprise-Grade Audited Compliance</div>
                </div>
              </div>
            </div>

            {/* Bottom Consultation Link */}
            <div className={styles.bottomCtaBox}>
              <div>
                <div className={styles.ctaBoxTitle}>Need custom enterprise security architecture?</div>
                <div className={styles.ctaBoxSub}>Talk directly with our senior cloud architects today.</div>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm" style={{ gap: '6px' }}>
                Consult Architect <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
